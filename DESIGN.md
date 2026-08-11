# DESIGN.md

## 1. Overview

This `DESIGN.md` defines an extensible, multi-brand design system for modern AI products, developer tools, data platforms, SaaS products, creative tooling, fintech experiences, media interfaces, and premium consumer brands.

It is not a clone of any single company. It is a composable design library that synthesizes signals from:

- AI & LLM platforms: Claude, Cohere, ElevenLabs, Minimax, Mistral AI, Ollama, OpenCode AI, Replicate, RunwayML, Together AI, VoltAgent, xAI
- Developer tools & IDEs: Cursor, Expo, Lovable, Raycast, Superhuman, Vercel, Warp
- Backend, database & DevOps: ClickHouse, Composio, HashiCorp, MongoDB, PostHog, Sanity, Sentry, Supabase
- SaaS & productivity: Cal.com, Intercom, Linear, Mintlify, Notion, Resend, Zapier
- Design & creative tools: Airtable, Clay, Figma, Framer, Miro, Webflow
- Fintech, consumer, media & automotive: Binance, Coinbase, Kraken, Mastercard, Revolut, Stripe, Wise, Airbnb, Meta, Nike, Shopify, Starbucks, Apple, IBM, NVIDIA, Pinterest, PlayStation, SpaceX, Spotify, The Verge, Uber, Vodafone, WIRED, BMW, Bugatti, Ferrari, Lamborghini, Renault, Tesla

This system should feel:

- Intentional, premium, and contemporary
- Product-led rather than template-led
- Capable of moving between dark technical UI, light editorial UI, and high-contrast marketing UI
- Structured enough for enterprise tools, but expressive enough for cinematic homepages

This system is designed to work with:

- `tailwindcss` as the token and utility runtime
- `shadcn/ui` as the default application component layer
- `radix ui` as the primitive accessibility layer
- `ant-design` for dense enterprise workflows and complex data-heavy modules
- `elementui` for legacy admin-like workflows when required
- `reactbits` and selected `21st.dev` patterns for hero sections, motion, showcase modules, and experimental interaction blocks

---

## 2. Design Goal

Build interfaces that combine:

- `Vercel` / `Linear` / `Apple` clarity
- `Stripe` / `Framer` / `RunwayML` motion and presentation polish
- `Supabase` / `Cursor` / `Warp` developer credibility
- `Notion` / `Airbnb` / `Mastercard` warmth and readability
- `Figma` / `Spotify` / `The Verge` brand confidence
- `Ferrari` / `Lamborghini` / `Tesla` product drama when needed

The output should never feel like generic SaaS boilerplate. It should feel curated, controlled, and brand-aware.

---

## 3. System Architecture

This library has four layers:

### 3.1 Foundation Layer

Defines tokens and universal rules:

- color roles
- typography scale
- spacing and layout rhythm
- radius and border language
- shadows and surface hierarchy
- motion timing and reveal patterns

### 3.2 Flavor Layer

Adds brand character through selectable modes:

- `Editorial Minimal`
- `Developer Dark`
- `Cinematic Future`
- `Friendly SaaS`
- `Data Dense Enterprise`
- `Luxury Performance`

Every page should choose one primary flavor and at most one supporting flavor.

### 3.3 Pattern Layer

Defines reusable page archetypes:

- marketing hero
- framework homepage
- product showcase
- dashboard
- docs
- workspace
- pricing
- onboarding
- changelog
- media grid
- case study

### 3.4 Extension Layer

Allows future additions without rewriting the system:

- new brand recipe
- new component recipe
- new industry mode
- new motion pack
- new page archetype

---

## 4. Core Principles

### 4.1 Premium by Restraint

Use fewer stronger ideas. Prefer one memorable visual move over many average ones.

### 4.2 Technical but Human

Developer products should feel precise, but never cold to the point of friction.

### 4.3 Motion with Meaning

Animations must explain hierarchy, focus, progression, or depth. Avoid decorative motion that adds delay without insight.

### 4.4 Mixed Systems, Single Voice

