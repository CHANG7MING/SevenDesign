import { SiteShell } from "@/components/site-shell";

const rows = [
  ["Prompt orchestration", "Stable", "24ms", "91%"],
  ["Visual diff analysis", "Stable", "41ms", "88%"],
  ["Multi-model routing", "Beta", "82ms", "79%"],
  ["Knowledge sync", "Preview", "27ms", "86%"],
];

export default function DashboardPage() {
  return (
    <SiteShell>
      <section className="page-panel p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="eyebrow">Dashboard</div>
            <h1 className="mt-4 text-display-md font-semibold tracking-[-0.05em]">
              Data-dense product UI without losing the premium layer.
            </h1>
            <p className="mt-3 max-w-3xl text-body-lg leading-8 text-muted-foreground">
              This screen shows the `DEVTOOL_PRO` side of the system: stronger
              hierarchy, restrained motion, clearer tables, and less theatrical
              presentation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="rounded-pill border border-border px-4 py-2 text-body-sm text-muted-foreground">
              Realtime
            </div>
            <div className="rounded-pill border border-border px-4 py-2 text-body-sm text-muted-foreground">
              Stable
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Runs today", "2.4k", "+31%"],
            ["Approval rate", "91%", "+7%"],
            ["Median latency", "132ms", "-18%"],
          ].map(([label, value, delta]) => (
            <div key={label} className="rounded-2xl border border-border bg-[rgba(5,7,10,0.4)] p-5">
              <p className="text-caption uppercase tracking-[0.1em] text-muted-foreground">
                {label}
              </p>
              <p className="mt-2 text-title-lg font-semibold tracking-[-0.05em]">
                {value}
              </p>
              <p className="mt-2 text-body-sm text-success">{delta}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <table className="w-full border-collapse text-body-sm">
            <thead className="bg-table-header">
              <tr>
                {["Capability", "Status", "Latency", "Approval"].map((head) => (
                  <th
                    key={head}
                    className="px-5 py-4 text-left text-caption uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]} className="border-t border-border hover:bg-table-hover">
                  {row.map((cell) => (
                    <td key={cell} className="px-5 py-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </SiteShell>
  );
}
