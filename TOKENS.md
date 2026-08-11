# TOKENS.md

## Purpose

This file translates the design intent from [`DESIGN.md`](./DESIGN.md) into implementation-facing semantic tokens.

These tokens are the single source of truth for:

- `tailwindcss`
- `shadcn/ui`
- `radix ui`
- `ant-design`
- custom components
- marketing surfaces
- product interiors

Use semantic tokens rather than hardcoded hex values in component code.

---

## 1. Token Layers

The token system has four layers:

### 1.1 Primitive Tokens

Raw colors, spacing units, radii, motion durations, and shadow recipes.

### 1.2 Semantic Tokens

Product-facing names such as:

- `background`
- `foreground`
- `card`
- `primary`
- `border`
- `ring`
- `success`
- `warning`
- `danger`

### 1.3 Contextual Tokens

Context-specific aliases for:

- `hero-surface`
- `sidebar-surface`
- `table-header`
- `code-surface`
- `chart-grid`
- `spotlight-border`

### 1.4 Brand / Mode Overrides

Theme-level changes for:

- `dark`
- `light`
- `graphite`
- `warm-light`

---

## 2. Primitive Color Tokens

### 2.1 Neutral Primitives

| Token | Hex |
|---|---|
| `--gray-0` | `#FFFFFF` |
| `--gray-25` | `#FCFCFD` |
| `--gray-50` | `#F9FAFB` |
| `--gray-100` | `#F3F4F6` |
| `--gray-200` | `#E5E7EB` |
| `--gray-300` | `#D1D5DB` |
| `--gray-400` | `#9CA3AF` |
| `--gray-500` | `#6B7280` |
| `--gray-600` | `#4B5563` |
| `--gray-700` | `#374151` |
| `--gray-800` | `#1F2937` |
| `--gray-900` | `#111827` |
| `--gray-950` | `#0B1020` |
| `--black` | `#05070A` |

### 2.2 Accent Primitives

| Token | Hex |
|---|---|
| `--emerald-500` | `#10B981` |
| `--blue-500` | `#3B82F6` |
| `--purple-500` | `#8B5CF6` |
| `--coral-500` | `#F97360` |
| `--yellow-400` | `#FACC15` |
| `--red-500` | `#EF4444` |
| `--sky-500` | `#0EA5E9` |
| `--pink-500` | `#EC4899` |

### 2.3 Semantic Feedback Primitives

| Token | Hex |
|---|---|
| `--success-500` | `#22C55E` |
| `--warning-500` | `#F59E0B` |
| `--danger-500` | `#EF4444` |
| `--info-500` | `#3B82F6` |

---

## 3. Semantic Color Tokens

These are the tokens components should consume.

### 3.1 Shared Semantic Roles

| Token | Dark | Light |
|---|---|---|
| `--background` | `#05070A` | `#F7F7F5` |
| `--foreground` | `#F9FAFB` | `#111827` |
| `--card` | `#0B1020` | `#FFFFFF` |
| `--card-foreground` | `#F9FAFB` | `#111827` |
| `--popover` | `#111827` | `#FFFFFF` |
| `--popover-foreground` | `#F9FAFB` | `#111827` |
| `--muted` | `#111827` | `#F3F4F6` |
| `--muted-foreground` | `#D1D5DB` | `#6B7280` |
| `--border` | `#1F2937` | `#E5E7EB` |
| `--input` | `#1F2937` | `#E5E7EB` |
| `--ring` | `#3B82F6` | `#3B82F6` |

### 3.2 Action Roles

| Token | Default |
|---|---|
| `--primary` | `#10B981` |
| `--primary-foreground` | `#05070A` |
| `--primary-soft` | `rgba(16,185,129,0.12)` |
| `--secondary` | `#111827` |
| `--secondary-foreground` | `#F9FAFB` |
| `--accent` | `#8B5CF6` |
| `--accent-foreground` | `#FFFFFF` |

### 3.3 Status Roles

| Token | Default |
|---|---|
| `--success` | `#22C55E` |
| `--success-foreground` | `#03130A` |
| `--warning` | `#F59E0B` |
| `--warning-foreground` | `#1F1300` |
| `--danger` | `#EF4444` |
| `--danger-foreground` | `#FFFFFF` |
| `--info` | `#3B82F6` |
| `--info-foreground` | `#FFFFFF` |

---

## 4. Context Tokens

Use these when plain semantic roles are not expressive enough.

| Token | Dark | Light | Use |
|---|---|---|---|
| `--hero-surface` | `rgba(17,24,39,0.72)` | `rgba(255,255,255,0.72)` | landing hero overlays |
| `--hero-glow` | `rgba(59,130,246,0.18)` | `rgba(59,130,246,0.10)` | premium highlight blocks |
| `--sidebar-surface` | `#0B1020` | `#FCFCFD` | persistent app navigation |
| `--code-surface` | `#0A0F1C` | `#F3F4F6` | code blocks and mono surfaces |
| `--table-header` | `#111827` | `#F9FAFB` | dense table headers |
| `--table-row-hover` | `rgba(255,255,255,0.04)` | `rgba(17,24,39,0.04)` | data table hover |
| `--spotlight-border` | `rgba(255,255,255,0.12)` | `rgba(17,24,39,0.10)` | featured cards |
| `--chart-grid` | `rgba(255,255,255,0.08)` | `rgba(17,24,39,0.08)` | chart gridlines |