When combining `ant-design`, `elementui`, `shadcn/ui`, `radix ui`, `reactbits`, and `21st.dev` inspiration, unify them with a single token system so the product still feels authored by one team.

### 4.5 Hero and Inner Pages Must Match

Do not design a flashy homepage and then default to generic dashboard or docs screens. The interior of the product must inherit the same type, spacing, surface, and motion logic.

### 4.6 Productized Over Repository-Like

When designing a public-facing design framework, skill library, or agent workflow product, the homepage should feel like a product with momentum, not a documentation repository with nicer spacing.

That means:

- clearer product positioning
- stronger narrative pacing
- visible adoption or usage proof
- fewer file-index-like sections
- a homepage that sells utility and point of view before it lists assets

---

## 5. Visual Theme & Atmosphere

The base atmosphere is:

- clean, structured, high signal
- dark-first for AI/devtools/product surfaces
- light or off-white for editorial, docs, and productivity views
- high contrast on key actions, low contrast on framing elements
- selective glow, selective blur, selective gradient
- strong typography, especially in hero sections

Default visual mix:

- `35%` enterprise precision
- `25%` editorial clarity
- `20%` futuristic product drama
- `20%` friendly interactive warmth

Never let all surfaces glow, all headings overscale, or all sections compete for attention.

---

## 6. Brand Influence Matrix

Use this matrix as a style reference, not a copy instruction.

| Brand Signal | What to Borrow |
|---|---|
| Claude, Notion, Airbnb | warmth, readable whitespace, soft visual tone |
| Cohere, Stripe, Framer | gradient sophistication, modern product polish |
| ElevenLabs, RunwayML, Spotify | cinematic dark mood, media-led composition |
| Ollama, Warp, Cursor, Vercel | terminal credibility, developer seriousness |
| Linear, Superhuman, Apple | subtraction, precision, premium restraint |
| Supabase, PostHog, Sentry | technical product clarity, fast-scanning interfaces |
| Figma, Webflow, Raycast | interactive demos, visual confidence, showcase sections |
| Nike, SpaceX, Tesla | bold hero impact, dramatic framing, product theater |
| WIRED, The Verge | editorial density, sharp contrast, cultural edge |
| Ferrari, Lamborghini, Bugatti, BMW | premium performance cues, tension, sculpted composition |

---

## 7. Color System

### 7.1 Color Philosophy

Color should work in roles, not only in brand accents.

The system uses:

- neutral backbone
- one primary signal accent
- one optional secondary accent
- one data accent family
- semantic feedback colors

### 7.2 Core Neutrals

| Token | Hex | Role |
|---|---|---|
| `--bg-0` | `#05070A` | deepest dark background |
| `--bg-1` | `#0B1020` | app shell dark |
| `--bg-2` | `#111827` | elevated dark panel |
| `--bg-3` | `#F7F7F5` | warm light canvas |
| `--bg-4` | `#FFFFFF` | pure light card |
| `--line-1` | `#1F2937` | dark border |
| `--line-2` | `#E5E7EB` | light border |
| `--text-1` | `#F9FAFB` | high-emphasis dark-theme text |
| `--text-2` | `#D1D5DB` | secondary dark-theme text |
| `--text-3` | `#111827` | high-emphasis light-theme text |
| `--text-4` | `#6B7280` | secondary light-theme text |

### 7.3 Primary Accents

Choose one primary accent per product or page family.

| Accent | Hex | Inspiration |
|---|---|---|
| `Signal Emerald` | `#10B981` | Supabase, VoltAgent, Shopify |
| `Infra Blue` | `#3B82F6` | Coinbase, Webflow, IBM |
| `Velocity Purple` | `#8B5CF6` | Stripe, Linear, Superhuman |
| `Pulse Coral` | `#F97360` | Airbnb, Claude warmth, SaaS CTAs |
| `Ignition Yellow` | `#FACC15` | ClickHouse, Binance, Miro |
| `Hyper Red` | `#EF4444` | Ferrari, Sanity, editorial urgency |

### 7.4 Secondary Accent Rules

