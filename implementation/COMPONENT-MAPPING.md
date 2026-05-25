# COMPONENT-MAPPING.md

## Purpose

This file defines how the design system should be applied across `shadcn/ui`, `radix ui`, `ant-design`, and legacy `elementui` surfaces.

Use this as the implementation contract when moving from design rules to component code.

---

## 1. Base Ownership

### `shadcn/ui`

Owns:

- buttons
- inputs
- cards
- dialogs
- sheets
- tabs
- empty states
- settings shells
- auth surfaces

### `radix ui`

Owns:

- dialog primitives
- popovers
- dropdown menus
- switches
- hover cards
- tooltips
- focus management

### `ant-design`

Owns:

- advanced tables
- form-heavy enterprise modules
- filters
- pickers
- tree controls
- data-dense workflows

### `elementui`

Owns only:

- legacy administrative interfaces
- inherited systems that cannot be migrated yet

---

## 2. Shared Styling Contract

Every library must inherit:

- shared semantic colors
- shared font families
- shared radius scale
- shared border contrast
- shared motion timings
- shared focus ring behavior

If a component violates the system visually, it must be skinned or wrapped.

---

## 3. `shadcn/ui` Mapping

### Buttons

- default action: `primary`
- secondary action: `secondary`
- ghost action: transparent with strong hover background
- destructive action: semantic `danger`

### Cards

- use `card` + `card-foreground`
- large featured cards may use contextual border or glow tokens

### Inputs

- default input border should use `input`
- focus uses `ring`
- placeholder should always be lower emphasis than content text

### Dialogs / Sheets

- surface should use `card` or `popover`
- border should remain visible in dark mode

---

## 4. `radix ui` Mapping

### Tooltips

- compact surface
- stronger contrast than background
- short motion

### Dropdown Menus

- use `popover` surface
- highlight active item with `accent`
- preserve keyboard visibility at all times

### Hover Cards / Popovers

- allow richer content than tooltips
- do not over-style with glow unless in hero/showcase context

---

## 5. `ant-design` Mapping

### Tables

- replace stock blue active states with `primary`
- simplify row hover to shared contextual token
- reduce header chrome
- align type with `font-sans` and `font-mono` where needed

### Forms

- normalize label spacing
- reduce legacy visual heaviness
- remap validation, focus, and active colors to semantic roles

### Buttons

- do not use unmodified Ant default buttons next to `shadcn/ui` buttons
- wrap or override variants to match the same radius, ring, and typography

### Data Entry / Picker Controls

- consistent radius
- no stock shadows
- align popup surfaces with `popover`

---

## 6. `elementui` Mapping

- use only in constrained legacy contexts
- wrap screens with modern shell tokens
- normalize typography and spacing first
- restyle primary actions and table headers immediately
- prevent the legacy visual language from leaking into new modules

---

## 7. Page-Type Mapping

### Marketing

- core: custom sections + `shadcn/ui`
- enhancement: `reactbits` and selected `21st.dev` inspired patterns

### Product App

- core: `shadcn/ui` + `radix ui`
- enhancement: `ant-design` for dense workflows

### Enterprise Console

- core: `shadcn/ui` shell + `ant-design` data components
- enhancement: custom charts and compact filters

### Legacy Admin

- core: wrapped `elementui`
- enhancement: gradual migration toward shared tokens and shells

---

## 8. QA Checklist

- Do all components resolve to semantic tokens?
- Are focus rings consistent across libraries?
- Do dark surfaces share the same neutral family?
- Are button radii and text styles visually aligned across libraries?
- Are tables, dialogs, and menus clearly part of the same product?
