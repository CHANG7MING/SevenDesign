# LIBRARY-INDEX

## Purpose

This file maps the relationship between the root design contract, presets, brand recipes, page archetypes, and component recipes.

Use it as the quickest entry point when deciding what to apply to a new product or page.

## Flow

1. Start with the unified router [`skills/seven-design/SKILL.md`](./skills/seven-design/SKILL.md)
2. Read [`START-HERE.md`](./START-HERE.md) and choose a guided path from [`quickstart/`](./quickstart)
3. Pick a starter kit from [`starter-kits/`](./starter-kits)
4. Use prompts from [`prompt-packs/`](./prompt-packs) or code from [`examples/`](./examples)
5. Read [`DESIGN.md`](./DESIGN.md) and [`TOKENS.md`](./TOKENS.md) when you need deeper control
6. Run [`component-intelligence`](./skills/component-intelligence/SKILL.md) to choose foundation, behavior, and expression ownership; load [`react-bits`](./skills/react-bits/SKILL.md) only when Bits is selected
7. Run the product-level and code-level motion review that applies

## Fastest Entry Points

- New user: [`START-HERE.md`](./START-HERE.md)
- Pick a direction: [`quickstart/CHOOSE-YOUR-STACK.md`](./quickstart/CHOOSE-YOUR-STACK.md)
- Use with AI: [`quickstart/USE-WITH-AI.md`](./quickstart/USE-WITH-AI.md)
- Use in a real project: [`quickstart/USE-IN-PROJECT.md`](./quickstart/USE-IN-PROJECT.md)
- Use as a workflow: [`WORKFLOW.md`](./WORKFLOW.md)
- Benchmark source decisions: [`benchmarks/README.md`](./benchmarks/README.md)
- Visual QA loop: [`skills/visual-qa/SKILL.md`](./skills/visual-qa/SKILL.md)
- Context resolver: [`skills/seven-design/scripts/resolve-context.py`](./skills/seven-design/scripts/resolve-context.py)
- Check quality: [`PRE-FLIGHT-CHECKLIST.md`](./PRE-FLIGHT-CHECKLIST.md)
- Apply guardrails: [`FORBIDDEN-PATTERNS.md`](./FORBIDDEN-PATTERNS.md)
- Unified skill router: [`skills/seven-design/SKILL.md`](./skills/seven-design/SKILL.md)

## Skill Entry Points

### Upstream craft layer

- [`skills/emil-design-eng/SKILL.md`](./skills/emil-design-eng/SKILL.md) — primary UI craft and motion decisions
- [`skills/apple-design/SKILL.md`](./skills/apple-design/SKILL.md) — fluid, gesture-driven, spring-based interaction
- [`skills/animation-vocabulary/SKILL.md`](./skills/animation-vocabulary/SKILL.md) — precise motion terminology
- [`skills/review-animations/SKILL.md`](./skills/review-animations/SKILL.md) — strict animation-only review

See [`skills/UPSTREAM-SOURCE.md`](./skills/UPSTREAM-SOURCE.md) for provenance and update guidance.

### Team orchestration layer

- [`skills/team-mode/SKILL.md`](./skills/team-mode/SKILL.md) — upstream Team Mode routing and dispatch contract
- [`skills/team-mode/references/seven-design-routing.md`](./skills/team-mode/references/seven-design-routing.md) — SevenDesign role-to-skill mapping and handoff protocol

### SevenDesign context layer

- Core: [`skills/design-core/SKILL.md`](./skills/design-core/SKILL.md)
- AI product: [`skills/ai-native/SKILL.md`](./skills/ai-native/SKILL.md)
- Devtool: [`skills/devtool-pro/SKILL.md`](./skills/devtool-pro/SKILL.md)
- Docs + pricing: [`skills/docs-pricing/SKILL.md`](./skills/docs-pricing/SKILL.md)
- Luxe landing: [`skills/luxe-landing/SKILL.md`](./skills/luxe-landing/SKILL.md)

### React Bits extension layer

