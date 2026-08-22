# SevenDesign Quality Loop Design

## Status

Proposed for review.

## Problem

SevenDesign currently has strong design rules, source-selection guidance, React Bits / Vue Bits integration, and motion review protocols. Its next quality ceiling is not more design knowledge; it is evidence that the system makes good decisions on realistic tasks and can inspect the visual result it produced.

The current internal score is approximately 8.6/10. The target is 9.5/10 or higher on a repeatable evaluation set without materially increasing default context cost.

## Goals

1. Prove Component Intelligence decisions against 20 realistic product tasks.
2. Close the implementation loop with rendered screenshots, visual audit findings, targeted fixes, and a second screenshot pass.
3. Load Skills, references, catalogs, and source files only when the task requires them.
4. Make the quality target measurable instead of relying on broad subjective review.

## Non-goals

- Do not add a large new component catalog.
- Do not copy or imply access to React Bits Pro, Vue Bits Pro, private assets, or gated templates.
- Do not upload raw user conversations or screenshots to a public service by default.
- Do not require a model-training or hosted evaluation platform for the first version.
- Do not make visual QA a replacement for accessibility, interaction, or build verification.
- Do not automatically modify product code without an explicit implementation workflow.

## Quality Score

The quality score is a weighted evaluation, not a single aesthetic impression:

| Dimension | Weight | Minimum target |
| --- | ---: | ---: |
| Product and framework understanding | 15% | 9.0/10 |
| Component ownership and source selection | 25% | 9.5/10 |
| Reasoned recommendation and rejected alternatives | 15% | 9.0/10 |
| Visual result and hierarchy | 25% | 9.5/10 |
| Responsive, accessibility, and reduced-motion behavior | 10% | 9.0/10 |
| Context efficiency and provenance | 10% | 9.5/10 |
| **Total** | **100%** | **9.5/10** |

A run cannot claim 9.5/10 if any critical safety or accessibility check fails, even when the weighted average is high. Critical failures include a framework mismatch, a fabricated source or Pro claim, unreadable primary content, broken mobile layout, inaccessible primary action, or a visual audit that was skipped for a runnable UI.

## Architecture

The upgrade has three connected modules:

```text
benchmark brief
  -> Component Intelligence decision
  -> implementation or fixture render
  -> screenshot capture
  -> Visual QA audit
  -> targeted fix plan
  -> second screenshot and score
```

The modules communicate through small JSON artifacts. They should not require loading every Skill or every catalog into the main context.

## Module 1: Benchmarks

### Cases

Create 20 cases under `benchmarks/cases/`, grouped across:

- AI SaaS Hero
- Data Dashboard
- Landing Page
- Editor
- Admin Console
- Portfolio
- Mobile Web
- Documentation
- Pricing
- AI Workspace

Each case contains:

- stable `id` and category
- short user brief
- explicit or inferred framework evidence
- product job and density
- interaction frequency
- accessibility and responsive constraints
- expected foundation, behavior, and expression ownership
- acceptable alternative decisions
- rejected sources and effects with reasons
- token and context-budget expectations

The expected answer is a decision envelope, not an exact string. This permits multiple correct implementations while still testing whether the reasoning is product-specific.

### Runner

Add a local `benchmarks/run-benchmarks.py` runner that:

1. Loads only the case brief and its expected envelope.
2. Invokes the local Component Intelligence selector.
3. Compares framework, archetype, ownership layers, candidates, rejection reasons, and budget rules.
4. Emits per-case JSON plus a compact terminal summary.
5. Supports a deterministic selector mode first; model-judged rationale can be added later without changing the case schema.

The first benchmark report must separate:

- hard decision failures
- acceptable alternative decisions
- weak explanations
- missing rejection reasoning
- token-budget violations

### Success criteria

- At least 18/20 cases produce an acceptable ownership plan.
- At least 17/20 cases provide valid rejection reasoning.
- No framework mismatch in the Vue and mobile cases.
- No expressive Bits selection for dense, high-frequency dashboard or admin cases unless the case explicitly assigns a state or media job.
- The report identifies which matrix rule caused each failure.

## Module 2: Visual QA

### Skill boundary

Add a focused `skills/visual-qa/SKILL.md`. It is loaded only when a runnable UI, screenshot, visual comparison, or request to inspect the rendered result exists.

Visual QA is a review and repair loop:

