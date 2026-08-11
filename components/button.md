# Component Recipe: Button

- Base library: `shadcn/ui`
- Role: primary action, secondary action, tertiary utility, destructive confirmation
- Density mode: compact or standard
- Radius: `12px` default, `999px` only in soft SaaS or campaign contexts
- Border behavior: subtle on ghost and secondary variants, invisible on strong primary
- Shadow behavior: minimal; emphasis comes from contrast before elevation
- Hover behavior: brighter contrast or stronger surface separation, never only scale; gate hover-only motion to hover-capable pointers
- Press behavior: respond immediately on pointer-down; use a subtle `scale(0.97)` when it fits the component personality
- Focus behavior: crisp branded ring using shared token system
- Disabled behavior: lower contrast and lower emphasis without reducing legibility too far
- Motion behavior: `--motion-fast`; animate the exact property, never `transition: all`
- Accessibility notes: text labels must remain explicit; icon-only buttons require clear aria labels

## Token Mapping

- Background: `primary`, `secondary`, `muted`, or transparent
- Foreground: `primary-foreground` or `foreground`
- Border: `border`
- Accent: optional highlight or active state
- Ring: `ring`

## Variants

- Default: strongest contrast, reserved for one primary action in local context
- Compact: reduced padding for toolbars and tables
- Highlighted: use on hero or pricing spotlight surfaces only
- Destructive: use semantic red, never the default global accent

## Usage Rules

- Use when: the user needs a clear next step or explicit confirmation
- Avoid when: text links or segmented controls better fit the information architecture
