# Component Recipe: Data Table

- Base library: `ant-design` or `shadcn/ui` table primitives depending on complexity
- Role: dense structured data review, filtering, selection, operations
- Density mode: medium to high
- Radius: `12-16px` on containing shell, tighter inside the table body
- Border behavior: row dividers and header separation should be subtle but clear
- Shadow behavior: almost none; structure should come from alignment and surface contrast
- Hover behavior: row highlight and action affordance reveal
- Focus behavior: visible cell or row focus for keyboard flows
- Disabled behavior: retain structure while dimming unavailable actions
- Motion behavior: near-instant; motion should not interfere with scan speed
- Accessibility notes: sortable headers and row actions must be keyboard and screen-reader friendly

## Token Mapping

- Background: `card` / `muted`
- Foreground: `foreground`
- Border: `border`
- Accent: `primary` for selection or sort emphasis
- Ring: `ring`

## Variants

- Default: standard operational table
- Compact: high-density admin and infra views
- Highlighted: financial or KPI table with one focal metric column
- Destructive: row-level destructive actions only, not whole-table styling

## Usage Rules

- Use when: users need sorting, scanning, filtering, comparing, and acting on structured records
- Avoid when: content is narrative, sparse, or better represented as cards or timelines
