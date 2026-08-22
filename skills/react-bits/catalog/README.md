# React Bits Public Catalog

This directory is the pinned public-source catalog for the SevenDesign `react-bits` Skill. React is the default implementation framework; Vue is routed through [`frameworks.json`](./frameworks.json) and the selective [`vue/`](./vue/) snapshot.

## How to use it

1. Resolve React or Vue with [`../references/framework-selection.md`](../references/framework-selection.md); omit the framework only when React's default is acceptable.
2. Normalize the product brief and read [`../references/selection-protocol.md`](../references/selection-protocol.md).
3. Use [`selection-matrix.json`](./selection-matrix.json) to compare product jobs, surfaces, frequency, interaction, constraints, dependencies, and fallbacks.
4. Search the resolved framework's registry only after the product job is clear.
5. Prefer the materialized variants under [`components/`](./components/) for React or [`vue/components/`](./vue/components/) for Vue when their product job fits.
6. Read the matching registry JSON file only when the compact matrix is missing an exact dependency or upstream path.
7. Copy or adapt the source into the host project; do not import this directory as a runtime package.
8. Apply host tokens, focus states, responsive behavior, and reduced-motion handling.

For a deterministic ranking pass:

```bash
python3 ../scripts/select-component.py --brief '{
  "surface": "homepage-hero",
  "jobs": ["reveal", "showcase"],
  "frequency": "rare",
  "interaction": "viewport-entry",
  "constraints": ["keep-headline-scannable", "touch-compatible"]
}'
```

For a registry-only lookup, use `../scripts/search-registry.py` and keep the result limit at eight or below. Do not open the full registry or `llms.txt` just to find one component.

## Bundled starter variants

| Product job | Recommended variant | Dependency |
| --- | --- | --- |
| Result or list reveal | `AnimatedList-TS-CSS` | `motion@^12.23.12` |
| Text or capability reveal | `BlurText-TS-CSS` | `motion@^12.23.12` |
| Rare metric emphasis | `CountUp-JS-CSS` | `motion@^12.23.12` |
| Authored navigation/showcase | `FlowingMenu-JS-CSS` | `gsap@^3.13.0` |
| Pointer focus on a showcase card | `SpotlightCard-JS-CSS` | none |
| Rare media showcase | `TiltedCard-JS-TW` | `motion@^12.23.12` |

These are implementation starting points, not automatic recommendations. The selection matrix is the decision authority for the bundled variants; inspect source and write the reasoned recommendation before implementation. Dense operational surfaces should usually choose no motion or `micro` motion, and high-frequency keyboard actions must remain immediate.
