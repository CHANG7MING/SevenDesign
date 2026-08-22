# Visual QA Audit Rubric

Inspect each screenshot at its actual viewport size. Record evidence paths for every finding.

## Critical

- primary content is unreadable or clipped
- primary action is inaccessible, overlapped, or outside the viewport
- mobile layout breaks, scrolls horizontally, or loses the main task
- focus indicator disappears from an interactive control
- a framework-specific component was rendered with the wrong source or broken fallback

## High

- first viewport does not explain the product or next action
- major sections overlap or have inconsistent alignment
- long labels, tables, code, or user content overflow
- touch targets are too small or too close
- loading, empty, error, permission, or success state is missing where the surface needs it
- motion obscures content or prevents quick completion

## Medium

- typography hierarchy is weak
- spacing or surface contrast breaks the token system
- responsive wrapping is awkward but the primary task remains usable
- decorative effects compete with the product's focal point
- reduced-motion fallback loses a meaningful transition or state cue

## Low

- minor rhythm inconsistency
- small alignment drift that does not affect comprehension
- optional polish that can wait until after functional issues

## Finding Contract

```json
{
  "id": "visual-001",
  "severity": "high",
  "area": "responsive",
  "problem": "Primary action overlaps supporting copy at 390px.",
  "evidence": "artifacts/visual-qa/mobile.png",
  "suggestion": "Stack the action below the copy and preserve a 16px gap.",
  "status": "needs-fix"
}
```

Allowed `severity`: `critical`, `high`, `medium`, `low`.

Allowed `status`: `needs-fix`, `accepted`, `resolved`, `not-applicable`.