Secondary accents are allowed only for:

- charts
- hero gradients
- hover states on showcase modules
- badges and status chips

Do not use more than two high-saturation accents on one screen.

### 7.5 Gradient Rules

Gradients should feel intentional and directional.

Recommended pairs:

- `Signal Emerald -> Infra Blue`
- `Velocity Purple -> Infra Blue`
- `Pulse Coral -> Ignition Yellow`
- `Hyper Red -> Pulse Coral`
- `#0EA5E9 -> #8B5CF6 -> #EC4899` for showcase or AI surfaces

Avoid muddy multi-stop gradients with low contrast.

---

## 8. Typography Rules

### 8.1 Typography Personality

Typography should combine:

- editorial authority
- technical precision
- product readability

### 8.2 Font Roles

Preferred stack:

- Display: `Space Grotesk`, `Sora`, `General Sans`, `Clash Display`
- UI Sans: `Inter`, `Geist`, `Manrope`
- Monospace: `JetBrains Mono`, `IBM Plex Mono`, `Geist Mono`

Fallback is acceptable when runtime constraints apply, but the desired feeling is sharp, modern, and slightly opinionated.

### 8.3 Type Scale

| Role | Size | Weight | Use |
|---|---|---|---|
| `display-xl` | `64-88px` | `600-700` | major hero headline |
| `display-lg` | `48-64px` | `600-700` | product hero / section opener |
| `display-md` | `36-48px` | `600` | strong section title |
| `title-lg` | `28-32px` | `600` | page header |
| `title-md` | `22-24px` | `600` | card group header |
| `body-lg` | `18-20px` | `400-500` | intro copy |
| `body-md` | `16px` | `400-500` | default body |
| `body-sm` | `14px` | `400-500` | secondary text |
| `caption` | `12-13px` | `500-600` | metadata / labels |
| `mono-sm` | `12-14px` | `400-500` | code, tokens, metrics |

### 8.4 Typographic Behavior

- Headlines may be tight and compact in marketing surfaces
- Body text should remain calm and readable
- Monospace is a signal, not a default
- Use uppercase sparingly for labels, tabs, and eyebrow text
- Keep line lengths controlled, especially in docs and pricing pages

---

## 9. Layout Principles

### 9.1 Spacing Rhythm

Use an 8px base rhythm with occasional 4px micro-adjustments.

Suggested scale:

- `4`, `8`, `12`, `16`, `24`, `32`, `40`, `48`, `64`, `80`, `96`, `128`

### 9.2 Container Rules

- marketing pages: `1200-1440px` max content width
- product workspaces: fluid but bounded with strong side padding
- docs: narrower reading column with secondary navigation
- dashboards: prioritize alignment and scan speed over dramatic whitespace

### 9.3 Grid Rules

- landing pages: 12-column grid
- app surfaces: 12-column or split-panel grid
- cards: consistent vertical rhythm before dense horizontal experimentation
- media-led pages: asymmetry is allowed if hierarchy remains obvious

### 9.4 Section Pacing

Alternate dense and relaxed sections:

- dramatic hero
- concise proof section
- denser feature block
- calmer testimonial or case study
- strong CTA close

This rhythm prevents fatigue.

---

## 10. Surface, Depth & Elevation

### 10.1 Surface Hierarchy

| Surface | Description |
|---|---|
| `Base` | full page background |
| `Panel` | cards, nav shells, drawers |
| `Raised` | modals, hover cards, dropdowns |
| `Highlight` | featured cards, pricing spotlight, product focus areas |

### 10.2 Border and Radius

Default radius language:

- tiny: `8px`
- base: `12px`
- card: `16px`
- large panel: `20-24px`
- hero spotlight: `24-32px`

Use less radius for:

- data-dense products
- enterprise analytics
- infrastructure tools

Use more radius for:

- friendly SaaS
- consumer workflows
- creative tools

### 10.3 Shadows

Shadows should be soft, broad, and rare. In dark themes, rely more on border contrast and subtle inner glow than on heavy drop shadows.

---

## 11. Motion System

