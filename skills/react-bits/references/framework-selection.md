# Framework Selection

React is the default implementation framework for SevenDesign. Vue Bits is a secondary public implementation source for Vue projects; it does not change the product-level selection rules.

## Resolution Order

Resolve the framework before copying source:

1. Honor an explicit user request: `React`, `Next.js`, `Vue`, or `Nuxt`.
2. If the task is attached to an existing codebase, inspect its package manifest, source extensions, and app entrypoint.
3. If the evidence is mixed or missing and the choice changes implementation, ask one short question:

   > 这次宿主项目使用 React 还是 Vue？未指定的话我会按 React 处理。

4. If the user does not answer, use React.

Do not silently port a React component to Vue or a Vue component to React. Keep the product job, motion tier, rejection reasons, and fallback consistent, then select the framework-specific public source.

## Framework Defaults

The machine-readable policy lives in [`../catalog/frameworks.json`](../catalog/frameworks.json):

- `react`: default; use the bundled React source under `../catalog/components/`
- `vue`: opt-in; use the bundled Vue source under `../catalog/vue/components/`

The current Vue snapshot intentionally contains only `BlurText` and `SpotlightCard`. Other Vue Bits entries remain discoverable in the public Vue registry but are not claimed as locally bundled.

Do not load either framework's full registry during normal selection. Use the compact search helper at [`../scripts/search-registry.py`](../scripts/search-registry.py) only when a bundled variant does not fit.

## Handoff

Every framework-aware recommendation records:

- resolved framework and why it was selected
- semantic component choice
- framework-specific source path
- dependency and runtime notes
- whether the variant is locally bundled or registry-only
- any adaptation required by the host framework

The framework choice never overrides the product gate. A Vue implementation of a bad animation is still a bad recommendation, and a React default does not justify using a component that does not fit the product job.
