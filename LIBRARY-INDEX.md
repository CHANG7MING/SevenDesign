# LIBRARY-INDEX

## Purpose

This file maps the relationship between the root design contract, presets, brand recipes, page archetypes, and component recipes.

Use it as the quickest entry point when deciding what to apply to a new product or page.

## Flow

1. Start with [`START-HERE.md`](./START-HERE.md)
2. Choose a guided path from [`quickstart/`](./quickstart)
3. Pick a starter kit from [`starter-kits/`](./starter-kits)
4. Use prompts from [`prompt-packs/`](./prompt-packs) or code from [`examples/`](./examples)
5. Read [`DESIGN.md`](./DESIGN.md) and [`TOKENS.md`](./TOKENS.md) when you need deeper control
6. Blend in presets, brands, archetypes, components, and implementation guides as needed

## Fastest Entry Points

- New user: [`START-HERE.md`](./START-HERE.md)
- Pick a direction: [`quickstart/CHOOSE-YOUR-STACK.md`](./quickstart/CHOOSE-YOUR-STACK.md)
- Use with AI: [`quickstart/USE-WITH-AI.md`](./quickstart/USE-WITH-AI.md)
- Use in a real project: [`quickstart/USE-IN-PROJECT.md`](./quickstart/USE-IN-PROJECT.md)
- Use as a workflow: [`WORKFLOW.md`](./WORKFLOW.md)
- Check quality: [`PRE-FLIGHT-CHECKLIST.md`](./PRE-FLIGHT-CHECKLIST.md)
- Apply guardrails: [`FORBIDDEN-PATTERNS.md`](./FORBIDDEN-PATTERNS.md)

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
