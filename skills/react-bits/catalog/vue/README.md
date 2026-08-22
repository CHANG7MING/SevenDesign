# Vue Bits Public Catalog

This directory is the selective public-source snapshot for SevenDesign's Vue implementation path. React remains the default framework; use this directory only after the framework is explicitly resolved to Vue or the host project clearly proves it is Vue.

## Bundled variants

| Semantic role | Vue Bits variant | Dependency |
| --- | --- | --- |
| Short headline or capability reveal | `BlurText` | `motion-v@^1.10.2` |
| Secondary proof or showcase focus | `SpotlightCard` | none |

The full public registry is available in [`registry.json`](./registry.json), but registry presence does not mean the component is locally bundled. Use the compact search helper from [`../../scripts/search-registry.py`](../../scripts/search-registry.py), then read the matching JSON file only when exact upstream paths or dependencies are needed.

Do not import this Skill catalog as a runtime package. Apply the host project's Vue, Nuxt, CSS, token, focus, responsive, and reduced-motion conventions after copying the source.