### 11.1 Motion Philosophy

Motion should feel like:

- `Framer` polish
- `Apple` restraint
- `Raycast` responsiveness
- `Stripe` sequencing

### 11.2 Motion Tokens

| Token | Duration | Use |
|---|---|---|
| `--motion-fast` | `120ms` | hover, focus, chip state |
| `--motion-base` | `220ms` | buttons, cards, accordions |
| `--motion-slow` | `420ms` | section reveal, spotlight transition |
| `--motion-hero` | `700-1000ms` | first-load hero choreography |

### 11.3 Easing

- default and fast UI: `cubic-bezier(0.23, 1, 0.32, 1)`
- on-screen movement: `cubic-bezier(0.77, 0, 0.175, 1)`
- drawers: `cubic-bezier(0.32, 0.72, 0, 1)`
- complex entrance: soft deceleration with no spring excess

### 11.4 Allowed Motion Patterns

- fade-up with slight blur release
- staggered reveal for lists and metrics
- spotlight tracking on hover
- subtle marquee or orbital motion in hero scenes
- count-up metrics
- tab underline or active-pill glide
- card tilt only in showcase contexts

### 11.5 Avoid

- bounce-heavy motion
- parallax on every section
- long loading theatrics
- rotating icons without semantic meaning
- motion that blocks reading

---

## 12. Component Strategy

### 12.1 Single Source of Truth

All components, regardless of origin, must inherit:

- shared colors
- shared radius scale
- shared typography
- shared spacing
- shared focus ring
- shared motion tokens

If a component looks obviously like it belongs to another design language, restyle it before shipping.

### 12.2 `shadcn/ui`

Default choice for:

- app shell
- forms
- dialogs
- sheets
- tabs
- dropdowns
- command interfaces
- settings pages

Reason:

- fast to customize
- token-friendly
- works naturally with `radix ui`

### 12.3 `radix ui`

Use for:

- accessible primitives
- popovers
- menus
- overlays
- switches
- focus management

Never expose raw primitive styling without system-level skinning.

### 12.4 `ant-design`

Use selectively for:

- data tables
- enterprise filters
- complex forms
- date/time pickers
- admin workflows
- analytics-heavy console views

Rules:

- reduce default visual heaviness
- normalize radius and typography
- remove stock blue if not part of active accent system
- simplify dense toolbar chrome

### 12.5 `elementui`

Use only when:

- supporting legacy admin systems
- integrating with existing enterprise codebases
- building fast internal tooling that already depends on it

Rules:

- do not let `elementui` define the entire brand
- wrap legacy screens with updated spacing, typography, and color tokens
- modernize tables, forms, empty states, and navigation shells

### 12.6 `reactbits`

Use for:

- animated hero modules
- reactive backgrounds
- spotlight cards
- particle or beam accents
- showcase sections

Rules:

- isolate effect-heavy blocks to hero or campaign sections
- do not use across dense product interiors

### 12.7 `21st.dev` Inspiration

Use as inspiration for:

- tasteful interaction modules
- premium card layouts
- demo surfaces
- feature showcases
- modern section transitions

Do not stack multiple trend-driven patterns in one viewport.

---

## 13. Hero Page Composition

### 13.1 Hero Goals

The hero must answer:

- what this product is
- why it matters
- why this version feels differentiated
- what action the user should take next

### 13.2 Hero Formula

Recommended structure:

1. Eyebrow with category signal
2. Strong headline with sharp value proposition
3. Support copy in `body-lg`
4. Primary and secondary CTA
5. Trust or proof strip
6. Product visual, motion scene, or command/demo surface

### 13.3 Hero Variants

#### A. Developer Product Hero

Inspired by `Vercel`, `Cursor`, `Warp`, `Supabase`, `VoltAgent`

- dark shell
- mono accent details
- terminal, code, or flow diagram visual
- restrained glow
- proof through capability and speed

#### B. Cinematic AI Hero

Inspired by `RunwayML`, `ElevenLabs`, `Minimax`, `Spotify`