---

## 5. Typography Tokens

### 5.1 Font Families

| Token | Value |
|---|---|
| `--font-display` | `"Space Grotesk", "Sora", "General Sans", sans-serif` |
| `--font-sans` | `"Inter", "Geist", "Manrope", sans-serif` |
| `--font-mono` | `"JetBrains Mono", "IBM Plex Mono", "Geist Mono", monospace` |

### 5.2 Type Scale

| Token | Value |
|---|---|
| `--text-display-xl` | `clamp(4rem, 6vw, 5.5rem)` |
| `--text-display-lg` | `clamp(3rem, 5vw, 4rem)` |
| `--text-display-md` | `clamp(2.25rem, 4vw, 3rem)` |
| `--text-title-lg` | `2rem` |
| `--text-title-md` | `1.5rem` |
| `--text-body-lg` | `1.125rem` |
| `--text-body-md` | `1rem` |
| `--text-body-sm` | `0.875rem` |
| `--text-caption` | `0.75rem` |
| `--text-mono-sm` | `0.8125rem` |

### 5.3 Font Weights

| Token | Value |
|---|---|
| `--weight-regular` | `400` |
| `--weight-medium` | `500` |
| `--weight-semibold` | `600` |
| `--weight-bold` | `700` |

---

## 6. Spacing Tokens

| Token | Value |
|---|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |
| `--space-10` | `40px` |
| `--space-12` | `48px` |
| `--space-16` | `64px` |
| `--space-20` | `80px` |
| `--space-24` | `96px` |
| `--space-32` | `128px` |

---

## 7. Radius Tokens

| Token | Value |
|---|---|
| `--radius-xs` | `8px` |
| `--radius-sm` | `12px` |
| `--radius-md` | `16px` |
| `--radius-lg` | `20px` |
| `--radius-xl` | `24px` |
| `--radius-2xl` | `32px` |
| `--radius-pill` | `999px` |

---

## 8. Shadow Tokens

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.16)` |
| `--shadow-md` | `0 8px 24px rgba(0,0,0,0.18)` |
| `--shadow-lg` | `0 20px 60px rgba(0,0,0,0.24)` |
| `--shadow-glow-blue` | `0 0 0 1px rgba(59,130,246,0.20), 0 20px 60px rgba(59,130,246,0.18)` |
| `--shadow-glow-emerald` | `0 0 0 1px rgba(16,185,129,0.20), 0 20px 60px rgba(16,185,129,0.18)` |

In dark themes, prefer borders and subtle glow over exaggerated shadows.

---

## 9. Motion Tokens

| Token | Value |
|---|---|
| `--motion-fast` | `120ms` |
| `--motion-base` | `220ms` |
| `--motion-slow` | `420ms` |
| `--motion-hero` | `900ms` |
| `--ease-standard` | `cubic-bezier(0.23, 1, 0.32, 1)` |
| `--ease-out` | `cubic-bezier(0.23, 1, 0.32, 1)` |
| `--ease-move` | `cubic-bezier(0.77, 0, 0.175, 1)` |
| `--ease-drawer` | `cubic-bezier(0.32, 0.72, 0, 1)` |

---

## 10. Theme Modes

### 10.1 `dark`

- Default for AI, developer, backend, and media-heavy products
- High contrast foreground
- Low-noise surfaces
- Accent-driven focus

### 10.2 `light`

- Default for docs, editorial, onboarding, and friendly SaaS
- Warm white surfaces
- Lower visual intensity
- Cleaner border definition

### 10.3 `graphite`

- A premium dark neutral mode between pure black and standard dark
- Better for luxury, enterprise, or less cinematic products

### 10.4 `warm-light`

- For productivity, editorial, and approachable SaaS products
- Slight paper-like warmth instead of sterile white

---

## 11. Token Rules

- Never hardcode component colors when a semantic token exists
- Brand accents should override `primary` and optionally `accent`, not the entire palette
- Table, chart, code, and hero surfaces may use context tokens
- Only hero and showcase sections should use glow-heavy highlight tokens
- Destructive actions must always use semantic danger tokens, never the brand accent

---

## 12. Recommended Output

A production implementation should expose these tokens through:

- CSS variables in `:root` and `.dark`
- Tailwind theme bindings
- shadcn component styles
- third-party library overrides

See:

- [`implementation/TAILWIND-THEME.md`](./implementation/TAILWIND-THEME.md)
- [`implementation/COMPONENT-MAPPING.md`](./implementation/COMPONENT-MAPPING.md)
- [`examples/theme.css`](./examples/theme.css)
