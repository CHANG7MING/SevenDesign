# React Bits Public Catalog

This directory is a pinned public-source snapshot for the SevenDesign `react-bits` Skill.

## How to use it

1. Search [`registry.json`](./registry.json) by `title`, `description`, or `name`.
2. Prefer the six materialized variants under [`components/`](./components/) when their product job fits.
3. Read the matching registry JSON file for dependencies and all upstream file paths.
4. Copy or adapt the source into the host React project; do not import this directory as a runtime package.
5. Apply host tokens, focus states, responsive behavior, and reduced-motion handling.

## Bundled starter variants

| Product job | Recommended variant | Dependency |
| --- | --- | --- |
| Result or list reveal | `AnimatedList-TS-CSS` | `motion@^12.23.12` |
| Text or capability reveal | `BlurText-TS-CSS` | `motion@^12.23.12` |
| Rare metric emphasis | `CountUp-JS-CSS` | `motion@^12.23.12` |
| Authored navigation/showcase | `FlowingMenu-JS-CSS` | `gsap@^3.13.0` |
| Pointer focus on a showcase card | `SpotlightCard-JS-CSS` | none |
| Rare media showcase | `TiltedCard-JS-TW` | `motion@^12.23.12` |

These are implementation starting points, not automatic recommendations. Dense operational surfaces should usually choose no motion or `micro` motion, and high-frequency keyboard actions must remain immediate.