- dark immersive background
- larger display type
- atmospheric gradient or light beam
- media-led layout
- motion-rich focal object

#### C. Friendly SaaS Hero

Inspired by `Notion`, `Airbnb`, `Intercom`, `Cal.com`

- lighter surfaces
- warmer neutrals
- conversational tone
- softer illustration or workflow visual

#### D. Prestige Performance Hero

Inspired by `Apple`, `Tesla`, `Ferrari`, `BMW`, `SpaceX`

- minimal copy
- monumental imagery or product render
- strong silence and whitespace
- high visual confidence

#### E. Productized Framework Hero

Inspired by `Taste Skill`, `Vercel`, `Stripe`, `Linear`

- reads like a real product, not a polished repo page
- one commanding headline
- strong, utility-driven subtitle
- visible proof, skill cards, or module signals
- stronger post-hero narrative rhythm

### 13.4 Hero Do's

- make one element dominant
- stage the product clearly
- use motion to lead the eye
- keep CTA contrast immediate

### 13.5 Hero Don'ts

- generic dashboard screenshot floating in space
- too many badge rows before the headline
- equal visual weight on every object
- three or more competing gradient sources

---

## 14. Inner Page Archetypes

### 14.1 Dashboard

Use when the product is operational, analytical, or infrastructure-heavy.

Characteristics:

- strong information hierarchy
- sticky filters or contextual controls
- cards with clear metric contrast
- compact tables with generous row hover states
- chart accents limited to semantic data colors

### 14.2 Workspace

Use for editors, builders, AI copilots, and multi-panel tools.

Characteristics:

- left navigation or context rail
- central working canvas
- right detail or assistant panel when useful
- keyboard-first interaction hints
- mono tokens for machine/system responses

### 14.3 Documentation

Inspired by `Mintlify`, `Vercel`, `HashiCorp`, `MongoDB`

Characteristics:

- high reading comfort
- restrained accent usage
- strong code block styling
- sticky sidebar with clear active state
- embedded product patterns instead of generic markdown-only feel

### 14.4 Pricing

Characteristics:

- one highlighted plan only
- consistent feature alignment
- trust and FAQ below the fold
- strong monthly/annual toggle if relevant

### 14.5 Changelog / Release Notes

Inspired by `Linear`, `Raycast`, `Superhuman`

Characteristics:

- compact chronological rhythm
- version, date, and status metadata
- screenshots or mini demos when meaningful
- clear distinction between major and minor changes

### 14.6 Case Study / Editorial

Inspired by `The Verge`, `WIRED`, `Apple`, `Nike`

Characteristics:

- stronger image rhythm
- better typographic contrast
- less UI chrome
- more narrative pacing

### 14.7 Framework Homepage

Use for public-facing design systems, agent skills, frontend frameworks, or workflow products.

Characteristics:

- product-like framing, not repo-like framing
- strong hero and post-hero rhythm
- visible proof of utility
- modular but polished section pacing
- clearer “why use this” before “what files exist”
- may include install, skills, examples, and FAQ, but should still feel branded

---

## 15. Industry Modes

### 15.1 AI / LLM Mode

- dark-first
- experimental but credible
- modular gradient accents
- technical demos and model outputs
- motion can be more expressive

### 15.2 Developer Tool Mode

- terminal credibility
- grid discipline
- sharper typography
- monochrome foundation plus one accent

### 15.3 Backend / DevOps Mode

- clarity over spectacle
- dense but navigable modules
- logs, metrics, and forms must be scan-friendly

### 15.4 SaaS / Productivity Mode

- friendlier language
- lighter surfaces allowed
- clearer onboarding progression
- approachable empty states

### 15.5 Creative Tool Mode

- larger previews
- more visual experimentation
- surface rhythm can be more asymmetric
- motion may be more visible but still controlled

### 15.6 Fintech Mode

- trust, precision, and restraint first
- data legibility is critical
- avoid playful motion in sensitive flows
- use green and red semantically, not decoratively

### 15.7 Luxury / Automotive Mode

- dramatic framing
- minimal text
- strong contrast
- material-inspired surfaces
- fewer UI elements with higher impact

