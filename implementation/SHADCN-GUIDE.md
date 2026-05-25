# SHADCN-GUIDE.md

## Purpose

This guide defines how `shadcn/ui` should be used inside this design system.

It is the preferred application-layer component system for most new interfaces.

---

## 1. Default Position

Use `shadcn/ui` as the default choice for:

- app shells
- forms
- settings
- onboarding
- dialogs
- command flows
- auth
- marketing support components

---

## 2. Styling Rules

- map all colors to semantic tokens
- do not ship default component colors unreviewed
- keep radius aligned with the page density
- avoid oversoft shadows in dark themes
- preserve strong contrast on primary actions

---

## 3. Variant Rules

### Buttons

- one strong primary per local context
- secondary buttons should remain clearly subordinate
- ghost buttons should still have deliberate hover feedback

### Cards

- default cards are neutral containers, not decorative objects
- featured cards may use contextual tokens sparingly

### Inputs

- prompt boxes can be richer than standard form inputs
- standard inputs should stay calm and compact

### Tabs

- active state should be crisp, never ambiguous
- use pills for softer SaaS and flat indicators for technical surfaces

---

## 4. Motion Rules

- use `--motion-fast` or `--motion-base`
- avoid spring-heavy defaults unless the product is motion-led
- hover should clarify affordance, not show off animation

---

## 5. When Not to Use It Alone

Use `ant-design` alongside `shadcn/ui` when:

- table complexity grows large
- filters become operationally dense
- enterprise forms need richer control sets

Use custom sections alongside it when:

- building cinematic hero surfaces
- designing brand campaigns
- creating media-dominant product showcases

---

## 6. Starter Files

Reference starter artifacts:

- [`examples/button.tsx`](../examples/button.tsx)
- [`examples/card.tsx`](../examples/card.tsx)
- [`examples/dialog.tsx`](../examples/dialog.tsx)
- [`examples/command.tsx`](../examples/command.tsx)
- [`examples/pricing-card.tsx`](../examples/pricing-card.tsx)
- [`examples/input.tsx`](../examples/input.tsx)
- [`examples/tabs.tsx`](../examples/tabs.tsx)
- [`examples/table-shell.tsx`](../examples/table-shell.tsx)
- [`examples/sidebar-nav.tsx`](../examples/sidebar-nav.tsx)
- [`examples/hero-section.tsx`](../examples/hero-section.tsx)
- [`examples/utils.ts`](../examples/utils.ts)
- [`examples/shadcn-tokens.md`](../examples/shadcn-tokens.md)
- [`examples/globals.css`](../examples/globals.css)
- [`examples/tailwind.config.ts`](../examples/tailwind.config.ts)
- [`examples/components.json`](../examples/components.json)
