#!/usr/bin/env python3
"""Return a compact cross-library component ownership plan."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any


MATRIX_PATH = Path(__file__).resolve().parents[1] / "catalog" / "source-matrix.json"


def normalize(value: Any) -> str:
    return " ".join(str(value or "").lower().replace("_", " ").replace("-", " ").split())


def resolve_archetype(brief: dict[str, Any], archetypes: dict[str, Any]) -> str:
    requested = normalize(
        brief.get("archetype") or brief.get("surface") or brief.get("product")
    )
    if requested in archetypes:
        return requested
    for name, archetype in archetypes.items():
        aliases = [normalize(alias) for alias in archetype.get("aliases", [])]
        if requested in aliases or any(alias in requested for alias in aliases):
            return name
    return "generic-product"


def resolve_layer(
    layer: str,
    rule: dict[str, Any],
    framework: str,
    sources: dict[str, Any],
) -> dict[str, Any]:
    source = rule.get("source")
    if "sourceByFramework" in rule:
        source = rule["sourceByFramework"].get(framework)
    if source and source != "none" and framework not in sources[source]["frameworks"]:
        return {
            "owner": "host-system",
            "status": "fallback",
            "reason": f"{sources[source]['label']} does not target the resolved {framework} host.",
        }
    if source == "none":
        return {
            "owner": "none",
            "status": "intentionally-empty",
            "reason": rule.get("reason", "No additional source earns this layer."),
        }
    result = {
        "owner": source,
        "label": sources[source]["label"],
        "status": "recommended",
        "reason": rule.get("reason") or rule.get("when"),
    }
    if "fallback" in rule:
        result["fallback"] = rule["fallback"]
    if "when" in rule:
        result["condition"] = rule["when"]
    if "candidates" in rule:
        result["candidates"] = rule["candidates"].get(framework, [])
    return result


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--brief", required=True, help="JSON product brief")
    parser.add_argument("--framework", choices=["react", "vue"])
    args = parser.parse_args()

    brief = json.loads(args.brief)
    matrix = json.loads(MATRIX_PATH.read_text())
    framework = args.framework or brief.get("framework") or matrix["defaultFramework"]
    if framework not in {"react", "vue"}:
        parser.error(f"unsupported framework: {framework}")

    archetype_name = resolve_archetype(brief, matrix["archetypes"])
    if archetype_name == "generic-product":
        archetype = {
            "density": brief.get("density", "standard"),
            "defaultLayers": {
                "foundation": {
                    "source": "shadcn" if framework == "react" else "host-system",
                    "reason": "Use the host's styled foundation and token ownership."
                },
                "behavior": {
                    "source": "radix" if framework == "react" else "host-system",
                    "reason": "Use accessible primitives only where interaction requires them."
                },
                "expression": {
                    "source": "none",
                    "reason": "No expressive source is selected until the product job justifies it."
                }
            },
            "reject": []
        }
    else:
        archetype = matrix["archetypes"][archetype_name]

    layers = {
        layer: resolve_layer(
            layer,
            archetype["defaultLayers"][layer],
            framework,
            matrix["sources"],
        )
        for layer in matrix["layers"]
    }
    result = {
        "brief": {**brief, "framework": framework},
        "frameworkResolution": "explicit" if args.framework or brief.get("framework") else "default-react",
        "archetype": archetype_name,
        "density": archetype.get("density"),
        "ownershipPlan": layers,
        "whyNot": archetype.get("reject", []),
        "rules": {
            "chooseSourceAfterProductJob": True,
            "maxExpressionSources": 2,
            "keepDenseSurfacesImmediate": archetype.get("density") == "dense",
        },
    }
    print(json.dumps(result, indent=2, ensure_ascii=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
