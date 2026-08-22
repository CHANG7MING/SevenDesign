# SevenDesign Quality Loop Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a measurable benchmark suite, a screenshot-based Visual QA workflow, and a low-context resource resolver so SevenDesign can move from an estimated 8.6/10 toward a repeatable 9.5/10 gate.

**Architecture:** Keep all three modules local and deterministic first. Benchmarks consume the existing Component Intelligence matrix; Visual QA produces screenshot and finding artifacts without requiring a vision provider; the context resolver consumes a compact manifest and returns only the resources needed for a brief. README and the unified entrypoint route agents through the new layers.

**Tech Stack:** Python 3 standard library, JSON, Markdown, Playwright-compatible browser command, existing SevenDesign Skills and catalogs.

## Global Constraints

- React is the default framework.
- Vue / Nuxt requires explicit request or host-project evidence.
- Component Intelligence runs before React Bits / Vue Bits.
- Full registries and `llms.txt` are excluded by default.
- Registry lookup is narrow and capped at eight results.
- Dense surfaces do not load expressive motion references unless a real state or media job exists.
- Do not copy or imply access to Pro, private assets, or gated templates.
- Do not upload raw user conversations or screenshots by default.

---

### Task 1: Add Benchmark Case Schema and 20 Realistic Briefs

**Files:**
- Create: `benchmarks/README.md`
- Create: `benchmarks/cases/*.json`
- Create: `benchmarks/schema.json`

**Interfaces:**
- Each case is a JSON object with `id`, `category`, `brief`, `framework`, `density`, `expected`, and `budget`.
- `expected.ownership` contains `foundation`, `behavior`, and `expression`.
- `expected.alternatives` contains accepted source alternatives.

- [ ] **Step 1: Define the case schema**

Create `benchmarks/schema.json` with required fields for product intent, framework, ownership, rejected alternatives, and context budget. Keep it descriptive rather than adding a JSON Schema dependency.

- [ ] **Step 2: Add 20 cases**

Add two cases per category: `ai-saas-hero`, `data-dashboard`, `landing-page`, `editor`, `admin-console`, `portfolio`, `mobile-web`, `documentation`, `pricing`, and `ai-workspace`. Include React-default cases, explicit Vue cases, dense surfaces, sparse surfaces, and high-frequency workflows.

- [ ] **Step 3: Document the benchmark contract**

Document the command, case fields, accepted alternatives, and score dimensions in `benchmarks/README.md`.

- [ ] **Step 4: Validate all case JSON**

Run:

```bash
python3 - <<'PY'
import json
from pathlib import Path

for path in sorted(Path("benchmarks/cases").glob("*.json")):
    json.loads(path.read_text())
print("benchmark cases: valid")
PY
```

Expected: `benchmark cases: valid`.

### Task 2: Implement the Deterministic Benchmark Runner

**Files:**
- Create: `benchmarks/run-benchmarks.py`
- Create: `benchmarks/reports/.gitkeep`

**Interfaces:**
- Command: `python3 benchmarks/run-benchmarks.py`
- Optional flags: `--case <id>`, `--json`, `--output <path>`.
- Output fields: `total`, `passed`, `score`, `hardFailures`, `cases`, and `dimensions`.

- [ ] **Step 1: Write runner scoring helpers**

Implement pure functions for framework score, ownership score, alternative score, rejection score, and budget score. Treat expected alternatives as passing decisions and mark framework mismatch, Pro claims, or dense expressive-motion selection as hard failures.

- [ ] **Step 2: Connect runner to Component Intelligence**

Invoke `skills/component-intelligence/scripts/select-source.py` with each case brief through `subprocess.run`, parse JSON stdout, and compare the returned ownership plan to the case envelope.

- [ ] **Step 3: Add aggregate scoring**

Use the design weights: product/framework 15%, ownership 25%, rationale 15%, visual placeholder 25%, responsive/accessibility 10%, context/provenance 10%. Mark visual as `not-run` for selector-only cases and report it separately instead of pretending screenshots exist.

- [ ] **Step 4: Run the benchmark suite**

Run:

```bash
python3 benchmarks/run-benchmarks.py
python3 benchmarks/run-benchmarks.py --json --output benchmarks/reports/latest.json
```

Expected: a compact summary and a JSON report with per-case failure reasons.

### Task 3: Add Visual QA Skill and Artifact Validator

**Files:**
- Create: `skills/visual-qa/SKILL.md`
- Create: `skills/visual-qa/references/audit-rubric.md`
- Create: `skills/visual-qa/scripts/validate-report.py`
- Create: `skills/visual-qa/scripts/capture-playwright.mjs`

