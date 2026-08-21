---
name: docs-pricing
description: Design, build, or review documentation sites, help centers, onboarding guides, changelogs, pricing pages, plan comparison, and conversion flows with SevenDesign. Use when reading comfort, discoverability, trust, plan comprehension, responsive comparison, and calm conversion design are the primary goals.
---

# Docs and Pricing

Use this skill with [`../design-core/SKILL.md`](../design-core/SKILL.md). Follow the core workflow, then apply these defaults.

## Load

- the `SAAS_WARM` direction in [`../../DESIGN.md`](../../DESIGN.md)
- [`../../archetypes/docs-system.md`](../../archetypes/docs-system.md) or [`../../archetypes/pricing-page.md`](../../archetypes/pricing-page.md)
- [`../../components/pricing-card.md`](../../components/pricing-card.md) for pricing work
- one dominant brand reference: Notion or Linear in [`../../brands/`](../../brands)

## Defaults

- density: medium for docs, low to medium for pricing
- warmth: warm
- layout variance: safe
- motion: low

## Product requirements

- Optimize docs for navigation, search, readable measure, stable anchors, and copyable examples.
- Keep version, platform, prerequisites, and next steps visible where they affect success.
- Make pricing easy to compare without requiring hover, animation, or mental arithmetic.
- State billing period, currency, limits, overages, eligibility, and feature differences explicitly.
- Preserve comparison semantics on mobile; use grouped rows or plan selectors instead of shrinking tables into illegibility.
- Use motion only to preserve context in disclosure and navigation.

## React Bits fit

Load [`../react-bits/SKILL.md`](../react-bits/SKILL.md) for a focused hero, plan emphasis, progressive disclosure, or onboarding transition. Prefer `micro` or restrained `system` motion. Never make reading surfaces continuously move, and keep reduced motion equivalent in content, state, and hierarchy.

## Avoid

- overdesigned documentation chrome
- “most popular” styling that obscures objective comparison
- hidden fees, ambiguous units, decorative checkmark walls, and forced annual-price framing
- animated reading surfaces or scroll effects that disturb anchors
