---
name: react-bits
description: Use when a React interface needs a public React Bits component or React Bits-style interaction for a purposeful reveal, focus treatment, feedback state, navigation transition, media stage, or product showcase.
---

# React Bits Integration

React Bits is SevenDesign's public component and motion implementation layer. This repository now carries a pinned public catalog snapshot plus a small set of reusable public component sources under [`catalog/`](./catalog/); it is no longer only an external reference. React Bits still does not replace product hierarchy, semantic tokens, scenario constraints, or upstream motion craft.

## Selection before implementation

Use [`references/selection-protocol.md`](./references/selection-protocol.md) whenever a user asks for a component, a hero effect, or a comparison between visual treatments. The job is to make a defensible choice, not to enumerate the catalog.

- Normalize the request into `surface`, `jobs`, `frequency`, `interaction`, `contentRole`, and `constraints`.
- Resolve the implementation framework with [`references/framework-selection.md`](./references/framework-selection.md): React is the default; use Vue only when the user or host project establishes Vue.
- Rank candidates using [`catalog/selection-matrix.json`](./catalog/selection-matrix.json), then inspect the real source for the top candidate.
- Use [`catalog/frameworks.json`](./catalog/frameworks.json) to map the semantic choice to the framework-specific registry, source path, and dependency.
- Follow [`references/token-budget.md`](./references/token-budget.md): never load a full registry, `llms.txt`, or unrelated component JSON during selection.
- Recommend at most two components, and only when they have separate product jobs and a clear choreography.
- Explain why the recommendation fits and why at least two plausible alternatives do not.
- Define the static fallback before implementation; content and hierarchy must survive disabled or interrupted motion.

For repeatable local checks, run `scripts/select-component.py` with a structured JSON brief. The script is a ranking aid, not a replacement for product judgment.

## Local public source

Use the bundled resources before reaching for a new external lookup:

- [`catalog/README.md`](./catalog/README.md): local catalog and component selection map
- [`catalog/frameworks.json`](./catalog/frameworks.json): React-default and Vue-secondary framework routing
- [`catalog/vue/README.md`](./catalog/vue/README.md): selective Vue Bits public snapshot
- [`catalog/registry.json`](./catalog/registry.json): public React Bits registry snapshot
- [`scripts/search-registry.py`](./scripts/search-registry.py): compact registry search for unbundled public variants
- [`catalog/components/`](./catalog/components/): reusable source for six public component variants
- [`catalog/llms.txt`](./catalog/llms.txt): upstream public catalog text for discovery
- [`UPSTREAM.md`](./UPSTREAM.md): pinned upstream commit, refresh procedure, and provenance
- [`VUE-BITS-LICENSE.md`](./VUE-BITS-LICENSE.md): Vue Bits license and redistribution boundary

The bundled sources are starter implementations, not a second design system. Copy or adapt them into the host application, then apply SevenDesign tokens and the animation contract below. Do not import the `skills/react-bits/catalog` path as a runtime package.

## Before selecting a component

Read [`../design-core/SKILL.md`](../design-core/SKILL.md) and, for motion work, [`../design-core/references/interaction-motion.md`](../design-core/references/interaction-motion.md). Name the product job first:

- `reveal`: make a new result or capability legible
- `focus`: show where attention or control moved
- `feedback`: confirm an action or system response
- `navigation`: preserve spatial continuity between related views
- `state`: explain loading, progress, success, error, or empty-to-active change
- `media`: stage a meaningful image, canvas, or generated output
- `showcase`: author one memorable product or brand moment

If the job cannot be stated in one sentence, do not add the component.

## Framework and public source boundary

- Use the official public React Bits repository and its documented public installation path: [React Bits](https://github.com/DavidHDev/react-bits).
- For Vue hosts, use the official public Vue Bits repository and its documented public installation path: [Vue Bits](https://github.com/DavidHDev/vue-bits).
- React is the default implementation framework. If the user says Vue, Nuxt, or the host project's evidence is Vue, resolve to the Vue catalog; if the choice is ambiguous, ask once and state that React is the default.
- Keep semantic selection framework-neutral, then choose the matching React or Vue source. Do not silently port source across frameworks.
- Treat the pinned public catalog and source in [`catalog/`](./catalog/) as the first implementation authority for the bundled variants; use the upstream public registry for variants not bundled here.
- The bundled Vue snapshot is intentionally selective: `BlurText` and `SpotlightCard` are available locally; other Vue registry entries are registry-only unless separately materialized.
- Prefer the host project's existing stack and dependency set; choose JavaScript or TypeScript, then CSS or Tailwind, to match it.
- Inspect dependencies, browser requirements, asset assumptions, bundle cost, and fallback behavior before integration.
- If a requested variant is not present locally, record the public package or installation path. Do not claim that an unbundled variant is installed merely because the catalog lists it.
- If Pro is unavailable, use only public source and public information. Pro may inform broad category language or composition patterns visible without gated access; never copy, reconstruct, or imply access to paid source, private assets, templates, or gated demos.

## Selection protocol

1. Normalize the request and apply the selection protocol before searching by visual name.
2. Search [`catalog/selection-matrix.json`](./catalog/selection-matrix.json) and [`catalog/frameworks.json`](./catalog/frameworks.json) for the smallest bundled component that performs the named job.
3. If a bundled component fits, inspect only its actual source directory and note the exact files copied or adapted.
4. If no bundled component fits, run `scripts/search-registry.py` with a narrow query and document the public source path required by the host project.
5. Assign one motion tier:
   - `micro`: hover, focus, press, validation, or local feedback
   - `system`: panel, route, state, or content transitions
   - `signature`: a memorable hero, media, showcase, or product reveal
6. Map the component to the active SevenDesign preset, brand recipe, archetype, and visual dials.
7. Preserve the useful motion language, but replace colors, typography, spacing, surfaces, content, focus states, and status semantics with the host product's tokens.
8. Define the animation contract before implementation:
   - product job
   - trigger
   - choreography order
   - interruption, replay, and cancellation behavior
   - resting state
   - reduced-motion fallback
9. Use [`../motion-review/SKILL.md`](../motion-review/SKILL.md) for the page and component composition. If animation code changes, use [`../review-animations/SKILL.md`](../review-animations/SKILL.md) as the strict code-level authority.

## Composition rules

- Use one signature move per viewport by default.
- Pair a large React Bits-style motion with quiet supporting UI; do not stack spectacle components in the same focal area.
- Use system motion to explain relationships between panels, prompts, outputs, and states.
- Use micro motion for dense product surfaces and keyboard-driven workflows; remove motion from high-frequency keyboard actions when it delays selection or completion.
- Never use motion to conceal missing loading, error, empty, permission, or success states.
- Avoid always-on motion unless it represents real system activity.
- Keep the static first frame useful before animation loads and keep content usable while motion is interrupted.

## Required handoff

Record:

- component name and public source path
- resolved framework and the reason it was selected
- whether the source came from the local pinned catalog or an external public registry path
- exact bundled files copied or adapted, when applicable
- selected variant and dependency notes
- product job and motion tier
- trigger and choreography
- token substitutions
- responsive behavior
- keyboard and focus behavior
- `prefers-reduced-motion` behavior
- performance risks and a simpler fallback

## Reject the integration when

- it looks pasted from a component gallery instead of belonging to the product
- the animation has no identifiable user-facing job
- the effect competes with reading, forms, tables, logs, or primary actions
- reduced motion loses content, state, or hierarchy
- the implementation adds an avoidable dependency or ignores the host project's component system
- the source boundary is unclear or the result implies access to unavailable Pro material
