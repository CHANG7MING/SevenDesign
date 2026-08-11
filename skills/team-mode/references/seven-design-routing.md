# SevenDesign Team Routing

Use this reference after the upstream Team Mode dispatch gate when the task touches SevenDesign skills or a design artifact.

## Role contract

| Role | Model / access | SevenDesign responsibility | Must not do |
| --- | --- | --- | --- |
| Explorer | Intended: Luna Medium / read-only | Gather current evidence from the brief, code, rendered UI, tokens, archetypes, brand references, Apple/Emil guidance, and relevant external sources. Return an evidence packet and unresolved decisions. | Edit the workspace, decide the product direction for the parent, or present guesses as implementation. |
| Executor | Intended: Luna High / workspace-write | Implement a clear, bounded slice after the main thread fixes the direction, ownership, acceptance checks, and safety boundaries. Use `design-core` plus exactly the relevant category and craft skills. | Expand scope, redesign ambiguous requirements, touch another writer's files, or claim visual quality without checks. |
| Reviewer | Intended: Terra Medium / read-only | Independently inspect the stable artifact from fresh context. Review one concrete risk with `review-protocol`, `review-animations`, or the relevant Apple guidance. | Modify, format, commit, or repeat checks that already passed. |

The main thread is the **creative director and acceptance owner**. It resolves product identity, content truth, architecture, visual judgment, safety, and conflicting findings. It decides whether to dispatch at all, selects the smallest useful team, assigns one writer per mutable target, and accepts the combined result.

## Route by task shape

### Simple task — stay in the main thread

Use no team when the request is a one-file copy edit, a small token change, a direct explanation, or a task whose sources the main thread must inspect anyway.

### Explore first

Dispatch Explorer when the task has uncertain product intent, multiple relevant source files, a live reference, a current web claim, a new visual direction, or a large existing codebase. For a design task, ask for:

- current structure and reusable components
- selected `DESIGN.md` / `TOKENS.md` / preset / brand / archetype evidence
- Apple / Emil principles that apply
- risks, unknowns, and decisions the parent must make

### Execute after the decision gate

Dispatch Executor only after the main thread has written a compact design contract:

- audience and primary user outcome
- page or flow scope
- dominant visual direction
- exact files or artifact ownership
- acceptance checks and explicit exclusions

Split only independent slices, for example a disjoint page section, a reference document, or a static test. Keep novel architecture, content truth, visual composition, browser judgment, and difficult-to-verify behavior in the main thread.

### Review after stable execution

Dispatch Reviewer with fresh context when the artifact is stable and a concrete unresolved risk remains. For substantial UI work, choose one or more distinct lenses only when coordination cost is justified:

- craft and visual hierarchy
- motion and physical continuity
- accessibility and responsive behavior
- code quality, reuse, and performance

Use this threshold:

- small change: one Reviewer and one concrete risk lens;
- multi-file or substantial UI change: code quality, performance/reuse, and changed interaction/accessibility surfaces;
- add motion review only when motion changed or is the unresolved risk;
- never repeat checks already passed unless the artifact changed.

The Reviewer reports findings only. The main thread validates each finding against the actual artifact, applies accepted fixes, and reruns targeted checks. Responsive or subjective visual acceptance stays with the main thread unless the Reviewer packet includes browser authority plus screenshots or an equivalent captured artifact.

## SevenDesign skill composition

| Work | Explorer reads | Executor uses | Reviewer uses |
| --- | --- | --- | --- |
| New landing page | `DESIGN.md`, preset, brand, archetype, current assets | `design-core` + category skill + `emil-design-eng`; add `apple-design` for fluid interaction | `review-protocol` + `review-animations` if motion changed |
| Personal site | `DESIGN.md`, `TOKENS.md`, `luxe-landing` or `docs-pricing`, Apple typography/material guidance | `design-core` + `apple-design` + selected category skill | `review-protocol`, fresh viewport checks, reduced motion |
| AI workspace | `skills/ai-native/SKILL.md`, `archetypes/ai-workspace.md`, component recipes, state requirements | `design-core` + `ai-native` + `emil-design-eng`; Apple for gestures/sheets | `review-protocol` + state/interaction evidence |
| Motion review | changed files and rendered states | usually no Executor unless the parent explicitly accepts a fix scope | `review-animations` + `STANDARDS.md` |
| Design library maintenance | affected skills, links, metadata, upstream source | one Executor per disjoint documentation area | fresh link/frontmatter/reuse review |

Do not load every reference into every role. Explorer gathers evidence; Executor loads the references needed for its owned slice; Reviewer receives only the stable artifact, relevant standards, and checks already passed.

## Dispatch packet template

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

For Reviewer packets, add `Unresolved risk`, `Evidence`, `Checks already passed`, and `Do not repeat`. For Executor packets, state the one-writer boundary and tell the child to preserve unrelated edits.

## Handoff protocol

1. Explorer returns evidence, not a recommendation disguised as fact.
2. Main thread records decisions, scope, ownership, and acceptance checks.
3. Executor implements only its assigned slice and returns changed files plus verification.
4. Main thread inspects the actual diff and rendered result.
5. Reviewer independently checks the stable artifact and returns severity-ordered findings.
6. Main thread accepts, fixes, or rejects findings and performs final verification.

If a child errors or times out, inspect shared artifacts before retrying. Retry a transient failure at most once. Do not let a child spawn descendants under standard Team Mode.

## Runtime readiness gate

Before claiming role, model, or sandbox isolation, inspect the active dispatch schema and, when available, the child runtime trace. The gate passes only when:

1. explicit role selection is exposed (`agent_type` or an equivalent runtime control);
2. the selected role, model, reasoning effort, and effective sandbox are visible in runtime evidence;
3. Explorer and Reviewer show read-only-effective access, and Executor owns the declared write slice;
4. the child has one-writer ownership and the parent can inspect `git status`, `git diff`, and produced artifacts afterward.

If any item is missing, treat role names as advisory only. Keep the work in the main thread or use a separate, verified checkout for read-only review. Do not claim that a TOML field created OS-level isolation.

## Runtime note

The upstream role names and model/access mapping are a routing contract. This repository does not silently install personal or project Agent TOML profiles. Install or repair profiles only after explicit user authorization. The current Codex collaboration surface may not expose `agent_type`; in that case the runtime readiness gate fails closed and the main thread remains responsible for mutations and final review.
