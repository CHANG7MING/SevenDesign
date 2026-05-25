# shadcn Token Mapping Example

## Purpose

This file shows how the design system tokens should inform a typical `shadcn/ui` setup.

## Base Expectations

- `globals.css` should expose the CSS variables from [`theme.css`](./theme.css) or [`globals.css`](./globals.css)
- Tailwind should map semantic names through [`tailwind.config.ts`](./tailwind.config.ts)
- `shadcn/ui` components should consume semantic utilities only

## Class Intent Examples

### Button

- default: `bg-primary text-primary-foreground shadow-elev-1 hover:opacity-95`
- secondary: `bg-secondary text-secondary-foreground hover:bg-muted`
- ghost: `hover:bg-muted hover:text-foreground`
- destructive: `bg-danger text-danger-foreground hover:opacity-95`

### Card

- base: `bg-card text-card-foreground border border-border rounded-xl shadow-elev-1`
- featured: `border-spotlight-border shadow-glow-blue`

### Dialog

- content: `bg-popover text-popover-foreground border border-border rounded-2xl shadow-elev-3`

### Input

- base: `bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-ring`

### Tabs

- list: `bg-muted border border-border rounded-xl`
- trigger-active: `bg-card text-foreground shadow-elev-1`

### Command Palette

- shell: `bg-popover text-popover-foreground border border-border shadow-elev-3`
- active item: `bg-accent text-accent-foreground`

### Pricing Card

- base: `bg-card text-card-foreground border border-border rounded-2xl`
- featured: `border-spotlight-border shadow-glow-blue`

### Sidebar Nav

- shell: `bg-sidebar border border-border rounded-2xl`
- active item: `bg-card text-foreground shadow-elev-1`

### Hero Section

- shell: `border-spotlight-border shadow-glow-blue`
- stage overlay: `bg-hero-surface`

## Rule

If a `shadcn/ui` component needs a raw hex value, the token layer is missing something and should be extended first.
