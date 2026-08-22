#!/usr/bin/env python3
"""Check the latest public React Bits or Vue Bits commit without cloning the repo."""

from __future__ import annotations

import argparse
import json
import re
import subprocess
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[3]
UPSTREAM = ROOT / "skills" / "react-bits" / "UPSTREAM.md"
REPOSITORIES = {
    "react": "https://github.com/DavidHDev/react-bits.git",
    "vue": "https://github.com/DavidHDev/vue-bits.git",
}


def pinned_commit(framework: str) -> str:
    text = UPSTREAM.read_text(encoding="utf-8")
    if framework == "vue":
        text = text.split("## Vue Bits secondary source", 1)[1]
    else:
        text = text.split("## Vue Bits secondary source", 1)[0]
    match = re.search(r"- Commit:\s*`([0-9a-f]{40})`", text)
    if not match:
        raise ValueError(f"no pinned commit found for {framework}")
    return match.group(1)


def latest_commit(repository: str, timeout: float) -> str:
    result = subprocess.run(
        ["git", "ls-remote", repository, "HEAD"],
        check=True,
        capture_output=True,
        text=True,
        timeout=timeout,
    )
    for line in result.stdout.splitlines():
        sha, ref = line.split()
        if ref == "HEAD":
            return sha
    raise RuntimeError(f"git ls-remote returned no HEAD for {repository}")


def check(framework: str, timeout: float) -> dict[str, Any]:
    repository = REPOSITORIES[framework]
    pinned = pinned_commit(framework)
    try:
        latest = latest_commit(repository, timeout)
    except (OSError, subprocess.SubprocessError, ValueError, RuntimeError) as error:
        return {
            "framework": framework,
            "repository": repository.removesuffix(".git"),
            "pinnedCommit": pinned,
            "latestCommit": None,
            "upToDate": None,
            "status": "unavailable",
            "message": f"remote check unavailable: {error}",
            "fallback": "use the local pinned catalog and record that the remote check was unavailable",
        }

    return {
        "framework": framework,
        "repository": repository.removesuffix(".git"),
        "pinnedCommit": pinned,
        "latestCommit": latest,
        "upToDate": pinned == latest,
        "status": "ok",
        "action": (
            "use the local pinned catalog"
            if pinned == latest
            else "read the latest public registry or the selected source before implementation"
        ),
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--framework",
        choices=("react", "vue", "all"),
        default="react",
        help="which public upstream to check",
    )
    parser.add_argument(
        "--timeout",
        type=float,
        default=15,
        help="network timeout in seconds per repository",
    )
    parser.add_argument(
        "--require-network",
        action="store_true",
        help="return a non-zero status when the remote cannot be checked",
    )
    parser.add_argument("--json", action="store_true", help="emit JSON instead of text")
    args = parser.parse_args()

    frameworks = ("react", "vue") if args.framework == "all" else (args.framework,)
    results = [check(framework, args.timeout) for framework in frameworks]

    if args.json:
        print(json.dumps(results, indent=2, ensure_ascii=True))
    else:
        for result in results:
            latest = result["latestCommit"] or "unavailable"
            state = (
                "up to date"
                if result["upToDate"] is True
                else "refresh needed"
                if result["upToDate"] is False
                else "remote check unavailable"
            )
            print(
                f'{result["framework"]}: {state}; '
                f'pinned={result["pinnedCommit"]}; latest={latest}'
            )

    if args.require_network and any(result["status"] != "ok" for result in results):
        return 2
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
