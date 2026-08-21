---
name: react-bits
description: Use when a React interface needs a public React Bits component or React Bits-style interaction for a purposeful reveal, focus treatment, feedback state, navigation transition, media stage, or product showcase.
---

# React Bits Integration

React Bits is SevenDesign's public component and motion implementation layer. It supplies concrete React patterns with a distinctive animated feel; it does not replace product hierarchy, semantic tokens, scenario constraints, or upstream motion craft.

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

## Public source boundary

- Use the official public React Bits repository and its documented public installation path: [React Bits](https://github.com/DavidHDev/react-bits).
- Treat the public catalog and source as the implementation authority for components and variants.
- Prefer the host project's existing stack and dependency set; choose JavaScript or TypeScript, then CSS or Tailwind, to match it.
- Inspect dependencies, browser requirements, asset assumptions, bundle cost, and fallback behavior before integration.
- If the public source is not present locally, record the package or installation path. Do not claim that React Bits is installed merely because this skill exists.
- If Pro is unavailable, use only public source and public information. Pro may inform broad category language or composition patterns visible without gated access; never copy, reconstruct, or imply access to paid source, private assets, templates, or gated demos.

## Selection protocol

1. Choose the smallest public component that performs the named job.
2. Assign one motion tier:
   - `micro`: hover, focus, press, validation, or local feedback
   - `system`: panel, route, state, or content transitions
   - `signature`: a memorable hero, media, showcase, or product reveal
3. Map the component to the active SevenDesign preset, brand recipe, archetype, and visual dials.
4. Preserve the useful motion language, but replace colors, typography, spacing, surfaces, content, focus states, and status semantics with the host product's tokens.
5. Define the animation contract before implementation:
   - product job
   - trigger
   - choreography order
   - interruption, replay, and cancellation behavior
   - resting state
   - reduced-motion fallback
6. Use [`../motion-review/SKILL.md`](../motion-review/SKILL.md) for the page and component composition. If animation code changes, use [`../review-animations/SKILL.md`](../review-animations/SKILL.md) as the strict code-level authority.

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