---

## 16. Navigation Patterns

### 16.1 Top Navigation

Best for:

- marketing pages
- docs
- hybrid product sites

Should feel:

- slim
- anchored
- transparent at top, more solid on scroll when useful

### 16.2 Sidebar Navigation

Best for:

- dashboards
- builders
- admin systems
- docs with deep IA

Should include:

- clear active state
- icon discipline
- grouped sections
- collapsed behavior on smaller screens

### 16.3 Command Surfaces

Recommended for AI and devtool products:

- command palette
- slash actions
- quick search
- keyboard hints

These patterns help the product feel tool-like rather than brochure-like.

---

## 17. Forms & Data Entry

Forms must feel calm and reliable.

Rules:

- use stacked labels for complexity, inline labels for compact utility forms
- keep validation immediate but non-hostile
- focus rings should be crisp and branded
- input states must be visibly distinct from disabled states
- destructive actions require higher friction than primary actions

For AI apps:

- prompt boxes can be more expressive than normal textareas
- support attachments, slash commands, and model selectors elegantly
- preserve whitespace and code formatting clearly

---

## 18. Data Visualization

Charts should borrow confidence from `PostHog`, `Sentry`, `ClickHouse`, and `Coinbase`, but should not feel like stock BI exports.

Rules:

- use no more than 6 prominent data colors in one chart system
- gridlines should be subtle
- tooltip styling must match app surface language
- prioritize trend readability over ornamental fills
- in dark themes, use softer saturation to avoid visual vibration

---

## 19. Imagery & Illustration

### 19.1 Product Imagery

- prefer real product UI or realistic product composites
- avoid fake generic dashboards
- when using 3D or rendered objects, keep lighting and material logic consistent

### 19.2 Photography

- editorial, cinematic, or premium product-led
- avoid cheap stock feeling
- use cropping with confidence

### 19.3 Illustration

- use only when it supports friendliness or onboarding
- avoid mixing childish illustration with hyper-premium UI

---

## 20. Responsive Behavior

### 20.1 Mobile

- retain brand tone, not only content
- hero should simplify, not flatten
- motion should be lighter and more direct
- tables should transform into stacked records or horizontally scroll with care

### 20.2 Tablet

- keep multi-panel layouts when they still remain legible
- prioritize preserved workflow over collapsed novelty

### 20.3 Touch Targets

- minimum interactive target should be comfortable
- floating effects must never hurt tap clarity

---

## 21. Do's and Don'ts

### Do

- combine bold hero expression with disciplined inner pages
- let one accent own the interface
- create clear contrast between marketing and product surfaces while preserving the same design DNA
- use motion to reinforce trust and flow
- tune third-party components until they feel first-party

### Don't

- mix three design systems without token normalization
- use every trend block from `21st.dev` on one page
- overload dark themes with glow, blur, and noise
- make enterprise pages look like marketing pages with tables added later
- allow docs, settings, and dashboards to visually drift away from the homepage

---

## 22. Implementation Guidance

### 22.1 Tailwind Token Mapping

Recommended token categories:

- `background`
- `foreground`
- `muted`
- `card`
- `popover`
- `primary`
- `secondary`
- `accent`
- `success`
- `warning`
- `danger`
- `border`
- `ring`

### 22.2 CSS Variable Strategy

Use CSS variables for:

- all semantic colors
- radius scale
- spacing aliases when needed
- motion duration
- easing curves
- shadow recipes

### 22.3 Theme Modes

Support at least:

- `dark`
- `light`
- optional `graphite`
- optional `warm-light`

### 22.4 Component Skinning Priority

When integrating multiple libraries, override in this order:

1. tokens
2. typography
3. radius
4. borders
5. state colors
6. motion
7. spacing

---

## 23. Extensibility Spec

New additions to this design library should be documented using the following recipe:

### 23.1 Brand Recipe Template

```md
## Brand Recipe: [Name]

- Category:
- Core mood:
- Primary accent:
- Secondary accent:
- Typography signal:
- Surface style:
- Motion character:
- Best use cases:
- Avoid:
```

