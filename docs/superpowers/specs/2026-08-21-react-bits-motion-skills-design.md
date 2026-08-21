# React Bits Motion Skills Design

## Goal

Evolve SevenDesign from a collection of visual direction notes into an agent-ready design protocol that can select, compose, implement, and review React Bits-style motion without turning every screen into a demo page.

## Scope

- Update the repository-local skills under `skills/`.
- Keep `seven-design` as the unified router, `design-core` as the execution core, and the scenario skills as product-context routes.
- Add a public React Bits integration skill and a general motion-review skill.
- Add standard skill frontmatter so the repository skills can be discovered or installed with normal skill tooling.
- Update the repository indexes and workflow docs.
- Do not copy paid React Bits Pro source, private assets, or gated templates.
- Do not modify global skills under `~/.agents/skills` or `~/.codex/skills`.

## Design

### 1. Skill Architecture

`skills/seven-design/SKILL.md` is the unified router. It selects the minimum set of context, craft, React Bits, and review skills. `skills/design-core/SKILL.md` remains the execution core: it receives the product type, selected preset, brand references, page archetype, and visual dials, then runs the inspect → direct → build → verify loop.

`skills/react-bits/SKILL.md` becomes the public-component integration layer. It explains how to choose a React Bits component by job, how to choose JS/TS and CSS/Tailwind variants, how to integrate dependencies into an existing codebase, and how to preserve SevenDesign tokens and accessibility. It treats React Bits as a source of motion language and usable open components, not as a reason to decorate every section.

`skills/motion-review/SKILL.md` is the product-level composition bridge. It reviews motion for purpose, hierarchy, choreography, interruption, reduced-motion behavior, and consistency between hero and product interior. `skills/review-animations/SKILL.md` remains the strict code-level authority for animation implementation.

Scenario skills (`ai-native`, `devtool-pro`, `docs-pricing`, and `luxe-landing`) keep their category defaults but explicitly declare where motion can be strong, restrained, or absent.

### 2. Motion Protocol

Every animated surface must declare:

- the user-facing job of the motion
- the trigger (`load`, `hover`, `focus`, `scroll`, `state`, or `gesture`)
- the choreography order
- the interruption or replay behavior
- the reduced-motion fallback

The protocol uses three motion tiers:

- `micro`: feedback and orientation inside controls
- `system`: transitions between related states or regions
- `signature`: one or two memorable compositions per page

The default budget is one signature move per viewport and no more than two simultaneous motion systems in a dense app surface. Marketing pages may use more motion only when the page narrative supports it.

### 3. React Bits Integration Rules

- Prefer the official public implementation or documented installation path when a component is selected.
- Inspect the component's dependencies and adapt it to the repository token system rather than pasting an isolated visual.
- Keep the component's motion behavior, but tune color, typography, spacing, contrast, and surface treatment to the selected SevenDesign flavor.
- Use the public catalog for implementation. Use Pro only as inspiration for information architecture, category naming, or composition patterns that are visible without gated source.
- Never invent that a paid asset is available, and never recreate a gated asset line-for-line.
- Apply motion-review before accepting a component into a page.

### 4. Verification

Documentation changes are verified with the skill validator and repository-wide link/reference scans. The motion rules are verified with targeted text checks for required frontmatter, motion tier language, reduced-motion requirements, and React Bits routing. No new runtime dependency is required for this phase.

## Alternatives Considered

### A. Only add a React Bits link list

Rejected because it leaves the agent to make the important decisions about composition, motion budgets, dependencies, and accessibility every time.

### B. Copy the public React Bits repository into SevenDesign

Rejected because it creates a stale duplicate, adds dependency and licensing noise, and still does not explain when a component is appropriate.

### C. Add a routed integration skill plus a motion quality gate

Selected because it keeps the library small, makes the public source actionable, and gives every scenario a consistent way to use React Bits-style motion without flattening product context.

## Acceptance Criteria

- Existing scenario skills remain usable and now contain standard frontmatter.
- `seven-design` documents React Bits routing and `design-core` documents execution and verification.
- `react-bits` documents public-source integration, variant selection, motion tiers, and Pro boundaries.
- `motion-review` provides a reusable product-level review checklist with reduced-motion and performance checks.
- `review-animations` remains the strict animation code review authority.
- README, workflow, and library index expose the new skills.
- Skill validation passes for all repository skills.
