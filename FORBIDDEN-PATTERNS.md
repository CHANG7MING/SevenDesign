# FORBIDDEN-PATTERNS

Use this file as a hard guardrail layer.

If a design or generated UI violates these rules, it should be revised before shipping.

## 1. Generic SaaS Slop

Do not default to:

- a generic purple hero on a white background
- three equal feature cards with stock icons
- a floating dashboard screenshot with no visual logic
- a homepage that looks interchangeable with any startup site

## 2. Hero / Interior Mismatch

Do not create:

- a cinematic hero followed by generic admin screens
- a premium landing page with a default dashboard inside
- a docs page that looks like it belongs to another product

Homepage and internal product pages must share the same design DNA.

## 3. Uncontrolled Multi-System Mixing

Do not:

- mix `ant-design`, `shadcn/ui`, `radix ui`, and legacy styles without token normalization
- let stock third-party component styles leak into the final result
- use one design system for marketing and another unrelated one for product UI

## 4. Cheap Motion

Do not use:

- bouncy motion everywhere
- decorative parallax on every section
- fake premium motion that slows down real use
- constantly moving gradients with no purpose
- rotating or pulsing elements that distract from reading

## 5. Excessive AI Tropes

Do not default to:

- full-screen glow and blur
- neon-on-black everything
- fake terminal spam as visual decoration
- abstract generative blobs with no product meaning

## 6. Weak Typography

Do not:

- use default system-looking typography when the product needs a stronger voice
- overscale every heading
- use monospace everywhere
- let body copy become too wide or too dense

## 7. Misused Accent Color

Do not:

- use more than one dominant accent without intent
- use semantic red/green as decorative brand color in critical flows
- let accent colors dominate charts, forms, navigation, and CTAs simultaneously

## 8. Bad Data UI

Do not:

- wrap every metric in oversized marketing cards
- over-decorate tables
- use low-contrast chart palettes
- make dense product views feel like sales pages

## 9. Fake Premium Signals

Do not mistake premium for:

- more blur
- more gradient
- more spacing everywhere
- more animation
- fewer constraints

Premium comes from control, hierarchy, and consistency.

## 10. Repository Homepage Syndrome

Do not let a public-facing framework homepage become:

- a list of folders
- a file index with nicer cards
- a docs page pretending to be a marketing page
- a generic open-source project page with no brand point of view

For framework, skill, or workflow products, the homepage must feel like an actual product.
