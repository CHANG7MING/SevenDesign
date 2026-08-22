# React Bits Selection Protocol

Use this reference when the user asks for a React Bits component, a visually expressive hero, or a comparison between motion effects. The goal is a justified design decision, not a catalog dump.

## Resolve The Framework

Before ranking visual treatments, resolve the implementation framework with [`framework-selection.md`](./framework-selection.md):

- Explicit `Vue`, `Nuxt`, or Vue host evidence selects Vue Bits.
- Explicit `React`, `Next.js`, or React host evidence selects React Bits.
- No framework signal selects React without blocking the task.
- Mixed or contradictory evidence gets one short clarification question, while keeping React as the stated fallback.

Framework changes the source path and dependency, not the product job. A `BlurText` recommendation should remain a headline reveal whether the resolved implementation is React or Vue.

## Decision Shape

Normalize the request into a short brief before looking at component names:

```json
{
  "surface": "homepage-hero",
  "jobs": ["reveal", "showcase"],
  "frequency": "rare",
  "interaction": "viewport-entry",
  "contentRole": "headline-and-proof",
  "constraints": ["keep-headline-scannable", "touch-compatible"],
  "framework": "react"
}
```

Use the closest vocabulary from [`../catalog/selection-matrix.json`](../catalog/selection-matrix.json):

- `surface`: where the component lives, such as `homepage-hero`, `results`, `success`, or `dense-workspace`
- `jobs`: what the motion must do: `reveal`, `focus`, `feedback`, `navigation`, `state`, `media`, `showcase`, or `explanation`
- `frequency`: `100-plus-per-day`, `tens-per-day`, `occasional`, `rare`, or `first-time`
- `interaction`: `viewport-entry`, `content-load`, `state-change`, `scroll`, `pointer-hover`, `focus-within`, or `keyboard`
- `contentRole`: what the user is trying to understand or act on
- `constraints`: touch, accessibility, scanning speed, density, performance, or brand constraints

## Selection Algorithm

1. Identify the product job. If the request only says “make it look cooler,” ask for the surface and user outcome or recommend no effect.
2. Assign the frequency tier. Reject motion for `100-plus-per-day`; strongly prefer no motion or imperceptible `micro` motion for `tens-per-day`.
3. Search the local matrix by job, surface, interaction, and constraint. If no bundled variant fits, use the compact registry search helper; inspect the real bundled source only when a local variant is a candidate.
4. Rank only candidates that satisfy the job and do not violate a hard constraint. Prefer the smallest dependency footprint and the least intense motion tier that still solves the job.
5. Select at most two components. Two components are allowed only when they have separate jobs and a clear choreography, such as headline reveal plus secondary proof focus.
6. Write explicit rejection reasons for at least two plausible alternatives. Rejection is part of the result, not an omission.
7. Define the static fallback before implementation. The fallback must preserve content, hierarchy, and actionability.
8. Record source provenance, exact files, dependencies, tokens to replace, responsive behavior, focus behavior, and reduced-motion behavior.

The decision is invalid if the recommendation is based only on the component title, if it stacks two signature animations in one viewport, or if it cannot explain why a reasonable alternative was rejected.

## Recommendation Output

Return this structure:

### Brief

Summarize the normalized surface, job, frequency, interaction, content role, and constraints.

### Recommendation

For each selected component, include:

- `variant` and local or public source path
- fit score or qualitative confidence
- one-sentence product reason
- motion tier and dependency
- exact role in the choreography

### Why Not

List at least two plausible alternatives and the specific gate that excludes each one:

- wrong product job
- too frequent
- too visually dominant
- pointer-only or weak on touch
- unnecessary dependency
- harms scanning or accessibility

### Fallback and Handoff

Include the static fallback, token substitutions, responsive behavior, focus and keyboard behavior, reduced-motion behavior, and the next review skill:

- Product composition: `motion-review`
- Existing animation audit: `improve-animations`
- Changed animation code: `review-animations`

## Worked Example: AI Product Homepage Hero

Brief: a first-view AI product homepage with a short promise, one secondary proof card, rare exposure, and touch-compatible behavior.

Recommend:

1. `BlurText-TS-CSS` for the short headline reveal. It has the right `reveal` and `explanation` jobs, runs once on viewport entry, and can fall back to crisp text.
2. `SpotlightCard-JS-CSS` for the secondary proof card. It adds low-cost pointer focus and has no external dependency; on touch, keep the card static.

Do not select:

- `AnimatedList-TS-CSS`: list reveal is the wrong content model for a hero promise.
- `CountUp-JS-CSS`: there is no meaningful metric in the brief, so the number would become decorative.
- `FlowingMenu-JS-CSS`: it would consume the hero's single signature budget with navigation spectacle.
- `TiltedCard-JS-TW`: pointer tilt is less touch-compatible and does not explain the product story without a meaningful visual object.

The result is a decision: one signature reveal, one quiet supporting focus treatment, and no extra gallery effects.
