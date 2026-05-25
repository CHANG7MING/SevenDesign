# Design Core Skill

## Purpose

This skill turns the CA7 design library into an executable design protocol for AI-assisted UI generation.

Use it when:

- building any UI from this repository
- guiding AI toward higher taste and stronger product specificity
- preventing generic SaaS outputs

## Required Inputs

- product type
- one preset or flavor mix
- one or more brand references
- one page archetype

## Parameter Dials

- `VISUAL_DENSITY`: `low`, `medium`, `high`
- `MOTION_INTENSITY`: `low`, `medium`, `high`
- `BRAND_WARMTH`: `cold`, `balanced`, `warm`
- `LAYOUT_VARIANCE`: `safe`, `balanced`, `bold`
- `ENTERPRISE_DENSITY`: `low`, `medium`, `high`

## Core Rules

1. Follow [`DESIGN.md`](../../DESIGN.md)
2. Follow [`TOKENS.md`](../../TOKENS.md)
3. Reject outputs that violate [`FORBIDDEN-PATTERNS.md`](../../FORBIDDEN-PATTERNS.md)
4. Validate outputs against [`PRE-FLIGHT-CHECKLIST.md`](../../PRE-FLIGHT-CHECKLIST.md)
5. Use semantic tokens, not hardcoded color improvisation
6. Keep hero and product interiors in the same visual DNA

## Default Build Stack

- `tailwindcss`
- `shadcn/ui`
- `radix ui`
- optional `ant-design` for dense workflows

## Output Expectations

The output should be:

- specific to the product category
- buildable in real frontend code
- visually consistent
- premium through restraint, not gimmicks
