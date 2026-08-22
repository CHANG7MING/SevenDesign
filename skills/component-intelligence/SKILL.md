---
name: component-intelligence
description: Choose the right component source and ownership model from a product brief, across shadcn, Radix, React Bits, Vue Bits, and the host system. Use when the user describes a product surface or asks which component library to use; do not wait for a library name.
---

# Component Intelligence

Component Intelligence is SevenDesign's source-neutral component decision layer. It turns a product brief into an ownership plan before anyone reaches for a component library.

The agent should answer:

- What is the user trying to understand or do?
- What density, frequency, accessibility, and framework constraints apply?
- Which source should own the foundation, behavior, and expressive layer?
- Which sources are deliberately not selected, and why?
- What remains the static fallback?

Do not ask the user to choose shadcn, Radix, React Bits, or Vue Bits first. Choose the source after understanding the product task.

## Framework

- React is the default.
- Honor explicit `Vue` or `Nuxt` requests.
- Inspect an existing host project when available.
- If the evidence is mixed and the choice changes implementation, ask: `这次宿主项目使用 React 还是 Vue？未指定的话我会按 React 处理。`

Framework resolution changes source paths and dependencies, not the product job. Never silently port a React component to Vue or vice versa.

## Source Ownership

Use [`catalog/source-matrix.json`](./catalog/source-matrix.json) as the compact decision authority:

- `shadcn`: styled product foundation, token ownership, common UI surfaces
- `Radix`: accessible behavior primitives, overlays, focus management, keyboard interaction
- `React Bits`: purposeful React expression, reveal, showcase, focus, media, and rare delight
- `Vue Bits`: the equivalent expression layer for Vue hosts
- host system: existing framework primitives when a source is unavailable or would add unnecessary duplication

These layers compose; they are not mutually exclusive. A dashboard can use shadcn for its shell, Radix for filters and dialogs, and no Bits motion because data scanning is the product job.

## Workflow

1. Normalize the request into `archetype`, `surface`, `jobs`, `density`, `frequency`, `interaction`, `framework`, and `constraints`.
2. Load the compact source matrix and select ownership by layer.
3. Use [`scripts/select-source.py`](./scripts/select-source.py) for a deterministic first pass when the brief is structured.
4. Recommend the smallest source set. One source may own multiple layers only when it genuinely fits.
5. Explain why the foundation, behavior, and expression sources fit.
6. Explain at least two rejected alternatives or why a layer is intentionally empty.
7. For Bits candidates, hand the motion selection to [`../react-bits/SKILL.md`](../react-bits/SKILL.md). Do not copy expressive effects into dense or high-frequency surfaces.
8. Record source provenance, exact files, dependency, token ownership, fallback, and review path.

## Output

Return:

### Product Read

The normalized archetype, user job, density, frequency, framework, and constraints.

### Ownership Plan

| Layer | Owner | Why |
| --- | --- | --- |
| Foundation | `shadcn` / host system | token and surface ownership |
| Behavior | `Radix` / host primitives / none | focus, keyboard, overlays |
| Expression | `React Bits` / `Vue Bits` / none | purposeful motion or media |

### Why Not

Name the plausible source or effect that was rejected and the specific reason: wrong layer, framework mismatch, excessive dependency, poor accessibility fit, or motion that harms scanning.

### Handoff

Include implementation files, dependencies, token substitutions, static fallback, responsive behavior, reduced-motion behavior, and the next review Skill.

Do not output a component-library shopping list. The useful result is an ownership decision with reasons.