- [`skills/component-intelligence/SKILL.md`](./skills/component-intelligence/SKILL.md) — source-neutral component decision layer
- [`skills/component-intelligence/catalog/source-matrix.json`](./skills/component-intelligence/catalog/source-matrix.json) — compact cross-library ownership matrix
- [`skills/component-intelligence/scripts/select-source.py`](./skills/component-intelligence/scripts/select-source.py) — low-context deterministic source selector
- [`skills/seven-design/scripts/resolve-context.py`](./skills/seven-design/scripts/resolve-context.py) — minimal Skill / Reference / Catalog resolver
- Public component and motion integration: [`skills/react-bits/SKILL.md`](./skills/react-bits/SKILL.md)
- Intelligent component selection protocol: [`skills/react-bits/references/selection-protocol.md`](./skills/react-bits/references/selection-protocol.md)
- React-default / Vue-secondary framework routing: [`skills/react-bits/references/framework-selection.md`](./skills/react-bits/references/framework-selection.md)
- Token-budget loading rules: [`skills/react-bits/references/token-budget.md`](./skills/react-bits/references/token-budget.md)
- Local pinned public catalog: [`skills/react-bits/catalog/README.md`](./skills/react-bits/catalog/README.md)
- Machine-readable selection matrix: [`skills/react-bits/catalog/selection-matrix.json`](./skills/react-bits/catalog/selection-matrix.json)
- Vue Bits selective public snapshot: [`skills/react-bits/catalog/vue/README.md`](./skills/react-bits/catalog/vue/README.md)
- Bundled public source snapshot and provenance: [`skills/react-bits/UPSTREAM.md`](./skills/react-bits/UPSTREAM.md)
- Find high-confidence animation opportunities: [`skills/find-animation-opportunities/SKILL.md`](./skills/find-animation-opportunities/SKILL.md)
- Audit existing motion and write implementation plans: [`skills/improve-animations/SKILL.md`](./skills/improve-animations/SKILL.md)
- Product-level motion composition bridge: [`skills/motion-review/SKILL.md`](./skills/motion-review/SKILL.md)
- Strict animation code review: [`skills/review-animations/SKILL.md`](./skills/review-animations/SKILL.md)
- Visual QA capture and evidence review: [`skills/visual-qa/SKILL.md`](./skills/visual-qa/SKILL.md)

## Preset to Brand Mapping

### `AI_NATIVE`

- Best brand references:
  - [`brands/runwayml.md`](./brands/runwayml.md)
  - [`brands/vercel.md`](./brands/vercel.md)
  - [`brands/stripe.md`](./brands/stripe.md)

### `DEVTOOL_PRO`

- Best brand references:
  - [`brands/vercel.md`](./brands/vercel.md)
  - [`brands/apple.md`](./brands/apple.md)
  - [`brands/stripe.md`](./brands/stripe.md)

### `AI_NATIVE` with backend flavor

- Best brand references:
  - [`brands/supabase.md`](./brands/supabase.md)
  - [`brands/vercel.md`](./brands/vercel.md)
  - [`brands/stripe.md`](./brands/stripe.md)

### `SAAS_WARM`

- Best brand references:
  - [`brands/notion.md`](./brands/notion.md)
  - [`brands/linear.md`](./brands/linear.md)
  - [`brands/apple.md`](./brands/apple.md)

### `LUXE_PERFORMANCE`

- Best brand references:
  - [`brands/tesla.md`](./brands/tesla.md)
  - [`brands/apple.md`](./brands/apple.md)

### `PRODUCTIZED_FRAMEWORK`

- Best brand references:
  - [`brands/vercel.md`](./brands/vercel.md)
  - [`brands/stripe.md`](./brands/stripe.md)
  - [`brands/linear.md`](./brands/linear.md)

## Archetype Suggestions

### For landing pages

- Start with [`archetypes/landing-hero.md`](./archetypes/landing-hero.md)

### For design frameworks or skill products

- Start with [`archetypes/framework-homepage.md`](./archetypes/framework-homepage.md)

### For technical products

- Start with [`archetypes/devtool-dashboard.md`](./archetypes/devtool-dashboard.md)

### For AI product interfaces

- Start with [`archetypes/ai-workspace.md`](./archetypes/ai-workspace.md)

### For documentation-heavy products

- Start with [`archetypes/docs-system.md`](./archetypes/docs-system.md)

### For commercial conversion flows

- Start with [`archetypes/pricing-page.md`](./archetypes/pricing-page.md)

## Component Suggestions

### Universal

