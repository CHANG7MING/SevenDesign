# UI Review Protocol

Use this reference for code, screenshot, or rendered-product reviews. Review the requested scope only. Do not turn a review into an unsolicited redesign.

## Evidence order

1. Inspect the rendered UI when available.
2. Exercise relevant states and responsive sizes.
3. Trace visible problems to tokens, components, and code.
4. Compare against the selected SevenDesign direction and product task.
5. Report actionable findings before general impressions.

## Severity

- **Block**: prevents task completion; breaks accessibility; obscures critical state; introduces deceptive behavior; or creates a severe responsive, interaction, or performance regression.
- **High**: damages hierarchy, trust, navigation, comprehension, or frequent interaction quality.
- **Medium**: creates inconsistency, weak responsiveness, generic composition, or avoidable friction.
- **Low**: local polish with limited user impact.

## Review lenses

- product clarity and primary task
- information hierarchy and content quality
- consistency with selected direction, tokens, and component ownership
- responsive behavior and overflow
- interaction states, keyboard behavior, focus, and touch targets
- motion purpose, frequency, origin, interruption, and reduced-motion handling
- perceived and runtime performance
- generic AI patterns and fake-premium decoration

For motion-specific review, load [`interaction-motion.md`](interaction-motion.md).

## Required output

Use one findings table, ordered by severity:

| Severity | Evidence | Recommendation | Why |
| --- | --- | --- | --- |
| High | `file:line` or exact screen region | Concrete change | User or product impact |

Then provide:

- **Verdict**: Block, Revise, or Approve.
- **Strengths worth preserving**: only choices that should survive revision.
- **Verification gaps**: anything you could not render, exercise, or measure.

Do not invent findings to fill categories. If no actionable issues are found, say so and state what was verified.
