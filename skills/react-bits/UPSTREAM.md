# React Bits Upstream

SevenDesign bundles a small public-source snapshot from the official React Bits repository so the React Bits Skill has real implementation material available locally.

## Pinned source

- Repository: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits)
- Commit: `4e0e030193b563be6be33d928f77d0d01cefe237`
- Snapshot date: `2026-08-15`
- Public registry: [`catalog/registry.json`](./catalog/registry.json)
- License: [`REACT-BITS-LICENSE.md`](./REACT-BITS-LICENSE.md)

The snapshot contains the public registry, public catalog text, and six public component variants. It intentionally does not include `public/assets/pro`, paid templates, private assets, or gated demos.

## Vue Bits secondary source

SevenDesign also carries a selective public-source snapshot from the official Vue Bits repository for Vue and Nuxt hosts:

- Repository: [DavidHDev/vue-bits](https://github.com/DavidHDev/vue-bits)
- Commit: `05668fee962070e4edc4c4fbfed53893d7987d6d`
- Snapshot date: `2026-08-04`
- Public registry: [`catalog/vue/registry.json`](./catalog/vue/registry.json)
- License: [`VUE-BITS-LICENSE.md`](./VUE-BITS-LICENSE.md)

Only the Vue `BlurText` and `SpotlightCard` sources are materialized locally. The rest of the public Vue registry is discoverable but registry-only. React remains the default framework, and the framework resolution rules live in [`references/framework-selection.md`](./references/framework-selection.md).

## Bundled components

| Variant | Product fit | Local source |
| --- | --- | --- |
| `AnimatedList-TS-CSS` | output reveal, occasional list updates | [`catalog/components/AnimatedList-TS-CSS/`](./catalog/components/AnimatedList-TS-CSS/) |
| `BlurText-TS-CSS` | explanation, result reveal, onboarding | [`catalog/components/BlurText-TS-CSS/`](./catalog/components/BlurText-TS-CSS/) |
| `CountUp-JS-CSS` | rare metric/result emphasis | [`catalog/components/CountUp-JS-CSS/`](./catalog/components/CountUp-JS-CSS/) |
| `FlowingMenu-JS-CSS` | authored navigation or showcase | [`catalog/components/FlowingMenu-JS-CSS/`](./catalog/components/FlowingMenu-JS-CSS/) |
| `SpotlightCard-JS-CSS` | pointer focus on low-frequency showcase cards | [`catalog/components/SpotlightCard-JS-CSS/`](./catalog/components/SpotlightCard-JS-CSS/) |
| `TiltedCard-JS-TW` | product/media showcase and rare hover delight | [`catalog/components/TiltedCard-JS-TW/`](./catalog/components/TiltedCard-JS-TW/) |

### Vue Bits bundled components

| Variant | Product fit | Local source |
| --- | --- | --- |
| `BlurText` | short headline or capability reveal | [`catalog/vue/components/BlurText/`](./catalog/vue/components/BlurText/) |
| `SpotlightCard` | secondary proof or showcase focus | [`catalog/vue/components/SpotlightCard/`](./catalog/vue/components/SpotlightCard/) |

## Refresh procedure

Refresh only from the official public repository:

1. Clone or fetch the public repository at a reviewed commit.
2. Replace `catalog/registry.json` and `catalog/llms.txt`.
3. Replace the selected component registry JSON files and materialized source directories.
4. Update this file with the new commit and snapshot date.
5. Re-run the skill validator, source manifest check, and `git diff --check`.

For Vue, refresh only from the official public Vue Bits repository and preserve the same selective-source policy. Do not refresh from React Bits Pro, Vue private URLs, browser-only gated pages, or copied asset bundles.
