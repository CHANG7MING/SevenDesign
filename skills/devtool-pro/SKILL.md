---
name: devtool-pro
description: Design, build, or review developer tools, infrastructure consoles, API products, observability interfaces, technical dashboards, and dense operational workflows with SevenDesign. Use when scan speed, keyboard efficiency, reliable data states, code or logs, and restrained high-density interaction matter more than marketing spectacle.
---

# Devtool Pro

Use this skill with [`../design-core/SKILL.md`](../design-core/SKILL.md). Follow the core workflow, then apply these defaults.

## Load

- [`../../presets/DEVTOOL-PRO.md`](../../presets/DEVTOOL-PRO.md)
- [`../../archetypes/devtool-dashboard.md`](../../archetypes/devtool-dashboard.md) or [`../../archetypes/docs-system.md`](../../archetypes/docs-system.md)
- one dominant brand reference from Vercel, Supabase, or Linear in [`../../brands/`](../../brands)
- [`../../components/data-table.md`](../../components/data-table.md) and [`../../components/command-palette.md`](../../components/command-palette.md) when relevant

## Defaults

- density: medium to high
- warmth: cool
- layout variance: controlled
- motion: low

## Product requirements

- Optimize for scan speed, comparison, keyboard use, and state clarity.
- Keep identifiers, timestamps, statuses, environments, and destructive scopes unambiguous.
- Treat loading, empty, partial, degraded, stale, and permission-denied states as first-class.
- Use progressive disclosure for advanced configuration; retain nearby context while drilling down.
- Keep code, logs, tables, and charts readable without wrapping every datum in a card.
- Remove animation from command palettes and other high-frequency keyboard actions. Use immediate selection and focus feedback.

## React Bits fit

Load [`../react-bits/SKILL.md`](../react-bits/SKILL.md) only when a small public component makes a technical state easier to read, such as a restrained panel transition, live status change, or empty-to-active shift. Prefer `micro` or restrained `system` motion. Run [`../motion-review/SKILL.md`](../motion-review/SKILL.md) and the strict [`../review-animations/SKILL.md`](../review-animations/SKILL.md) review for motion that affects tables, logs, forms, navigation, or alerts.

## Avoid

- marketing-scale typography inside operational screens
- low-information dashboards made from oversized metric cards
- motion that delays navigation, filtering, or command execution
- looping background effects, scroll spectacle, or large reveal sequences in data-heavy surfaces
- raw third-party component styling that breaks the shared token system