**Interfaces:**
- Capture command: `node skills/visual-qa/scripts/capture-playwright.mjs --url http://127.0.0.1:3008 --out artifacts/visual-qa`
- Report validation command: `python3 skills/visual-qa/scripts/validate-report.py artifacts/visual-qa/report.json`
- Finding shape: `id`, `severity`, `area`, `problem`, `evidence`, `suggestion`, and `status`.

- [ ] **Step 1: Write the Visual QA routing skill**

Document the screenshot → audit → fix → screenshot loop, desktop and mobile viewports, reduced-motion checks, evidence requirements, and the rule that no runnable UI can be declared visually complete without screenshots.

- [ ] **Step 2: Add the compact audit rubric**

Record checks for hierarchy, overlap, typography, tokens, focus, states, mobile, reduced motion, excessive motion, and generic patterns.

- [ ] **Step 3: Add the Playwright-compatible capture script**

Use dynamic import of the installed `playwright` package, capture desktop and mobile screenshots, and fail with a clear install/runtime message when the package is unavailable. Do not add a root dependency.

- [ ] **Step 4: Add report validation**

Validate JSON shape, severity values, status values, evidence paths, and unresolved high-severity findings. Return non-zero when the report is malformed or unresolved high-severity findings remain.

- [ ] **Step 5: Validate the Visual QA tools**

Run the validator against a fixture report and run the capture script against the existing showcase when a dev server is available. If Playwright is unavailable, validate the script syntax and report the environment gap.

### Task 4: Add On-Demand Resource Manifest and Resolver

**Files:**
- Create: `skills/seven-design/catalog/load-manifest.json`
- Create: `skills/seven-design/scripts/resolve-context.py`
- Create: `skills/seven-design/references/context-loading.md`

**Interfaces:**
- Command: `python3 skills/seven-design/scripts/resolve-context.py --brief '{"surface":"AI SaaS Hero"}'`
- Output fields: `brief`, `framework`, `tier`, `skills`, `references`, `catalogs`, `excluded`, and `reasons`.

- [ ] **Step 1: Define the compact load manifest**

Map task signals to core, selection, implementation, and review resources. Include explicit exclusions for full registries, `llms.txt`, unrelated Vue / React catalogs, and dense-surface expressive references.

- [ ] **Step 2: Implement brief normalization**

Normalize surface, framework, density, interaction frequency, and motion intent. Default missing framework to React and reject unsupported frameworks.

- [ ] **Step 3: Implement resource resolution**

Return the minimum relevant resource set. AI SaaS Hero should select Component Intelligence and optionally React Bits; Data Dashboard should select Component Intelligence and exclude expression catalogs by default; Vue portfolio should select the Vue catalog only.

- [ ] **Step 4: Add context-loading documentation**

Document the four tiers, hard exclusions, eight-result registry limit, and how an agent records why each resource was loaded.

- [ ] **Step 5: Run resolver scenarios**

Run:

```bash
python3 skills/seven-design/scripts/resolve-context.py --brief '{"surface":"AI SaaS Hero"}'
python3 skills/seven-design/scripts/resolve-context.py --brief '{"surface":"data dashboard"}'
python3 skills/seven-design/scripts/resolve-context.py --brief '{"surface":"portfolio","framework":"vue"}'
```

Expected: minimal resource sets with explicit exclusions and no full registry paths.

### Task 5: Integrate Routing, Quality Gates, and Documentation

**Files:**
- Modify: `skills/seven-design/SKILL.md`
- Modify: `skills/component-intelligence/SKILL.md`
- Modify: `README.md`
- Modify: `WORKFLOW.md`
- Modify: `LIBRARY-INDEX.md`
- Modify: `PRE-FLIGHT-CHECKLIST.md`
- Modify: `CHANGELOG.md`

**Interfaces:**
- The unified entrypoint routes product briefs through Component Intelligence, then resource resolution, then optional Bits and Visual QA.
- The pre-flight checklist includes benchmark and screenshot evidence.

- [ ] **Step 1: Add resolver routing to the unified entrypoint**

State that the resolver runs before loading scenario references and that its output is the loading contract for the task.

- [ ] **Step 2: Add Visual QA routing**

Load Visual QA only when a runnable UI or rendered-result review is in scope. Keep code review and visual review separate.

- [ ] **Step 3: Add benchmark and visual gates**

Require benchmark reports for changes to Component Intelligence and screenshot evidence for runnable UI changes.

- [ ] **Step 4: Update README and indexes**

Describe the three-module quality loop, the 9.5/10 target, and low-token behavior without claiming that a vision model is bundled.

- [ ] **Step 5: Run final validation**

Run JSON validation, Python compilation, benchmark scenarios, resolver scenarios, documentation link checks, conflict-marker checks, and `git diff --check`.
