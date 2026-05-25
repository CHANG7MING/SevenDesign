# Component Recipe: Command Palette

- Base library: `radix ui` dialog primitives with `shadcn/ui` command patterns
- Role: keyboard-first navigation, action dispatch, search, and automation entry
- Density mode: medium
- Radius: `20px`
- Border behavior: subtle, with strong contrast against background surface
- Shadow behavior: one elevated modal shadow or dark overlay separation
- Hover behavior: active item highlight should be immediate and keyboard-synced
- Focus behavior: search input and active option must remain unmistakable
- Disabled behavior: unavailable actions should still explain themselves if shown
- Motion behavior: `--motion-base` open/close, no theatrical transforms
- Accessibility notes: support keyboard navigation, escape close, and semantic group labels

## Token Mapping

- Background: `popover`
- Foreground: `popover-foreground`
- Border: `border`
- Accent: `accent` for active row
- Ring: `ring`

## Variants

- Default: global search and action palette
- Compact: lightweight switcher inside a scoped tool
- Highlighted: AI-first palette with richer previews or suggested actions
- Destructive: only for clearly labeled irreversible commands

## Usage Rules

- Use when: the product has enough commands, routes, entities, or AI actions to benefit from keyboard speed
- Avoid when: the product is too simple to justify an extra interaction paradigm
