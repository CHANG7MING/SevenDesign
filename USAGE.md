# SevenDesign usage

SevenDesign is a design operating system for AI agents and frontend teams. It combines a product design library with an explicit team protocol so exploration, implementation, and review stay separate.

## The shortest useful setup

For a new interface, provide the agent with:

1. [`DESIGN.md`](./DESIGN.md) — the foundation and visual principles.
2. [`TOKENS.md`](./TOKENS.md) — semantic color, type, spacing, elevation, and motion values.
3. [`skills/design-core/SKILL.md`](./skills/design-core/SKILL.md) — the inspect → direct → build → verify loop.
4. One craft skill:
   - [`skills/emil-design-eng/SKILL.md`](./skills/emil-design-eng/SKILL.md) for UI polish and motion decisions.
   - [`skills/apple-design/SKILL.md`](./skills/apple-design/SKILL.md) for fluid interactions, gestures, springs, and typography.
5. One context skill from [`skills/`](./skills): `ai-native`, `devtool-pro`, `docs-pricing`, or `luxe-landing`.
6. One preset, brand reference, page archetype, and component recipe that match the task.
7. [`skills/team-mode/references/seven-design-routing.md`](./skills/team-mode/references/seven-design-routing.md) when the work benefits from focused subagents.

Do not attach every file. Progressive disclosure is part of the system: start with the core, then load only the references needed for the current product and state.

## Choose the team shape

Team Mode is a value-based router, not a mandatory three-agent pipeline. Keep short, single-slice work in the main thread.

| Task shape | Recommended route |
| --- | --- |
| Small copy, token, or link change | Main thread only |
| New product direction, unfamiliar codebase, live reference, or many source files | Explorer → main-thread design contract |
| Clear multi-file implementation with disjoint ownership | Main-thread contract → Executor |
| Stable UI with a concrete unresolved risk | Fresh Reviewer → main-thread acceptance |
| Substantial UI or cross-cutting code change | Explorer → decision gate → Executor → Reviewer |

The main thread remains the creative director and acceptance owner. It keeps unresolved product intent, architecture, safety, content truth, and final visual judgment.

## Role contracts

### Explorer — evidence, read-only

Explorer gathers facts from current web sources, codebases, documents, schemas, assets, rendered screens, and SevenDesign references.

Explorer returns:

- source-backed findings
- relevant tokens, preset, brand, archetype, and component evidence
- Apple / Emil principles that apply
- risks, unknowns, and decisions for the main thread

Explorer does not edit files or decide the product direction on behalf of the parent.

### Executor — bounded implementation

Executor starts only after the main thread has fixed:

- audience and primary user outcome
- page or flow scope
- dominant visual direction
- exact file or artifact ownership
- acceptance checks and explicit exclusions

Executor changes only its assigned slice, preserves unrelated edits, runs the named checks, and returns changed files plus verification. Keep novel architecture, content truth, browser judgment, and difficult-to-verify behavior in the main thread.

### Reviewer — fresh, read-only judgment

Reviewer starts with fresh context after the artifact is stable. Give it one concrete unresolved risk and the exact evidence to inspect.

- Small change: one risk lens.
- Substantial or multi-file change: code quality, performance/reuse, and changed interaction/accessibility surfaces.
- Add motion review only when motion changed or motion is the unresolved risk.

Reviewer reports severity-ordered findings and a verdict. It does not edit, format, commit, or repeat checks already passed.

## Dispatch packet

Before every spawn, send a self-contained packet:

```text
Role: Explorer | Executor | Reviewer
Outcome: one independently finishable result
Benefit: why delegation materially helps
Sources: exact files, URLs, or raw artifacts
Scope: reads, writes, ownership, exclusions, and external-action limits
Checks: acceptance criteria the child owns
Stop when: completion, blocker, or evidence threshold
Return: concise report or artifact format
```

For Reviewer packets, also include `Unresolved risk`, `Evidence`, `Checks already passed`, and `Do not repeat`. For Executor packets, state the one-writer boundary.

## Design recipes

### Personal site

Use [`skills/design-core/SKILL.md`](./skills/design-core/SKILL.md) + [`skills/apple-design/SKILL.md`](./skills/apple-design/SKILL.md) + [`skills/luxe-landing/SKILL.md`](./skills/luxe-landing/SKILL.md). Keep the first screen personal and concrete: identity, what you make, selected work, and contact. Use system typography, restrained materials, direct feedback, and reduced-motion equivalents.

### AI product

Use [`skills/design-core/SKILL.md`](./skills/design-core/SKILL.md) + [`skills/ai-native/SKILL.md`](./skills/ai-native/SKILL.md) + [`archetypes/ai-workspace.md`](./archetypes/ai-workspace.md). Make agent state, tool activity, approval, uncertainty, provenance, cancel, retry, and recovery visible.

### Developer tool

Use [`skills/design-core/SKILL.md`](./skills/design-core/SKILL.md) + [`skills/devtool-pro/SKILL.md`](./skills/devtool-pro/SKILL.md) + [`archetypes/devtool-dashboard.md`](./archetypes/devtool-dashboard.md). Optimize for scan speed, keyboard efficiency, dense but readable data, and believable loading, empty, degraded, and permission states.

### Docs or pricing

Use [`skills/design-core/SKILL.md`](./skills/design-core/SKILL.md) + [`skills/docs-pricing/SKILL.md`](./skills/docs-pricing/SKILL.md) + the matching archetype. Make navigation, reading measure, comparison semantics, billing terms, and mobile behavior explicit.

## Acceptance

Before calling a design complete:

- render it at desktop and mobile sizes when a runnable UI exists;
- inspect focus, loading, empty, error, long-content, overflow, and reduced-motion states;
- confirm that hero and interior surfaces share one visual DNA;
- run [`PRE-FLIGHT-CHECKLIST.md`](./PRE-FLIGHT-CHECKLIST.md);
- reject violations of [`FORBIDDEN-PATTERNS.md`](./FORBIDDEN-PATTERNS.md);
- inspect the actual diff and shared working tree after delegated work.

If the active runtime does not expose explicit role selection and effective sandbox evidence, treat role names as advisory labels only. Do not claim read-only isolation or model routing is active; keep mutations and final visual acceptance in the main thread.

## Runtime and profiles

The upstream Team Mode skill defines optional `Explorer`, `Executor`, `Reviewer`, and `default` Agent profiles. This repository does not silently install personal or project Codex configuration. Install or repair those profiles only with explicit authorization, then verify the actual runtime trace rather than trusting TOML alone.
