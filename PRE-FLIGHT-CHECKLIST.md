# PRE-FLIGHT-CHECKLIST

Run this checklist before considering a design output complete.

## 1. Direction

- Did you choose a preset or clearly define a flavor mix?
- Did you choose at least one relevant brand reference?
- Did you choose a page archetype?

## 2. System Consistency

- Does the output follow [`DESIGN.md`](./DESIGN.md)?
- Does it use semantic tokens from [`TOKENS.md`](./TOKENS.md)?
- Are colors, radius, typography, and motion aligned across the whole UI?

## 3. Component Discipline

- If multiple component systems are used, are they visually normalized?
- Are `shadcn/ui`, `radix ui`, and any dense components aligned under one token system?
- Are stock third-party styles removed or restyled?

## 4. Product Quality

- Does the UI feel product-specific rather than generic?
- Does the hero clearly explain the product?
- Do inner pages feel like they belong to the same brand as the homepage?
- Is the visual hierarchy clear at first glance?

## 5. Motion Quality

- Does motion explain hierarchy or interaction?
- Is motion restrained in dense product views?
- Is there any animation that could be removed without losing meaning?

## 6. Responsiveness

- Does the design preserve its tone on mobile?
- Are touch targets usable?
- Do tables, nav, and dialogs degrade gracefully on smaller screens?

## 7. Anti-Slop Check

- Does the output violate anything in [`FORBIDDEN-PATTERNS.md`](./FORBIDDEN-PATTERNS.md)?
- Does it look like a default template?
- Does it rely on fake premium decoration instead of strong layout decisions?

## 8. Buildability

- Could a frontend team build this with the provided tokens and examples?
- Are the components realistic, not purely decorative?
- If code was generated, does it align with [`examples/`](./examples) and [`implementation/`](./implementation)?
