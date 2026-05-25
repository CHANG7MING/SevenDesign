# USE-IN-PROJECT

Use this path if you want to bring the library into a real frontend app.

## Minimum Setup

Copy or adapt:

- [`examples/tailwind.config.ts`](../examples/tailwind.config.ts)
- [`examples/globals.css`](../examples/globals.css)
- [`examples/components.json`](../examples/components.json)
- [`examples/utils.ts`](../examples/utils.ts)

Then bring in whichever UI examples you need from [`examples/`](../examples).

## Recommended Order

1. Add the token variables from [`TOKENS.md`](../TOKENS.md)
2. Map them in Tailwind using [`examples/tailwind.config.ts`](../examples/tailwind.config.ts)
3. Add the shared utility from [`examples/utils.ts`](../examples/utils.ts)
4. Add your first components:
   - [`examples/button.tsx`](../examples/button.tsx)
   - [`examples/card.tsx`](../examples/card.tsx)
   - [`examples/input.tsx`](../examples/input.tsx)
   - [`examples/dialog.tsx`](../examples/dialog.tsx)
5. Add page-level sections:
   - [`examples/hero-section.tsx`](../examples/hero-section.tsx)
   - [`examples/sidebar-nav.tsx`](../examples/sidebar-nav.tsx)
   - [`examples/table-shell.tsx`](../examples/table-shell.tsx)

## Good First Starter Kits

- AI product: [`starter-kits/ai-saas-starter.md`](../starter-kits/ai-saas-starter.md)
- Devtool / backend product: [`starter-kits/devtool-starter.md`](../starter-kits/devtool-starter.md)
- Docs + pricing site: [`starter-kits/docs-pricing-starter.md`](../starter-kits/docs-pricing-starter.md)
