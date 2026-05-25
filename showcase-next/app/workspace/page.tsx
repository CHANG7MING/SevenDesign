import { SiteShell } from "@/components/site-shell";

const sideItems = ["Overview", "Prompt Graph", "Runs", "Artifacts", "Docs"];

export default function WorkspacePage() {
  return (
    <SiteShell>
      <section className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)_320px]">
        <aside className="page-panel h-fit p-5">
          <p className="eyebrow">Workspace</p>
          <div className="mt-4 space-y-2">
            {sideItems.map((item, index) => (
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

        <div className="page-panel p-6">
          <div className="flex flex-col gap-4 border-b border-border pb-5">
            <div className="eyebrow">AI workspace</div>
            <h1 className="text-display-md font-semibold tracking-[-0.05em]">
              One shell for prompting, evaluating, and shipping.
            </h1>
            <p className="max-w-3xl text-body-lg leading-8 text-muted-foreground">
              This is the working interior version of the same product shown on
              the homepage: prompt-aware, structured, and still visually premium.
            </p>
          </div>

          <div className="mt-6 rounded-3xl border border-border bg-code-surface p-5 font-mono text-mono-sm text-[#b4c7e8]">
            {">"} Draft a product-grade dashboard with a premium but restrained visual system
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-[rgba(5,7,10,0.4)] p-5">
              <p className="text-caption uppercase tracking-[0.12em] text-muted-foreground">
                Current model
              </p>
              <p className="mt-3 text-title-md font-semibold">CA7 Operator XL</p>
            </div>
            <div className="rounded-2xl border border-border bg-[rgba(5,7,10,0.4)] p-5">
              <p className="text-caption uppercase tracking-[0.12em] text-muted-foreground">
                Draft quality
              </p>
              <p className="mt-3 text-title-md font-semibold">High confidence</p>
            </div>
          </div>
        </div>

        <aside className="page-panel h-fit p-5">
          <p className="eyebrow">Inspector</p>
          <div className="mt-4 space-y-4 text-body-sm text-muted-foreground">
            <div className="rounded-2xl border border-border bg-[rgba(5,7,10,0.4)] p-4">
              <p className="text-caption uppercase tracking-[0.12em] text-muted-foreground">
                Motion
              </p>
              <p className="mt-2">Medium intensity, restrained in dense UI areas.</p>
            </div>
            <div className="rounded-2xl border border-border bg-[rgba(5,7,10,0.4)] p-4">
              <p className="text-caption uppercase tracking-[0.12em] text-muted-foreground">
                Layout
              </p>
              <p className="mt-2">Balanced variance with stronger hero and calmer interior shell.</p>
            </div>
          </div>
        </aside>
      </section>
    </SiteShell>
  );
}
