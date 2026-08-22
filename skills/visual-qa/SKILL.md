---
name: visual-qa
description: Inspect a runnable UI through desktop and mobile screenshots, return evidence-based visual findings, and repeat the capture after approved fixes.
---

# Visual QA

Visual QA closes SevenDesign's implementation loop:

```text
render -> screenshot -> audit -> fix -> screenshot -> compare
```

Use this Skill when a runnable UI exists, the user asks to inspect the rendered result, or a change affects layout, responsive behavior, visual hierarchy, or motion. Do not load it for a text-only design decision.

## Workflow

1. Start the approved local app and record the URL.
2. Capture desktop and mobile screenshots with [`scripts/capture-playwright.mjs`](./scripts/capture-playwright.mjs).
3. Read [`references/audit-rubric.md`](./references/audit-rubric.md).
4. Inspect the screenshots and write a JSON report with findings, evidence paths, severity, and suggested fixes.
5. Run [`scripts/validate-report.py`](./scripts/validate-report.py) against the report.
6. Fix only the scoped findings that the implementation workflow authorizes.
7. Capture the same view again and compare the new evidence.
8. Close resolved findings or carry them forward with a reason.

Visual QA is evidence-based. Never return “looks good” without naming the inspected screenshots and viewport sizes.

## Required Evidence

- desktop screenshot
- mobile screenshot
- reduced-motion screenshots when motion exists
- route and viewport metadata
- structured findings report
- a second capture after any visual fix

## Boundaries

- Keep product, accessibility, and build review separate but coordinated.
- Do not hide missing loading, empty, error, permission, or success states behind visual polish.
- Report overlap, clipping, unreadable text, focus loss, and broken touch targets as high severity.
- Do not use a vision provider or upload screenshots unless the host workflow explicitly authorizes it.
- If Playwright is unavailable, report the environment blocker; do not fabricate screenshot evidence.
