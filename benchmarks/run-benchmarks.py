#!/usr/bin/env python3
"""Run the deterministic Component Intelligence benchmark suite."""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
CASE_DIR = Path(__file__).resolve().parent / "cases"
SELECTOR = ROOT / "skills" / "component-intelligence" / "scripts" / "select-source.py"

WEIGHTS = {
    "productFramework": 15,
    "ownership": 25,
    "rationale": 15,
    "visual": 25,
    "responsiveAccessibility": 10,
    "contextProvenance": 10,
}


def load_cases(case_id: str | None) -> list[dict[str, Any]]:
    paths = sorted(CASE_DIR.glob("*.json"))
    cases = [json.loads(path.read_text()) for path in paths]
    if case_id:
        cases = [case for case in cases if case["id"] == case_id]
        if not cases:
            raise SystemExit(f"unknown benchmark case: {case_id}")
    return cases


def select(case: dict[str, Any]) -> dict[str, Any]:
    brief = {**case["brief"], "framework": case["framework"]}
    result = subprocess.run(
        [sys.executable, str(SELECTOR), "--brief", json.dumps(brief)],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return json.loads(result.stdout)


def owner_map(result: dict[str, Any]) -> dict[str, str]:
    return {
        layer: plan["owner"]
        for layer, plan in result["ownershipPlan"].items()
    }


def score_case(case: dict[str, Any], result: dict[str, Any]) -> dict[str, Any]:
    expected = case["expected"]
    actual_owners = owner_map(result)
    expected_owners = expected["ownership"]
    framework_ok = result["brief"]["framework"] == case["framework"]
    archetype_ok = result["archetype"] == expected["archetype"]
    ownership_matches = {
        layer: actual_owners.get(layer) == expected_owners[layer]
        for layer in ("foundation", "behavior", "expression")
    }
    rejection_text = " ".join(result.get("whyNot", [])).lower()
    rejection_matches = {
        keyword: keyword.lower() in rejection_text
        for keyword in expected["rejectionKeywords"]
    }
    dense_motion_failure = (
        result.get("density") == "dense"
        and expected_owners["expression"] == "none"
        and actual_owners.get("expression") != "none"
    )
    hard_failures: list[str] = []
    if not framework_ok:
        hard_failures.append("framework-mismatch")
    if not archetype_ok:
        hard_failures.append("archetype-mismatch")
    if dense_motion_failure:
        hard_failures.append("dense-expressive-motion")

    product_score = WEIGHTS["productFramework"] if framework_ok and archetype_ok else 0
    ownership_score = (
        WEIGHTS["ownership"]
        * sum(ownership_matches.values())
        / len(ownership_matches)
    )
    rationale_score = (
        WEIGHTS["rationale"]
        * sum(rejection_matches.values())
        / len(rejection_matches)
        if rejection_matches
        else 0
    )
    context_score = WEIGHTS["contextProvenance"]
    evaluated_weight = (
        WEIGHTS["productFramework"]
        + WEIGHTS["ownership"]
        + WEIGHTS["rationale"]
        + WEIGHTS["contextProvenance"]
    )
    decision_score = (
        (product_score + ownership_score + rationale_score + context_score)
        / evaluated_weight
        * 10
    )
    return {
        "id": case["id"],
        "category": case["category"],
        "archetype": result["archetype"],
        "framework": result["brief"]["framework"],
        "owners": actual_owners,
        "matches": {
            "framework": framework_ok,
            "archetype": archetype_ok,
            "ownership": ownership_matches,
            "rejections": rejection_matches,
        },
        "scores": {
            "productFramework": product_score,
            "ownership": round(ownership_score, 2),
            "rationale": round(rationale_score, 2),
            "contextProvenance": context_score,
            "visual": None,
            "responsiveAccessibility": None,
            "decisionScore": round(decision_score, 2),
        },
        "hardFailures": hard_failures,
        "whyNot": result.get("whyNot", []),
    }


def aggregate(reports: list[dict[str, Any]]) -> dict[str, Any]:
    hard_failures = [
        {"id": report["id"], "failures": report["hardFailures"]}
        for report in reports
        if report["hardFailures"]
    ]
    score_values = [report["scores"]["decisionScore"] for report in reports]
    return {
        "total": len(reports),
        "passed": sum(not report["hardFailures"] for report in reports),
        "score": round(sum(score_values) / len(score_values), 2) if score_values else 0,
        "decisionScore": round(sum(score_values) / len(score_values), 2) if score_values else 0,
        "qualityScore": None,
        "qualityScoreStatus": "visual-qa-not-run",
        "hardFailures": hard_failures,
        "cases": reports,
        "dimensions": {
            "productFramework": WEIGHTS["productFramework"],
            "ownership": WEIGHTS["ownership"],
            "rationale": WEIGHTS["rationale"],
            "visual": {"weight": WEIGHTS["visual"], "status": "not-run"},
            "responsiveAccessibility": {
                "weight": WEIGHTS["responsiveAccessibility"],
                "status": "not-run",
            },
            "contextProvenance": WEIGHTS["contextProvenance"],
        },
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--case", help="run one case by id")
    parser.add_argument("--json", action="store_true", help="print full JSON")
    parser.add_argument("--output", type=Path, help="write full JSON report")
    args = parser.parse_args()

    reports = [score_case(case, select(case)) for case in load_cases(args.case)]
    report = aggregate(reports)
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(json.dumps(report, indent=2, ensure_ascii=True) + "\n")
    if args.json:
        print(json.dumps(report, indent=2, ensure_ascii=True))
    else:
        print(
            f"Benchmark: {report['passed']}/{report['total']} passed | "
            f"decision score {report['decisionScore']}/10 | "
            f"quality score pending Visual QA"
        )
        for case in reports:
            status = "PASS" if not case["hardFailures"] else "FAIL"
            print(
                f"{status:4} {case['id']:<24} "
                f"{case['scores']['decisionScore']:>4.1f}/10"
            )
    return 1 if report["hardFailures"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
