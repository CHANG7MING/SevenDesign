# Interaction and Motion Standard

Use this reference when designing or implementing motion, gestures, state transitions, or interactive components.

## Decision sequence

Before writing motion code, answer in order:

1. **Purpose**: Does motion provide feedback, orientation, continuity, explanation, or prevent a jarring change? Delete it if the only reason is decoration on a repeated action.
2. **Frequency**: Remove motion from keyboard-triggered and very frequent actions. Reduce it for repeated navigation and hover. Reserve expressive choreography for rare, explanatory, or first-use moments.
3. **Geometry**: Identify where the element comes from, where it goes, and which trigger or object it belongs to.
4. **Interruption**: Determine whether the user can reverse, repeat, drag, or retarget the interaction mid-flight.
5. **Accessibility and performance**: Define reduced-motion behavior and ensure the implementation stays responsive under load.

## Timing and easing

| Interaction | Typical duration |
| --- | --- |
| press feedback | 100–160ms |
| tooltip or small popover | 125–200ms |
| dropdown or select | 150–250ms |
| modal or drawer | 200–300ms for routine UI; longer only when spatial travel requires it |
| marketing explanation | use the shortest duration that preserves comprehension |

- Use `cubic-bezier(0.23, 1, 0.32, 1)` for responsive entrances and exits.
- Use `cubic-bezier(0.77, 0, 0.175, 1)` for an object already on screen moving between states.
- Use `cubic-bezier(0.32, 0.72, 0, 1)` for drawer-like travel.
- Use linear motion only for constant-rate progress or a justified ambient loop.
- Do not use `ease-in` for UI entrances or direct feedback.
- Keep routine UI under 300ms unless distance, comprehension, or direct manipulation provides a concrete reason.

## Physical continuity

- Give pressable elements immediate pointer-down feedback. A subtle `scale(0.97)` is a useful default, but do not use scale as the only hover signal.
- Do not animate from `scale(0)`. Start near the final size, commonly `0.95–0.98`, and combine with opacity.
- Make popovers, menus, and tooltips originate from their trigger. Keep centered modals centered.
- Preserve navigation direction and object identity across states.
- Use slight blur only to bridge an otherwise imperfect crossfade; do not make blur the visual language.

## Implementation choice

- Use CSS transitions for predetermined, rapidly reversible state changes.
- Use `@starting-style` for CSS-native entry when supported.
- Use WAAPI when programmatic control and browser-managed animation are both needed.
- Use a spring for drag, momentum, gesture reversal, or motion that must inherit velocity. Keep bounce restrained; professional UI usually uses a critically damped or near-critically damped spring.
- Avoid keyframes for interactions that can be rapidly retriggered or reversed.
- Animate `transform` and `opacity` by default. Avoid animating layout properties such as `width`, `height`, `top`, `left`, margin, and padding.
- Measure when using filters, masks, large layers, or continuous motion. Do not promote large numbers of elements with `will-change` indefinitely.

## Gestures

- Track the pointer 1:1 and preserve the grab offset.
- Capture the pointer after drag begins and ignore additional touch points.
- Carry release velocity into the result; support a flick without forcing a large distance threshold.
- Apply resistance beyond natural boundaries instead of a hard invisible wall.
- Never disable input while a gesture-driven transition settles.

## Groups and repeated surfaces

- Use a short 30–70ms stagger only when sequence aids comprehension or establishes hierarchy.
- Do not delay interactivity while a stagger completes.
- Delay the first tooltip to avoid accidental activation; show adjacent tooltips immediately once the user is exploring a group.
- Remove entrance motion from command palettes and other keyboard-first surfaces.

## Accessibility

Under `prefers-reduced-motion: reduce`, remove spatial travel, parallax, looping, and large scale changes. Retain short opacity or color changes when they preserve state comprehension. Gate hover motion behind `(hover: hover) and (pointer: fine)`. Ensure no information or action exists only in motion.

## Debugging

Inspect uncertain motion at slow speed and frame by frame. Test gesture work on a real touch device. Verify origin, coordinated property timing, interruption, rapid retriggering, background-tab recovery, and behavior under CPU load.

This standard adapts interaction principles from the MIT-licensed `attentiondotnet/emilkowalski_skills` project into SevenDesign's product-design workflow.
