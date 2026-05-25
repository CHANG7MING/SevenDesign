# TAILWIND-THEME.md

## Purpose

This file explains how to map the semantic tokens from [`TOKENS.md`](../TOKENS.md) into a Tailwind-driven application.

The goal is:

- one token source
- multiple UI libraries
- minimal visual drift

---

## 1. Recommended Theme Strategy

### 1.1 Use CSS variables as the source

Define all semantic tokens as CSS variables in:

- `:root`
- `.dark`
- optional `.graphite`
- optional `.warm-light`

### 1.2 Bind Tailwind colors to semantic variables

Tailwind should reference semantic names rather than raw hex values.

Recommended color keys:

- `background`
- `foreground`
- `card`
- `card-foreground`
- `popover`
- `popover-foreground`
- `primary`
- `primary-foreground`
- `secondary`
- `secondary-foreground`
- `muted`
- `muted-foreground`
- `accent`
- `accent-foreground`
- `success`
- `warning`
- `danger`
- `info`
- `border`
- `input`
- `ring`

---

## 2. Recommended Tailwind Extensions

Add custom theme scales for:

- border radius
- shadows
- font families
- font sizes
- transition timing
- keyframes and animation aliases

### 2.1 Recommended Font Families

- `font-display`
- `font-sans`
- `font-mono`

### 2.2 Recommended Radius Keys

- `sm`
- `md`
- `lg`
- `xl`
- `2xl`

### 2.3 Recommended Shadow Keys

- `elev-1`
- `elev-2`
- `elev-3`
- `glow-blue`
- `glow-emerald`

---

## 3. Theme Usage Rules

- Use `bg-background text-foreground` at page root
- Use `bg-card text-card-foreground` for cards, panels, and modals
- Use `border-border` consistently
- Use `text-muted-foreground` for secondary content
- Use `bg-primary text-primary-foreground` for dominant actions
- Use semantic status colors instead of accent improvisation

---

## 4. Hero and Showcase Rules

Hero sections may use:

- gradient backgrounds
- blur-backed overlays
- spotlight glows
- animated masks

But the implementation should still resolve to shared variables or approved contextual tokens:

- `--hero-surface`
- `--hero-glow`
- `--spotlight-border`

---

## 5. Example Starter Files

Concrete starter files are included in:

- [`examples/tailwind.config.ts`](../examples/tailwind.config.ts)
- [`examples/globals.css`](../examples/globals.css)
- [`examples/theme.css`](../examples/theme.css)
- [`examples/shadcn-tokens.md`](../examples/shadcn-tokens.md)

---

## 6. Common Failure Modes

- binding Tailwind directly to raw hex values instead of semantic variables
- using a dark homepage token set and a different dashboard token set
- letting `ant-design` or `elementui` ship their stock colors unmodified
- mixing multiple accent colors without a clear primary role
