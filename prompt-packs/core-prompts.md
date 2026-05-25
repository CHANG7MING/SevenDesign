# Core Prompts

Copy these directly into your AI workflow.

## Prompt: AI SaaS Landing + App Shell

```text
Use the attached DESIGN.md library as the system source of truth.

Goal:
Build an AI-native SaaS experience with a premium landing page and a matching in-product workspace.

Requirements:
- Follow DESIGN.md and TOKENS.md
- Use the AI_NATIVE preset
- Blend RunwayML + Vercel + Supabase influences
- Use Tailwind CSS + shadcn/ui + radix ui
- The hero should feel cinematic but controlled
- The inner app should feel structured, technical, and believable
- Reuse the visual DNA between hero and internal workspace
- Avoid generic SaaS templates

Page requirements:
- landing hero
- proof section
- product showcase
- AI workspace shell
- pricing section

Implementation requirements:
- use semantic tokens only
- use the starter patterns from examples/tailwind.config.ts and examples/globals.css
```

## Prompt: Devtool Dashboard

```text
Use the attached DESIGN.md library as the system source of truth.

Goal:
Build a developer-facing product shell for a backend or infra platform.

Requirements:
- Follow DESIGN.md and TOKENS.md
- Use the DEVTOOL_PRO preset
- Blend Vercel + Supabase + Linear influence
- Use Tailwind CSS + shadcn/ui + radix ui
- Use ant-design style density only where needed, but keep the visual language unified
- Prioritize scan speed, compact information layout, and keyboard-friendly interaction

Page requirements:
- top navigation
- sidebar navigation
- metrics row
- filters
- table shell
- details panel
```

## Prompt: Docs + Pricing Site

```text
Use the attached DESIGN.md library as the system source of truth.

Goal:
Build a docs-first product site with a connected pricing experience.

Requirements:
- Follow DESIGN.md and TOKENS.md
- Use a SAAS_WARM direction
- Blend Notion + Linear + Stripe influence
- Use Tailwind CSS + shadcn/ui
- Optimize for readability, trust, and calm conversion

Page requirements:
- docs home
- docs article layout
- pricing page
- FAQ section
- CTA footer
```
