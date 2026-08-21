---
name: design-core
description: Design and implement high-craft product interfaces with SevenDesign. Use for creating, redesigning, or polishing web pages, application shells, design systems, and production UI; translating product intent into a distinct visual direction; implementing responsive components; or reviewing UI for hierarchy, interaction quality, motion, accessibility, and generic AI-design patterns. Supports React, Next.js, Tailwind CSS, shadcn/ui, Radix UI, and normalized third-party component systems.
---

# SevenDesign Core

## Upstream design-engineering baseline

Treat the vendored [`emil-design-eng`](../emil-design-eng/SKILL.md) skill as the primary craft authority for UI polish and motion. Use [`apple-design`](../apple-design/SKILL.md) for gesture-driven, spring, momentum, or fluid-interface work; use [`animation-vocabulary`](../animation-vocabulary/SKILL.md) when a motion request needs precise terminology; and use [`review-animations`](../review-animations/SKILL.md) for a strict motion-only review. These files are intentionally kept as upstream source material. Do not paraphrase or weaken their rules when the task falls within their scope.

Use SevenDesign's local library to provide product context around that baseline: presets select a direction, brands provide a restrained reference, archetypes provide page structure, tokens provide implementation values, and the anti-slop rules provide a final guardrail.

Act as a design engineer. Make the product clear and usable first, then make it distinctive through deliberate typography, composition, interaction, and restraint. Treat taste as a sequence of explainable decisions, not a collection of visual effects.

## Operating modes

Infer the mode from the request. Combine modes when needed.

- **Direct**: establish product positioning, visual character, and page composition.
- **Build**: implement or revise production-ready UI in the user's existing stack.
- **Polish**: improve hierarchy, spacing, typography, states, and motion without changing product intent.
- **Review**: inspect a UI, screenshot, or codebase and return evidence-backed findings before proposing changes.

## Workflow

### 1. Inspect before designing

- Read the existing project structure, framework, tokens, components, assets, and conventions.
- Preserve the user's design system when one exists. Normalize third-party primitives instead of introducing a competing visual language.
- For redesigns, identify what is intentional, what is inherited, and what is broken before editing.
- For image or URL references, extract principles and relationships; do not copy brand identity or isolated decoration literally.

### 2. Write a compact design contract

Establish these decisions internally before implementation:

- product and audience
- primary user task
- page archetype
- content hierarchy and primary action
- density, warmth, layout variance, and motion intensity
- typography role, surface model, accent policy, and interaction personality

Load only the relevant local material:

- foundation and direction: [`../../DESIGN.md`](../../DESIGN.md)
- semantic tokens: [`../../TOKENS.md`](../../TOKENS.md)
- presets, brands, and archetypes: browse [`../../LIBRARY-INDEX.md`](../../LIBRARY-INDEX.md), then read the selected files
- component ownership: [`../../implementation/COMPONENT-MAPPING.md`](../../implementation/COMPONENT-MAPPING.md)
- motion or interaction work: load the upstream skill first, then [`references/interaction-motion.md`](references/interaction-motion.md) for SevenDesign token and product-context mapping
- critique or code review: [`references/review-protocol.md`](references/review-protocol.md)

Use references as ingredients, not as instructions to average multiple brands together. Select one dominant direction and at most one supporting influence.

### 3. Route React Bits deliberately

When a concrete public React Bits component is useful for an expressive reveal, media stage, state transition, focus treatment, or showcase, load [`../react-bits/SKILL.md`](../react-bits/SKILL.md).

React Bits is an implementation source, not a replacement for product hierarchy or the upstream motion bar:

- name the product job before choosing a component;
- select the smallest public component and matching project variant;
- map colors, type, spacing, surfaces, focus, and states to SevenDesign tokens;
- choose `micro`, `system`, or `signature` motion explicitly;
- define trigger, choreography, interruption, resting state, and reduced-motion fallback;
- use [`../motion-review/SKILL.md`](../motion-review/SKILL.md) for product-level composition and [`../review-animations/SKILL.md`](../review-animations/SKILL.md) when animation code changes.

If the source is not available in the current project, record the public installation path or missing dependency. Never claim that React Bits or Pro source has been installed when only a link or design reference is present.

### 4. Build the information architecture first

- Make the key task and next action obvious before adding polish.
- Use real product structure and plausible content. Do not hide weak hierarchy behind gradients, glass, mock terminals, or generic cards.
- Keep marketing surfaces and product interiors in the same visual DNA.
- Prefer a few strong layout decisions over many decorative ones.

### 5. Implement the system, not a screenshot

- Use semantic tokens for color, type, spacing, radius, elevation, and motion.
- Reuse existing primitives and component APIs.
- Define all interaction states: default, hover, pressed, focus-visible, disabled, loading, empty, error, and success where relevant.
- Preserve responsiveness, keyboard access, readable contrast, touch targets, and reduced-motion behavior.
- Use motion only for feedback, orientation, continuity, explanation, or preventing a jarring state change.
- Never add dependencies unless the result materially requires them and the project does not already provide an equivalent.

### 6. Verify at real sizes

- Run the relevant build, typecheck, lint, and tests.
- Inspect the rendered result at desktop and mobile widths when a runnable UI exists.
- Exercise interactive states, overflow, long content, empty states, focus order, and reduced motion.
- Fix visible regressions before declaring completion.

### 7. Apply the quality gate

Reject work that violates [`../../FORBIDDEN-PATTERNS.md`](../../FORBIDDEN-PATTERNS.md). Complete [`../../PRE-FLIGHT-CHECKLIST.md`](../../PRE-FLIGHT-CHECKLIST.md).

For reviews, lead with findings. Cite `file:line` for code and identify the exact screen/region for visual evidence. Use the format in [`references/review-protocol.md`](references/review-protocol.md).

## Non-negotiable craft rules

- Do not ship interchangeable “AI SaaS” composition.
- Do not use `transition: all`, `ease-in` for responsive UI entrances, or movement on high-frequency keyboard actions.
- Do not animate from `scale(0)`; preserve physical continuity and trigger-aware origin.
- Prefer `transform` and `opacity` for motion; use interruptible transitions or springs for interactions users can rapidly reverse.
- Gate hover-only behavior to hover-capable pointers and provide a reduced-motion path.
- Do not let animation delay input, reading, or task completion.
- Do not claim a design is polished without rendering and inspecting it when the environment permits.

## Delivery

Lead with the outcome. Summarize the design direction, implementation changes, and verification performed. Mention unresolved risks plainly. Do not narrate routine file-reading or tool use.
