#!/usr/bin/env python3
"""Search a React Bits or Vue Bits registry and emit compact metadata only."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
REGISTRIES = {
    "react": ROOT / "catalog" / "registry.json",
    "vue": ROOT / "catalog" / "vue" / "registry.json",
}


def searchable_text(item: dict[str, Any]) -> str:
    return " ".join(
        [
            str(item.get("name", "")),
            str(item.get("title", "")),
            str(item.get("description", "")),
        ]
    ).lower()


def compact_item(item: dict[str, Any]) -> dict[str, Any]:
    return {
        "name": item.get("name"),
        "title": item.get("title"),
        "description": item.get("description"),
        "dependencies": item.get("dependencies", []),
        "registryDependencies": item.get("registryDependencies", []),
        "files": [file.get("path") for file in item.get("files", [])],
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--framework", choices=["react", "vue"], default="react")
    parser.add_argument("--query", required=True)
    parser.add_argument("--limit", type=int, default=5)
    args = parser.parse_args()

    if args.limit < 1 or args.limit > 8:
        parser.error("--limit must be between 1 and 8")

    registry = json.loads(REGISTRIES[args.framework].read_text())
    terms = [term for term in args.query.lower().split() if term]
    matches = [
        compact_item(item)
        for item in registry.get("items", [])
        if all(term in searchable_text(item) for term in terms)
    ][: args.limit]

    print(
        json.dumps(
            {
                "framework": args.framework,
                "query": args.query,
                "count": len(matches),
                "results": matches,
            },
            indent=2,
            ensure_ascii=True,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
