#!/usr/bin/env python3
"""Rank bundled React Bits variants against a structured product brief."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any


MATRIX_PATH = Path(__file__).resolve().parents[1] / "catalog" / "selection-matrix.json"
FRAMEWORKS_PATH = Path(__file__).resolve().parents[1] / "catalog" / "frameworks.json"


def as_list(value: Any) -> list[str]:
    if value is None:
        return []
    if isinstance(value, list):
        return [str(item) for item in value]
    return [str(value)]


def overlap(left: list[str], right: list[str]) -> list[str]:
    return sorted(set(left).intersection(right))


def rank_component(
    component: dict[str, Any],
    brief: dict[str, Any],
    framework: str,
    framework_meta: dict[str, Any],
) -> dict[str, Any]:
    score = 0
    reasons: list[str] = []
    blockers: list[str] = []
    brief_frequency = set(as_list(brief.get("frequency")))
    brief_interactions = set(as_list(brief.get("interaction")))

    jobs = overlap(as_list(brief.get("jobs")), component["jobs"])
    if jobs:
        score += 5 * len(jobs)
        reasons.append(f"matches product job(s): {', '.join(jobs)}")

    surfaces = overlap(as_list(brief.get("surface")), component["surfaces"])
    if surfaces:
        score += 4
        reasons.append(f"fits surface: {', '.join(surfaces)}")

    frequencies = overlap(as_list(brief.get("frequency")), component["frequencies"])
    if frequencies:
        score += 2
        reasons.append(f"fits frequency: {', '.join(frequencies)}")

    interactions = overlap(as_list(brief.get("interaction")), component["interactions"])
    if interactions:
        score += 2
        reasons.append(f"supports interaction: {', '.join(interactions)}")

    constraints = set(as_list(brief.get("constraints")))
    avoid_when = " ".join(component["avoidWhen"]).lower()
    constraint_rules = {
        "100-plus-per-day": "100-plus-per-day" in as_list(brief.get("frequency")),
        "tens-per-day": "tens-per-day" in as_list(brief.get("frequency")),
        "touch-first": "pointer-only" in avoid_when or "touch-first" in avoid_when,
        "dense": "dense" in avoid_when,
    }
    for constraint, applies in constraint_rules.items():
        if constraint in constraints and applies:
            score -= 8
            blockers.append(f"conflicts with constraint: {constraint}")

    if "touch-compatible" in constraints and "pointer-hover" in component["interactions"]:
        score -= 1
        reasons.append("needs a static touch fallback because its strongest cue is pointer-led")

    if "keep-headline-scannable" in constraints and "scann" in avoid_when:
        score -= 1
        reasons.append("must preserve a crisp first frame for fast reading")

    if brief.get("dense") and "dense" in avoid_when:
        score -= 8
        blockers.append("not suitable for a dense information surface")

    if brief.get("keyboardFirst") and "keyboard" in avoid_when:
        score -= 8
        blockers.append("not suitable for a keyboard-first workflow")

    if "100-plus-per-day" in brief_frequency:
        score -= 12
        blockers.append("motion is rejected for 100-plus-per-day actions")
    elif "tens-per-day" in brief_frequency and component["motionTier"] != "micro":
        score -= 8
        blockers.append("only imperceptible micro motion is acceptable at this frequency")

    if "keyboard" in brief_interactions:
        score -= 12
        blockers.append("keyboard-triggered motion should remain immediate")

    if brief.get("requiresNoDependency") and component["dependency"] != "none":
        score -= 2
        reasons.append(f"adds dependency: {component['dependency']}")

    return {
        "variant": component["variant"],
        "title": component["title"],
        "score": score,
        "motionTier": component["motionTier"],
        "dependency": framework_meta["dependency"],
        "source": framework_meta["source"],
        "framework": framework,
        "bestFor": component["bestFor"],
        "fallback": component["fallback"],
        "reasons": reasons,
        "blockers": blockers,
        "status": "candidate" if score > 0 and not blockers else "reject",
    }


def choose_recommendations(ranked: list[dict[str, Any]], max_count: int) -> list[dict[str, Any]]:
    selected: list[dict[str, Any]] = []
    for item in ranked:
        if item["status"] != "candidate":
            continue
        if item["motionTier"] == "signature" and any(
            chosen["motionTier"] == "signature" for chosen in selected
        ):
            continue
        selected.append(item)
        if len(selected) >= max_count:
            break
    return selected


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--brief", help="JSON object describing the product task")
    parser.add_argument("--brief-file", type=Path, help="Path to a JSON brief")
    parser.add_argument(
        "--framework",
        choices=["react", "vue"],
        help="Override the resolved framework; omitted means React by default.",
    )
    parser.add_argument("--max-recommendations", type=int, default=2)
    args = parser.parse_args()

    if bool(args.brief) == bool(args.brief_file):
        parser.error("provide exactly one of --brief or --brief-file")

    brief = json.loads(args.brief) if args.brief else json.loads(args.brief_file.read_text())
    matrix = json.loads(MATRIX_PATH.read_text())
    frameworks = json.loads(FRAMEWORKS_PATH.read_text())
    framework = args.framework or brief.get("framework") or frameworks["defaultFramework"]
    if framework not in frameworks["frameworks"]:
        parser.error(f"unsupported framework: {framework}")
    framework_config = frameworks["frameworks"][framework]
    bundled = framework_config["bundled"]
    available_components = [
        component for component in matrix["components"] if component["variant"] in bundled
    ]
    ranked = sorted(
        (
            rank_component(component, brief, framework, bundled[component["variant"]])
            for component in available_components
        ),
        key=lambda item: item["score"],
        reverse=True,
    )
    recommendations = choose_recommendations(ranked, args.max_recommendations)
    recommended_variants = {item["variant"] for item in recommendations}

    component_by_variant = {
        component["variant"]: component for component in available_components
    }
    why_not = [
        {
            "variant": item["variant"],
            "reason": (
                item["blockers"]
                or (
                    [
                        f"does not perform the requested job(s): {', '.join(as_list(brief.get('jobs')))}"
                    ]
                    if not overlap(
                        as_list(brief.get("jobs")),
                        component_by_variant[item["variant"]]["jobs"],
                    )
                    else [component_by_variant[item["variant"]]["selectionNote"]]
                )
            ),
        }
        for item in ranked
        if item["variant"] not in recommended_variants
    ]
    why_not.extend(
        {
            "variant": component["variant"],
            "reason": [
                f"not bundled for resolved framework '{framework}'; public registry lookup is required"
            ],
        }
        for component in matrix["components"]
        if component["variant"] not in bundled
    )
    result = {
        "brief": {**brief, "framework": framework},
        "frameworkResolution": (
            "explicit"
            if args.framework or brief.get("framework")
            else "default-react"
        ),
        "frameworkCatalog": {
            "registry": framework_config["registry"],
            "bundledVariants": sorted(bundled),
        },
        "recommendations": recommendations,
        "whyNot": why_not,
        "rules": matrix["defaults"],
    }
    print(json.dumps(result, indent=2, ensure_ascii=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
