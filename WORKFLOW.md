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

1. Start with [`skills/design-core/SKILL.md`](./skills/design-core/SKILL.md)
2. Add one specialized skill from [`skills/`](./skills)
3. Follow its parameter and quality rules
4. Reject outputs that violate [`FORBIDDEN-PATTERNS.md`](./FORBIDDEN-PATTERNS.md)
