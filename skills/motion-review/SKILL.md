---
name: motion-review
description: Use when reviewing a page or component composition that includes React Bits or other non-trivial motion and the review must judge product meaning, hierarchy, choreography, accessibility, performance, and cross-surface coherence.
---

# Motion Composition Review

This is SevenDesign's product-level motion review bridge. It asks whether motion belongs in the experience and whether its composition serves the product. It does not replace [`../review-animations/SKILL.md`](../review-animations/SKILL.md), which is the strict code-level authority for animation implementation.

## Review order

### 1. Purpose and hierarchy

- Can the reviewer name what the motion explains?
- Does it direct attention to the next useful action or state?
- Is the focal point stable while the animation runs?
- Could the motion be removed without losing meaning?
- Does the static first frame still communicate the product?

### 2. Timing and choreography

- Is there a clear sequence rather than many simultaneous entrances?
- Do elements enter, settle, and exit with a coherent rhythm?
- Are duration and delay appropriate to the job and density?
- Does the motion tier match the surface: `micro`, `system`, or `signature`?
- Can the user interrupt, replay, skip, or continue without waiting?
- Do hover and focus effects respond quickly enough for repeated use?

### 3. Interaction and accessibility

- Does keyboard focus remain visible and spatially stable?
- Do reduced-motion users receive the same content, state, and hierarchy?
- Are loading and streaming animations paired with readable status text?
- Does motion avoid flashing, disorienting scale, and unexpected viewport movement?
- Do touch and pointer interactions remain usable while motion is active?
- Are hover-only effects gated to hover-capable pointers?

### 4. Performance and resilience

- Does the effect prefer compositor-friendly properties when possible?
- Are large canvases, shaders, filters, and repeated observers bounded?
- Does the page remain usable on a slower device or reduced-power mode?
- Is there a static or simpler fallback for unsupported environments?
- Are animations paused or removed when offscreen and irrelevant?

### 5. System coherence

- Does the motion match the active scenario skill and SevenDesign motion tokens?
- Does it share easing, radius, surface, and color language with the rest of the product?
- Does the hero's motion language carry into product interiors without theatrical excess?
- Does it violate [`../../FORBIDDEN-PATTERNS.md`](../../FORBIDDEN-PATTERNS.md)?
- If React Bits is used, is the public source and dependency boundary honest?

## Output format

Return findings before praise or summary. For each finding include:

- severity: `P0` blocker, `P1` important, `P2` polish
- location or component
- observed behavior
- user or product risk
- concrete correction

Finish with:

- `PASS` when no P0/P1 findings remain and reduced-motion behavior is defined
- `PASS WITH NOTES` when only P2 findings remain
- `BLOCK` when the motion is distracting, inaccessible, unbounded, disconnected from product meaning, or dependent on unavailable source