- [`components/button.md`](./components/button.md)

### Commerce / pricing

- [`components/pricing-card.md`](./components/pricing-card.md)

### Data-heavy apps

- [`components/data-table.md`](./components/data-table.md)

### Keyboard-first tools

- [`components/command-palette.md`](./components/command-palette.md)

## Implementation Layer

- [`TOKENS.md`](./TOKENS.md)
- [`implementation/TAILWIND-THEME.md`](./implementation/TAILWIND-THEME.md)
- [`implementation/COMPONENT-MAPPING.md`](./implementation/COMPONENT-MAPPING.md)
- [`implementation/SHADCN-GUIDE.md`](./implementation/SHADCN-GUIDE.md)
- [`examples/theme.css`](./examples/theme.css)
- [`examples/tailwind.config.ts`](./examples/tailwind.config.ts)
- [`examples/globals.css`](./examples/globals.css)
- [`examples/button.tsx`](./examples/button.tsx)
- [`examples/card.tsx`](./examples/card.tsx)
- [`examples/dialog.tsx`](./examples/dialog.tsx)
- [`examples/command.tsx`](./examples/command.tsx)
- [`examples/pricing-card.tsx`](./examples/pricing-card.tsx)
- [`examples/input.tsx`](./examples/input.tsx)
- [`examples/tabs.tsx`](./examples/tabs.tsx)
- [`examples/table-shell.tsx`](./examples/table-shell.tsx)
- [`examples/sidebar-nav.tsx`](./examples/sidebar-nav.tsx)
- [`examples/hero-section.tsx`](./examples/hero-section.tsx)
- [`examples/utils.ts`](./examples/utils.ts)
- [`examples/shadcn-tokens.md`](./examples/shadcn-tokens.md)
- [`examples/components.json`](./examples/components.json)

## Expansion Priorities

Recommended next files:

- `brands/framer.md`
- `brands/cursor.md`
- `brands/airbnb.md`
- `archetypes/fintech-dashboard.md`
- `archetypes/changelog-system.md`
- `components/metric-card.md`
- `components/sidebar-nav.md`
- `components/hero-media-stage.md`

## Component Intelligence

- Start with the product job, not a component library name.
- Resolve React by default; choose Vue only when the user says Vue / Nuxt, the host project establishes Vue, or one clarification resolves the ambiguity.
- Assign foundation, behavior, and expression separately. `shadcn`, `Radix`, Bits, and the host system are composable ownership layers.
- Reject expressive Bits motion for dense, high-frequency data surfaces unless it explains a real state or relationship.
- Return the normalized brief, ownership plan, rejected alternatives, static fallback, provenance, dependencies, and review path.
- Keep the local matrix as the default context and use narrow registry search only after the product decision.

## Motion System

- Keep the existing visual dials and choose a motion tier per surface: `micro`, `system`, or `signature`.
- Route public React Bits component sourcing through [`skills/react-bits/SKILL.md`](./skills/react-bits/SKILL.md) only after the expression decision.
- Prefer the local pinned catalog and inspect the materialized source before using an external public registry path.
- Treat component choice as a product decision: return the normalized brief, recommendation, rejected alternatives, and static fallback.
- Keep catalogs lazy: load compact metadata first, then only the selected source files.
- Use [`skills/find-animation-opportunities/SKILL.md`](./skills/find-animation-opportunities/SKILL.md) to decide where motion earns its place, and [`skills/improve-animations/SKILL.md`](./skills/improve-animations/SKILL.md) to audit existing motion and produce plans.
- Run [`skills/motion-review/SKILL.md`](./skills/motion-review/SKILL.md) for product-level composition before handoff.
- Run [`skills/review-animations/SKILL.md`](./skills/review-animations/SKILL.md) when animation code changes.
- Do not claim that React Bits runtime source or Pro material is present unless the project actually provides it.

## Quality Loop

- Run [`benchmarks/run-benchmarks.py`](./benchmarks/run-benchmarks.py) after changing Component Intelligence or source matrices.
- Use [`skills/visual-qa/SKILL.md`](./skills/visual-qa/SKILL.md) for runnable UI screenshot evidence.
- Use [`skills/seven-design/scripts/resolve-context.py`](./skills/seven-design/scripts/resolve-context.py) to keep context proportional to the task.
