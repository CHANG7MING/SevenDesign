# WORKFLOW

This file defines the default workflow for using the library as a real design engine.

## Workflow Modes

### Mode 1: AI Prompt Workflow

Use when:

- generating a new page
- asking an AI coding assistant to build a UI
- designing a quick concept

Flow:

1. Start with [`START-HERE.md`](./START-HERE.md)
2. Pick a path in [`quickstart/`](./quickstart)
3. Choose a starter kit in [`starter-kits/`](./starter-kits)
4. Use one prompt from [`prompt-packs/`](./prompt-packs)
5. Validate with [`PRE-FLIGHT-CHECKLIST.md`](./PRE-FLIGHT-CHECKLIST.md)

### Mode 2: Frontend Implementation Workflow

Use when:

- integrating into a real app
- building components
- creating a starter project

Flow:

1. Read [`TOKENS.md`](./TOKENS.md)
2. Copy base files from [`examples/`](./examples)
3. Apply rules from [`implementation/`](./implementation)
4. Build pages using archetypes and components
5. Validate with [`PRE-FLIGHT-CHECKLIST.md`](./PRE-FLIGHT-CHECKLIST.md)

### Mode 3: Skill Workflow

Use when:

- the library is being attached to an AI agent as a reusable skill
- you want a more executable, opinionated design protocol

Flow:

1. Invoke the unified router [`skills/seven-design/SKILL.md`](./skills/seven-design/SKILL.md), then load [`skills/design-core/SKILL.md`](./skills/design-core/SKILL.md) for the inspect → direct → build → verify loop
2. Add the relevant upstream craft skill from [`skills/emil-design-eng/`](./skills/emil-design-eng), [`skills/apple-design/`](./skills/apple-design), [`skills/animation-vocabulary/`](./skills/animation-vocabulary), or [`skills/review-animations/`](./skills/review-animations)
3. Add one SevenDesign category skill from [`skills/`](./skills) when the product category matches
4. Load only the preset, brand, archetype, component, and interaction references selected by those skills
5. Render and inspect the result when a runnable UI exists
6. Review with [`skills/design-core/references/review-protocol.md`](./skills/design-core/references/review-protocol.md)
7. Reject outputs that violate [`FORBIDDEN-PATTERNS.md`](./FORBIDDEN-PATTERNS.md)

### Mode 4: Team Workflow

Use when the task has substantial evidence gathering, independent implementation slices, difficult visual judgment, or a meaningful need for a fresh review. This is a value-based routing guide, not a mandatory three-agent pipeline.

1. Read [`skills/team-mode/SKILL.md`](./skills/team-mode/SKILL.md) and [`skills/team-mode/references/seven-design-routing.md`](./skills/team-mode/references/seven-design-routing.md)
2. Keep product intent, visual direction, architecture, safety boundaries, and final acceptance in the main thread
3. Dispatch the smallest useful `Explorer`, `Executor`, or `Reviewer` set with a complete dispatch packet
4. Give each mutable file or artifact exactly one writer; parallelize only disjoint slices
5. Let Explorer gather evidence, Executor implement bounded work, and Reviewer independently inspect stable results
6. Inspect actual artifacts and verification before accepting delegated output

If the active runtime does not expose explicit role selection and effective sandbox evidence, treat Explorer / Executor / Reviewer as advisory labels only. Do not claim that read-only isolation or model routing is active; keep mutation and final visual acceptance in the main thread.
