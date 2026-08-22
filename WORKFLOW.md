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
5. Add [`skills/react-bits/SKILL.md`](./skills/react-bits/SKILL.md) only when a public component has a named product job
6. Validate with [`PRE-FLIGHT-CHECKLIST.md`](./PRE-FLIGHT-CHECKLIST.md)

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
5. If using React Bits or Vue Bits, resolve the framework with [`skills/react-bits/references/framework-selection.md`](./skills/react-bits/references/framework-selection.md); React is the default
6. Normalize the product brief and read [`skills/react-bits/references/selection-protocol.md`](./skills/react-bits/references/selection-protocol.md)
7. Compare candidates with [`skills/react-bits/catalog/selection-matrix.json`](./skills/react-bits/catalog/selection-matrix.json) and [`skills/react-bits/catalog/frameworks.json`](./skills/react-bits/catalog/frameworks.json), then search the resolved registry
8. If a bundled variant fits, inspect the resolved source directory and copy or adapt only the required files into the host project
9. If no bundled variant fits, use the matching public registry entry and record the public installation path; never imply that an unbundled component is already installed
10. Record the resolved framework, recommendation, rejected alternatives, source provenance, selected variant, exact copied files, token substitutions, dependencies, responsive behavior, focus behavior, and reduced-motion fallback
11. Run [`skills/motion-review/SKILL.md`](./skills/motion-review/SKILL.md); if animation code changed, run [`skills/review-animations/SKILL.md`](./skills/review-animations/SKILL.md)
12. Validate with [`PRE-FLIGHT-CHECKLIST.md`](./PRE-FLIGHT-CHECKLIST.md)

For token efficiency, “search the registry” means running [`skills/react-bits/scripts/search-registry.py`](./skills/react-bits/scripts/search-registry.py) with a narrow query. Do not load the full React or Vue registry into the active context.

### Mode 3: Skill Workflow

Use when:

- the library is being attached to an AI agent as a reusable skill
- you want a more executable, opinionated design protocol

Flow:

1. Invoke the unified router [`skills/seven-design/SKILL.md`](./skills/seven-design/SKILL.md), then load [`skills/design-core/SKILL.md`](./skills/design-core/SKILL.md) for the inspect → direct → build → verify loop
2. Add the relevant upstream craft skill from [`skills/emil-design-eng/`](./skills/emil-design-eng), [`skills/apple-design/`](./skills/apple-design), [`skills/animation-vocabulary/`](./skills/animation-vocabulary), or [`skills/review-animations/`](./skills/review-animations)
3. Add one SevenDesign category skill from [`skills/`](./skills) when the product category matches
4. When a concrete public React Bits component is useful, load [`skills/react-bits/SKILL.md`](./skills/react-bits/SKILL.md) and keep its motion inside the selected `micro`, `system`, or `signature` tier
5. When the user asks where to add motion, load [`skills/find-animation-opportunities/SKILL.md`](./skills/find-animation-opportunities/SKILL.md)
6. When the user asks to audit or improve existing motion, load [`skills/improve-animations/SKILL.md`](./skills/improve-animations/SKILL.md)
7. Load only the preset, brand, archetype, component, and interaction references selected by those skills
8. Render and inspect the result when a runnable UI exists
9. Use [`skills/motion-review/SKILL.md`](./skills/motion-review/SKILL.md) for product-level motion composition, then [`skills/design-core/references/review-protocol.md`](./skills/design-core/references/review-protocol.md) and [`skills/review-animations/`](./skills/review-animations) for the applicable code-level review
10. Reject outputs that violate [`FORBIDDEN-PATTERNS.md`](./FORBIDDEN-PATTERNS.md)

React Bits is an implementation extension, not a replacement for product hierarchy, scenario constraints, or upstream motion standards. If the public source is not present locally, do not claim that it is installed; use the project's documented public installation path or record the missing dependency.

### Mode 4: Team Workflow

Use when the task has substantial evidence gathering, independent implementation slices, difficult visual judgment, or a meaningful need for a fresh review. This is a value-based routing guide, not a mandatory three-agent pipeline.

1. Read [`skills/team-mode/SKILL.md`](./skills/team-mode/SKILL.md) and [`skills/team-mode/references/seven-design-routing.md`](./skills/team-mode/references/seven-design-routing.md)
2. Keep product intent, visual direction, architecture, safety boundaries, and final acceptance in the main thread
3. Dispatch the smallest useful `Explorer`, `Executor`, or `Reviewer` set with a complete dispatch packet
4. Give each mutable file or artifact exactly one writer; parallelize only disjoint slices
5. Let Explorer gather evidence, Executor implement bounded work, and Reviewer independently inspect stable results
6. Inspect actual artifacts and verification before accepting delegated output

If the active runtime does not expose explicit role selection and effective sandbox evidence, treat Explorer / Executor / Reviewer as advisory labels only. Do not claim that read-only isolation or model routing is active; keep mutation and final visual acceptance in the main thread.
