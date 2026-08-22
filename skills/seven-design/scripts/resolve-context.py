#!/usr/bin/env python3
"""Resolve the smallest SevenDesign resource set for a product brief."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[3]
MANIFEST = Path(__file__).resolve().parents[1] / "catalog" / "load-manifest.json"


def normalize(value: Any) -> str:
    return " ".join(str(value or "").lower().replace("_", " ").replace("-", " ").split())


def resolve_route(brief: dict[str, Any], routes: dict[str, Any]) -> str:
    requested = normalize(
        brief.get("archetype") or brief.get("surface") or brief.get("product")
    )
    if requested in routes:
        return requested
    for route, config in routes.items():
        signals = [route.replace("-", " "), route]
        signals.extend(config.get("aliases", []))
        if any(normalize(signal) in requested for signal in signals):
            return route
    return "generic-product"


def resolve_framework(brief: dict[str, Any], default: str) -> tuple[str, str]:
    requested = normalize(
        brief.get("framework") or brief.get("hostFramework") or brief.get("host")
    )
    if requested in {"vue", "nuxt"} or "vue" in requested or "nuxt" in requested:
        return "vue", "explicit-or-host-evidence"
    if requested and requested not in {"react", "next", "react native"}:
        raise ValueError(f"unsupported framework: {brief.get('framework')}")
    return default, "explicit-react-or-default"


def add_resource(items: list[dict[str, str]], path: str, reason: str) -> None:
    items.append({"path": path, "reason": reason})


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--brief", required=True, help="JSON product brief")
    args = parser.parse_args()
    brief = json.loads(args.brief)
    manifest = json.loads(MANIFEST.read_text())
    framework, framework_resolution = resolve_framework(
        brief, manifest["defaultFramework"]
    )
    route = resolve_route(brief, manifest["routes"])
    route_config = manifest["routes"].get(route, {
        "density": brief.get("density", "standard"),
        "scenarioSkills": [],
        "references": [],
        "bitsEligible": False,
    })
    density = normalize(brief.get("density") or route_config["density"])
    bits_requested = normalize(brief.get("expression") or brief.get("motionIntent"))
    visual_requested = bool(
        brief.get("runnableUi")
        or brief.get("visualAudit")
        or brief.get("screenshots")
    )
    implementation_requested = normalize(brief.get("phase")) in {
        "implementation",
        "build",
        "code",
    }
    tier = "review" if visual_requested else "implementation" if implementation_requested else "selection"

    skills: list[dict[str, str]] = []
    references: list[dict[str, str]] = []
    catalogs: list[dict[str, str]] = []
    excluded = [
        {"path": path, "reason": "excluded by default context budget"}
        for path in manifest["globalExclusions"]
    ]
    for path in manifest["tiers"]["core"]:
        add_resource(skills, path, "core product and token contract")
    add_resource(
        skills,
        "skills/component-intelligence/SKILL.md",
        "source ownership must be resolved before library-specific Skills",
    )
    add_resource(
        catalogs,
        "skills/component-intelligence/catalog/source-matrix.json",
        "compact cross-source decision matrix",
    )

    for path in route_config.get("scenarioSkills", []):
        add_resource(skills, path, f"scenario route: {route}")
    for path in route_config.get("references", []):
        add_resource(references, path, "framework or route-specific selection context")

    bits_allowed = route_config.get("bitsEligible", False) and density != "dense"
    if bits_allowed and (
        bits_requested
        or route in {"ai-saas-hero", "landing-page", "portfolio"}
    ):
        add_resource(
            skills,
            "skills/react-bits/SKILL.md",
            "Bits is eligible for the sparse expression layer",
        )
        add_resource(
            catalogs,
            "skills/react-bits/scripts/check-upstream.py",
            "check the selected public upstream HEAD before implementation",
        )
        if framework == "vue":
            add_resource(
                catalogs,
                "skills/react-bits/catalog/vue/README.md",
                "resolved Vue expression catalog",
            )
            excluded.extend([
                {
                    "path": "skills/react-bits/catalog/components/",
                    "reason": "React source excluded for a Vue host",
                },
            ])
        else:
            add_resource(
                catalogs,
                "skills/react-bits/catalog/frameworks.json",
                "resolved React expression routing",
            )
            add_resource(
                catalogs,
                "skills/react-bits/catalog/selection-matrix.json",
                "compact React Bits candidate matrix",
            )
            excluded.extend([
                {
                    "path": "skills/react-bits/catalog/vue/",
                    "reason": "Vue source excluded for a React host",
                },
            ])
    else:
        excluded.append({
            "path": "skills/react-bits/",
            "reason": "expression layer is not eligible for this density or task",
        })

    if visual_requested:
        add_resource(
            skills,
            "skills/visual-qa/SKILL.md",
            "runnable UI or explicit visual audit requested",
        )
        add_resource(
            references,
            "skills/visual-qa/references/audit-rubric.md",
            "screenshot evidence review",
        )

    result = {
        "brief": {**brief, "framework": framework, "archetype": route},
        "framework": framework,
        "frameworkResolution": framework_resolution,
        "archetype": route,
        "density": density,
        "tier": tier,
        "skills": skills,
        "references": references,
        "catalogs": catalogs,
        "excluded": excluded,
        "reasons": {
            "componentIntelligenceFirst": True,
            "bitsEligible": bits_allowed,
            "visualQaRequested": visual_requested,
            "registryLookup": "narrow follow-up, maximum 8 results",
            "upstreamCheck": (
                "run check-upstream.py for the resolved framework before using Bits"
                if bits_allowed
                else "not required because Bits is not eligible for this task"
            ),
        },
    }
    print(json.dumps(result, indent=2, ensure_ascii=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