1. Start the approved local app.
2. Capture desktop and mobile screenshots with Playwright.
3. Audit the rendered result against a compact rubric.
4. Return structured findings with severity, location, evidence, likely cause, and suggested fix.
5. Apply only approved or clearly scoped fixes.
6. Capture the same view again.
7. Compare the new result and close or carry forward findings.

### Audit rubric

The audit checks:

- product identity and first-viewport hierarchy
- layout alignment, spacing, overflow, and overlap
- typography scale and content fit
- token consistency and surface contrast
- interaction affordances, focus visibility, and touch targets
- loading, empty, error, and long-content states where relevant
- mobile degradation and orientation assumptions
- reduced-motion and static fallback behavior
- excessive or decorative motion
- forbidden generic AI and component-gallery patterns

Each finding uses a stable JSON shape:

```json
{
  "id": "visual-001",
  "severity": "high",
  "area": "responsive",
  "problem": "Primary action overlaps supporting copy at 390px.",
  "evidence": "artifacts/screenshots/home-mobile.png",
  "suggestion": "Stack the action below the copy and preserve a 16px gap.",
  "status": "needs-fix"
}
```

### Success criteria

- Every runnable benchmark fixture has desktop and mobile evidence.
- High-severity findings are resolved or explicitly accepted with a reason.
- The second screenshot pass shows no new overlap, clipping, or primary-action regressions.
- Visual QA never reports “looks good” without pointing to inspected evidence.

## Module 3: On-demand Loading

### Manifest

Add a compact manifest under `skills/seven-design/catalog/` describing:

- task signals and archetypes
- default Skills
- optional Skills
- references loaded at selection time
- catalogs loaded only after a source decision
- implementation and review handoffs
- framework constraints
- approximate context cost tier

### Resolver

Add a deterministic `skills/seven-design/scripts/resolve-context.py` helper. It accepts a small brief and returns:

- normalized task
- resolved framework
- selected Skills
- selected references
- catalogs to inspect
- files explicitly excluded
- estimated context tier
- reason for every selected resource

The resolver must preserve the current behavior:

- React is the default.
- Vue / Nuxt requires explicit request or host-project evidence.
- Component Intelligence runs before React Bits / Vue Bits.
- Full registries and `llms.txt` are excluded by default.
- Registry lookup is narrow and capped at eight results.
- Dense surfaces do not load expressive motion references unless a real state or media job exists.

### Context budgets

Use four tiers:

- `core`: entrypoint, design contract, tokens, and one scenario Skill
- `selection`: Component Intelligence plus compact source and framework matrices
- `implementation`: only the selected component source and dependency notes
- `review`: only changed files, screenshots, and the relevant review rubric

The resolver should make accidental full-catalog loading visible in its output so a benchmark can fail on context hygiene.

## Rollout

### Phase 1: Evidence

- Add the benchmark schema and 20 cases.
- Add the deterministic runner.
- Establish the baseline score and failure report.

### Phase 2: Visual loop

- Add the Visual QA Skill and screenshot artifact convention.
- Run it against a small set of runnable fixtures first.
- Add the second-pass comparison and high-severity gate.

### Phase 3: Context control

- Add the manifest and resolver.
- Route the main Skill, Component Intelligence, React Bits, and scenario Skills through it.
- Add token-budget checks to benchmark reports.

### Phase 4: Calibration

- Fix matrix rules based on benchmark failures.
- Fix implementation and visual issues based on screenshot evidence.
- Re-run all 20 cases and publish the score report.

## Acceptance criteria

This design is complete when:

1. `benchmarks/` contains 20 cases with expected decision envelopes.
2. A local command produces per-case and aggregate reports.
3. The aggregate report scores the six dimensions above and identifies hard failures.
4. A runnable fixture can complete the screenshot → audit → fix → screenshot loop.
5. The resolver returns an explicit minimal resource set for React, Vue, dense dashboard, and sparse hero briefs.
6. README, WORKFLOW, the unified entrypoint, and the pre-flight checklist describe the new quality loop.
7. The first calibrated run reaches at least 9.5/10 without a critical failure.

## Open decisions for implementation

- The first model-backed Visual QA provider, if any, should remain pluggable; the local artifact and rubric format is the contract.
- Screenshot comparison should start with deterministic geometry and checklist checks before adding pixel-diff or vision-model scoring.
- Benchmark expected envelopes should allow valid alternatives so the system rewards reasoning quality rather than memorized component names.
