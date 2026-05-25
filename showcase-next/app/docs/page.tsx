import { SiteShell } from "@/components/site-shell";

const sections = [
  "Getting Started",
  "Design Tokens",
  "Skills",
  "Starter Kits",
  "Prompt Packs",
];

export default function DocsPage() {
  return (
    <SiteShell>
      <section className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)_220px]">
        <aside className="page-panel h-fit p-5">
          <p className="eyebrow">Docs</p>
          <div className="mt-4 space-y-2">
            {sections.map((item, index) => (
              <button
                key={item}
                className={
                  index === 0
                    ? "w-full rounded-xl bg-secondary px-4 py-3 text-left text-body-sm text-foreground"
                    : "w-full rounded-xl px-4 py-3 text-left text-body-sm text-muted-foreground hover:bg-muted"
                }
              >
                {item}
              </button>
            ))}
          </div>
        </aside>

        <article className="page-panel p-7">
          <div className="eyebrow">Documentation</div>
          <h1 className="mt-5 text-display-md font-semibold tracking-[-0.05em]">
            Build premium product interfaces from a reusable design workflow.
          </h1>
          <p className="mt-5 max-w-3xl text-body-lg leading-8 text-muted-foreground">
            This docs page demonstrates the calmer side of the same design DNA:
            better reading comfort, restrained contrast, and stronger structure
            for long-form usage.
          </p>
          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-title-md font-semibold">1. Choose a direction</h2>
              <p className="mt-3 text-body-md leading-7 text-muted-foreground">
                Start with a preset, then refine it with one brand recipe and one
                page archetype. This keeps the design specific without becoming
                inconsistent.
              </p>
            </section>
            <section>
              <h2 className="text-title-md font-semibold">2. Apply semantic tokens</h2>
              <div className="mt-4 rounded-2xl border border-border bg-code-surface p-5 font-mono text-mono-sm text-[#b4c7e8]">
                background, foreground, card, muted, border, primary, accent
              </div>
            </section>
            <section>
              <h2 className="text-title-md font-semibold">3. Validate quality</h2>
              <p className="mt-3 text-body-md leading-7 text-muted-foreground">
                Use forbidden patterns and pre-flight checks so the result stays
                product-specific instead of collapsing into generic SaaS output.
              </p>
            </section>
          </div>
        </article>

        <aside className="page-panel h-fit p-5">
          <p className="text-caption uppercase tracking-[0.12em] text-muted-foreground">
            On this page
          </p>
          <div className="mt-4 space-y-3 text-body-sm text-muted-foreground">
            <p>Choose a direction</p>
            <p>Apply semantic tokens</p>
            <p>Validate quality</p>
          </div>
        </aside>
      </section>
    </SiteShell>
  );
}
