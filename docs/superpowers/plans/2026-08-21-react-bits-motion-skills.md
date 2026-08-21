# React Bits Motion Skills Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make SevenDesign skills explicitly capable of selecting, integrating, and reviewing React Bits-style animation quality.

**Architecture:** Keep `seven-design` as the unified router and `design-core` as the execution core, add a focused `react-bits` integration skill and a product-level `motion-review` bridge, then annotate scenario skills with motion budgets and update repository navigation. The implementation is documentation-first and introduces no runtime dependency.

**Tech Stack:** Markdown skill files, repository documentation, `skill-creator` validator.

## Global Constraints

- Do not copy React Bits Pro source, gated assets, or private templates.
- Preserve SevenDesign semantic tokens and scenario-specific density rules.
- Every animated surface must define purpose, trigger, choreography, interruption behavior, and reduced-motion fallback.
- Use ASCII by default and keep links relative inside the repository.

---

### Task 1: Add standard skill metadata and motion routing

**Files:**
- Modify: `skills/design-core/SKILL.md`
- Modify: `skills/ai-native/SKILL.md`
- Modify: `skills/devtool-pro/SKILL.md`
- Modify: `skills/docs-pricing/SKILL.md`
- Modify: `skills/luxe-landing/SKILL.md`

**Interfaces:**
- Consumes: existing SevenDesign presets, archetypes, tokens, and quality gates.
- Produces: discoverable skill frontmatter and shared motion routing language for later skills.

- [ ] **Step 1: Add frontmatter and routing sections**

  Add `name` and `description` frontmatter to each existing skill. In `seven-design`, add the unified route table. In `design-core`, add motion tiers and a routing rule that loads `react-bits` for public component sourcing and `motion-review` before acceptance. In each scenario skill, add a short motion budget section matching its current defaults.

- [ ] **Step 2: Scan for missing route references**

  Run:

  ```bash
  rg -n "react-bits|motion-review|review-animations|prefers-reduced-motion" skills
  ```

  Expected: `seven-design`, `design-core`, and each scenario skill contain the intended references, with no broken path spelling.

### Task 2: Add React Bits integration skill

**Files:**
- Create: `skills/react-bits/SKILL.md`

**Interfaces:**
- Consumes: `DESIGN.md`, `TOKENS.md`, `FORBIDDEN-PATTERNS.md`, `PRE-FLIGHT-CHECKLIST.md`, and the active scenario skill.
- Produces: a repeatable public React Bits selection and integration protocol.

- [ ] **Step 1: Write the skill**

  Include frontmatter, activation criteria, public-source and Pro boundary rules, a component selection sequence, JS/TS and CSS/Tailwind variant rules, token adaptation rules, motion tiers, and required handoff fields.

- [ ] **Step 2: Validate the skill shape**

  Run:

  ```bash
  python3 /Users/changming/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/react-bits
  ```

  Expected: validation passes with no unfinished scaffold placeholders.

### Task 3: Add motion quality gate skill

**Files:**
- Create: `skills/motion-review/SKILL.md`

**Interfaces:**
- Consumes: the proposed page/component, active design dials, and React Bits integration notes.
- Produces: a severity-ranked motion review and a pass/fail recommendation.

- [ ] **Step 1: Write the review skill**

  Include review dimensions for purpose, hierarchy, timing, easing, choreography, interaction, accessibility, reduced motion, performance, and cross-surface consistency. Require concrete findings with a location, risk, and correction.

- [ ] **Step 2: Validate the skill**

  Run:

  ```bash
  python3 /Users/changming/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/motion-review
  ```

  Expected: validation passes.

### Task 4: Update navigation and workflow docs

**Files:**
- Modify: `README.md`
- Modify: `WORKFLOW.md`
- Modify: `LIBRARY-INDEX.md`
- Modify: `CHANGELOG.md`

**Interfaces:**
- Consumes: the new skill entry points and motion protocol.
- Produces: discoverable repository documentation.

- [ ] **Step 1: Link the new skills**

  Add the skills to the README table, workflow mode, and library index. Add a changelog entry describing public React Bits integration and the motion quality gate.

- [ ] **Step 2: Verify links and references**

  Run:

  ```bash
  rg -n "\]\(\./skills/(react-bits|motion-review)/SKILL\.md\)" README.md WORKFLOW.md LIBRARY-INDEX.md
  ```

  Expected: every new skill is linked from all three navigation files.

### Task 5: Run repository verification

**Files:**
- Test: all `skills/*/SKILL.md`

**Interfaces:**
- Consumes: all changed skill files and navigation docs.
- Produces: validated skill set with no obvious broken references.

- [ ] **Step 1: Validate every skill directory**

  Run:

  ```bash
  for skill in skills/*; do
    python3 /Users/changming/.codex/skills/.system/skill-creator/scripts/quick_validate.py "$skill"
  done
  ```

  Expected: every skill reports success.

- [ ] **Step 2: Check repository references**

  Run:

  ```bash
  rg -n "TBD|TODO|react-bits|motion-review|prefers-reduced-motion" skills README.md WORKFLOW.md LIBRARY-INDEX.md CHANGELOG.md
  ```

  Expected: no unfinished placeholders; required motion and integration references are present.
