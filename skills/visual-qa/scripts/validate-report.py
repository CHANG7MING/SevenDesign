#!/usr/bin/env python3
"""Validate a Visual QA JSON report and reject unresolved critical findings."""

from __future__ import annotations

import json
import sys
from pathlib import Path
from typing import Any


SEVERITIES = {"critical", "high", "medium", "low"}
STATUSES = {"needs-fix", "accepted", "resolved", "not-applicable"}
REQUIRED = {"id", "severity", "area", "problem", "evidence", "suggestion", "status"}


def fail(message: str) -> int:
    print(f"Visual QA report invalid: {message}", file=sys.stderr)
    return 1


def main() -> int:
    if len(sys.argv) != 2:
        return fail("usage: validate-report.py path/to/report.json")
    report_path = Path(sys.argv[1])
    try:
        report: dict[str, Any] = json.loads(report_path.read_text())
    except (OSError, json.JSONDecodeError) as exc:
        return fail(str(exc))

    for field in ("route", "viewports", "findings"):
        if field not in report:
            return fail(f"missing top-level field: {field}")
    if not isinstance(report["viewports"], list) or not report["viewports"]:
        return fail("viewports must be a non-empty list")
    if not isinstance(report["findings"], list):
        return fail("findings must be a list")

    for index, finding in enumerate(report["findings"]):
        if not isinstance(finding, dict):
            return fail(f"finding {index} is not an object")
        missing = REQUIRED - finding.keys()
        if missing:
            return fail(f"finding {index} missing: {', '.join(sorted(missing))}")
        if finding["severity"] not in SEVERITIES:
            return fail(f"finding {index} has invalid severity")
        if finding["status"] not in STATUSES:
            return fail(f"finding {index} has invalid status")
        if not finding["evidence"]:
            return fail(f"finding {index} has no evidence")

    unresolved = [
        finding["id"]
        for finding in report["findings"]
        if finding["severity"] in {"critical", "high"}
        and finding["status"] == "needs-fix"
    ]
    if unresolved:
        print(
            "Visual QA report has unresolved high-severity findings: "
            + ", ".join(unresolved),
            file=sys.stderr,
        )
        return 2

    print(
        f"Visual QA report valid: {len(report['findings'])} findings, "
        f"{len(report['viewports'])} viewports"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
