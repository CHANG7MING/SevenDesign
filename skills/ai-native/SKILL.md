---
name: ai-native
description: Design, build, or review AI-native product interfaces with SevenDesign, including chat products, agent builders, copilots, model tools, multimodal generation apps, prompt workflows, and human-in-the-loop approval experiences. Use when AI inputs, streaming states, tool activity, generated outputs, uncertainty, or user control must become clear and trustworthy UI.
---

# AI Native

Use this skill with [`../design-core/SKILL.md`](../design-core/SKILL.md). Follow the core workflow, then apply these defaults.

## Load

- [`../../presets/AI-NATIVE.md`](../../presets/AI-NATIVE.md)
- [`../../archetypes/ai-workspace.md`](../../archetypes/ai-workspace.md) for product UI
- [`../../archetypes/landing-hero.md`](../../archetypes/landing-hero.md) for marketing
- one dominant brand reference: [`../../brands/runwayml.md`](../../brands/runwayml.md) or [`../../brands/supabase.md`](../../brands/supabase.md)
- [`../design-core/references/interaction-motion.md`](../design-core/references/interaction-motion.md) for streaming, state transitions, or motion

## Defaults

- density: medium
- warmth: balanced
- layout variance: bold in marketing, controlled in workspaces
- motion: medium in explanation, low during repeated work

## Product requirements

- Make the current agent state legible: ready, thinking, using tools, waiting for approval, streaming, complete, failed, and cancelled.
- Separate user input, model output, tool evidence, and system status visually and semantically.
- Keep generated content selectable, inspectable, editable, retryable, and attributable when sources exist.
- Preserve user control with cancel, undo, retry, edit-and-resubmit, and explicit approval for consequential actions.
- Design believable empty, partial, long-running, error, and rate-limit states.
- Use cinematic motion only to explain an AI capability; do not animate routine prompt submission or keyboard-first actions.

## React Bits fit

Load [`../react-bits/SKILL.md`](../react-bits/SKILL.md) for a media stage, output reveal, streaming explanation, or showcase surface with a clear product job. Prefer `system` motion for workspaces and reserve `signature` motion for a deliberate marketing or result moment. Pair expressive motion with readable state text and a reduced-motion fallback.

## Avoid

- glow as the only signal that a product uses AI
- fake terminal output, meaningless token streams, and decorative reasoning traces
- hiding uncertainty, provenance, cost, or destructive actions
- chat-only layouts when the task needs structured artifacts or comparison
- turning a workspace into a screensaver with continuous React Bits effects
