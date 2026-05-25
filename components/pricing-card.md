# Component Recipe: Pricing Card

- Base library: `shadcn/ui`
- Role: compare plans while guiding attention toward a single recommendation
- Density mode: medium
- Radius: `20-24px`
- Border behavior: clear but soft; highlighted plan may use brighter border or subtle glow
- Shadow behavior: low in dark mode, gentle raise in light mode
- Hover behavior: slight elevation or border emphasis only
- Focus behavior: clear ring on CTA and interactive toggles
- Disabled behavior: de-emphasize unavailable plan states without collapsing readability
- Motion behavior: `--motion-base`, with optional reveal stagger for plan grid
- Accessibility notes: plan differences should not rely on color alone

## Token Mapping

- Background: `card`
- Foreground: `foreground`
- Border: `border`
- Accent: `primary` reserved for recommended plan
- Ring: `ring`

## Variants

- Default: equal hierarchy across non-featured plans
- Compact: smaller B2B price comparison blocks
- Highlighted: one recommended plan with spotlight treatment
- Destructive: not applicable

## Usage Rules

- Use when: the product has multiple plans, usage tiers, or seat structures
- Avoid when: pricing complexity is better explained in table or calculator format