### 23.2 Page Archetype Template

```md
## Archetype: [Name]

- Purpose:
- Layout:
- Dominant components:
- Density level:
- Motion level:
- Works best in:
- Avoid:
```

### 23.3 Component Recipe Template

```md
## Component Recipe: [Name]

- Base library:
- Token mapping:
- Radius:
- Border behavior:
- Hover behavior:
- Focus behavior:
- Motion behavior:
- Accessibility notes:
```

---

## 24. Default Design Presets

### 24.1 Preset: `AI_NATIVE`

- flavor: `Developer Dark` + `Cinematic Future`
- accent: `Signal Emerald` or `Velocity Purple`
- hero: animated product scene or prompt surface
- ideal for: AI chat, agent builders, model platforms

### 24.2 Preset: `DEVTOOL_PRO`

- flavor: `Developer Dark` + `Data Dense Enterprise`
- accent: `Infra Blue` or `Signal Emerald`
- hero: code/demo shell
- ideal for: IDEs, API tools, infra consoles

### 24.3 Preset: `SAAS_WARM`

- flavor: `Friendly SaaS` + `Editorial Minimal`
- accent: `Pulse Coral` or `Infra Blue`
- hero: workflow-led narrative
- ideal for: scheduling, messaging, CRM, collaboration

### 24.4 Preset: `CREATIVE_MOTION`

- flavor: `Cinematic Future` + `Creative Tool`
- accent: `Velocity Purple` + `Infra Blue`
- hero: rich media composition
- ideal for: design, video, audio, web creation tools

### 24.5 Preset: `FINTECH_TRUST`

- flavor: `Data Dense Enterprise` + `Editorial Minimal`
- accent: `Infra Blue` or `Signal Emerald`
- hero: proof, trust, and financial clarity
- ideal for: payments, exchanges, analytics, banking

### 24.6 Preset: `LUXE_PERFORMANCE`

- flavor: `Luxury Performance` + `Prestige Performance Hero`
- accent: `Hyper Red`, `Ignition Yellow`, or monochrome
- hero: monumental product framing
- ideal for: automotive, hardware, premium launches

### 24.7 Preset: `PRODUCTIZED_FRAMEWORK`

- flavor: `Developer Dark` + `Editorial Minimal` + `Cinematic Future`
- accent: `Signal Emerald` or `Infra Blue`
- hero: framework-style product homepage
- ideal for: design systems, agent skills, frontend tools, workflow products

---

## 25. Agent Prompt Guide

When an AI agent uses this `DESIGN.md`, it should follow these instructions:

- Start by choosing a `preset` or combining one primary flavor with one supporting flavor
- Use `shadcn/ui + radix ui` as the default implementation base
- Introduce `ant-design` only for dense enterprise modules
- Introduce `elementui` only for legacy admin scenarios
- Use `reactbits` or `21st.dev` inspired blocks only in high-impact sections
- Keep hero and inner pages visually related
- Do not generate a generic template if the product category is known

Short prompt example:

```text
Use the DESIGN.md system. Build a dark AI-native landing page with a Vercel + Supabase + RunwayML flavor mix. Use shadcn/ui and radix ui for the main structure, Tailwind tokens for theming, and one premium animated hero block inspired by reactbits/21st.dev. Keep the interior sections consistent with the hero and avoid generic SaaS patterns.
```

Enterprise prompt example:

```text
Use the DESIGN.md system. Build a backend analytics console with ClickHouse + Sentry + Linear influence. Use ant-design for complex table/filter patterns, but restyle it to match the shared token system. Prioritize scan speed, chart clarity, and restrained dark surfaces.
```

---

## 26. Final Standard

If a page follows this system correctly, it should:

- feel brand-aware without feeling derivative
- look custom rather than boilerplate
- support both cinematic entry points and serious product workflows
- scale from marketing site to dashboard to docs
- remain extensible as new brands, components, and page types are added

This `DESIGN.md` is the root design contract. Extend it, do not dilute it.
