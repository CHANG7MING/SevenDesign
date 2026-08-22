# Token Budget

React Bits and Vue Bits are source catalogs, not documents to load wholesale. Keep the active context proportional to the decision.

## Default Load Tiers

### Tier 0: Always

- `skills/react-bits/SKILL.md`
- the active SevenDesign entrypoint and only the relevant scenario Skill

### Tier 1: Selection

Load only:

- [`framework-selection.md`](./framework-selection.md)
- [`selection-protocol.md`](./selection-protocol.md)
- [`catalog/frameworks.json`](../catalog/frameworks.json)
- [`catalog/selection-matrix.json`](../catalog/selection-matrix.json)

Use `scripts/select-component.py` for the first ranking pass. Do not open `catalog/registry.json`, `catalog/vue/registry.json`, `llms.txt`, or component JSON files during this tier.

### Tier 2: Registry Lookup

When no bundled variant fits, run [`../scripts/search-registry.py`](../scripts/search-registry.py) with a narrow query and a small limit. Read the compact result, not the full registry.

```bash
python3 skills/react-bits/scripts/search-registry.py \
  --framework react \
  --query "result reveal" \
  --limit 5
```

### Tier 3: Implementation

After selecting one variant:

- read only the materialized source files for that variant
- read the matching small catalog JSON only if an exact upstream path or dependency is missing from the matrix
- do not read the entire registry or `llms.txt`

### Tier 4: Review

Read only the changed animation files and the relevant review reference. Do not reload the catalog unless the source decision itself is being revisited.

## Hard Limits

- Recommend at most two components.
- Return at most four rejected alternatives by default.
- Search at most eight registry matches in one pass.
- Never paste full registry entries or source JSON into a design brief.
- Prefer file paths and compact metadata over copied source content.
