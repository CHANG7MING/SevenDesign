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
- Are `shadcn/ui`, `radix ui`, React Bits, and any dense components aligned under one token system?
- Are stock third-party styles removed or restyled?
- If React Bits is used, is the public source, selected variant, dependency footprint, and token adaptation recorded?
- Is the actual React Bits source available through the project's public dependency or installation path?

## 4. Product Quality

- Does the UI feel product-specific rather than generic?
- Does the hero clearly explain the product?
- Do inner pages feel like they belong to the same brand as the homepage?
- Is the visual hierarchy clear at first glance?

## 5. Motion Quality

- Does motion explain hierarchy or interaction?
- Is motion restrained in dense product views?
- Is there any animation that could be removed without losing meaning?
- Does every animated surface define a job, trigger, choreography, interruption behavior, resting state, and reduced-motion fallback?
- Are motion tiers explicit: `micro`, `system`, or `signature`?
- Is there no more than one signature composition per viewport by default?
- Is motion removed or nearly instant for keyboard-triggered and high-frequency actions?
- Do anchored surfaces animate from their trigger instead of the center?
- Can rapidly repeated or gesture-driven motion be interrupted without jumping?
- Are movement and hover effects adapted for reduced-motion and touch input?
- Are routine UI transitions under 300ms unless a concrete reason justifies more time?
- Was [`skills/motion-review/SKILL.md`](./skills/motion-review/SKILL.md) run for product-level composition?
- Was [`skills/review-animations/SKILL.md`](./skills/review-animations/SKILL.md) used when animation code was changed?

## 6. Responsiveness

- Does the design preserve its tone on mobile?
- Are touch targets usable?
- Do tables, nav, and dialogs degrade gracefully on smaller screens?
- Does the React Bits component preserve layout, focus, and content hierarchy at narrow widths?

## 7. Anti-Slop Check

- Does the output violate anything in [`FORBIDDEN-PATTERNS.md`](./FORBIDDEN-PATTERNS.md)?
- Does it look like a default template?
- Does it rely on fake premium decoration instead of strong layout decisions?
- Is any React Bits effect present only because it looks impressive, with no product job?

## 8. Buildability

- Could a frontend team build this with the provided tokens and examples?
- Are the components realistic, not purely decorative?
- If code was generated, does it align with [`examples/`](./examples) and [`implementation/`](./implementation)?
- Was the runnable result inspected at desktop and mobile sizes?
- Were focus, loading, empty, error, long-content, and overflow states exercised where relevant?
- If Pro source or assets were unavailable, is the implementation honest about that boundary?

## 9. Team handoff (when Team Mode is used)

- Was the dispatch packet complete: `Outcome`, `Benefit`, `Sources`, `Scope`, `Checks`, `Stop when`, and `Return`?
- Were unresolved product, visual, architecture, safety, and acceptance decisions kept in the main thread?
- Does each mutable file or artifact have exactly one writer?
- Was explicit role/model/effective-sandbox evidence available, or was the role treated as advisory?
- Did the child return changed files, checks performed, blockers, and verification gaps?
- Did the main thread inspect the actual diff, rendered result, and shared working tree before accepting it?
- Did an independent Reviewer return a verdict for the concrete unresolved risk, without repeating passed checks?
- If responsive or subjective visual judgment was required, was it owned by the main thread or backed by captured browser evidence?
