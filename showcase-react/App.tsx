import "./styles.css";

const navItems = ["Product", "Workspace", "Pricing", "Docs"];

const featureCards = [
  {
    title: "Agent-native workspace",
    description:
      "A multi-panel environment for prompting, reviewing outputs, and shipping production-ready changes.",
    badge: "AI Workspace",
  },
  {
    title: "Unified token system",
    description:
      "Landing page energy and internal product clarity stay aligned through shared type, motion, and surface rules.",
    badge: "Design Tokens",
  },
  {
    title: "Production-minded UI",
    description:
      "Built to feel premium without drifting into cinematic nonsense once the dashboard and docs appear.",
    badge: "Real Product",
  },
];

const metrics = [
  { label: "Latency", value: "132ms", delta: "-18%" },
  { label: "Runs today", value: "2.4k", delta: "+31%" },
  { label: "Approval rate", value: "91%", delta: "+7%" },
];

const tableRows = [
  ["Realtime prompt auditing", "Stable", "24ms"],
  ["Multi-model orchestration", "Beta", "82ms"],
  ["Visual diff generation", "Stable", "41ms"],
  ["Docs-aware answer routing", "Preview", "27ms"],
];

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "For small teams validating one AI-native workflow.",
    features: ["1 workspace", "Shared prompt history", "Basic analytics"],
    featured: false,
  },
  {
    name: "Scale",
    price: "$99",
    description: "For teams shipping product, docs, and internal tools from one system.",
    features: [
      "Unlimited workspaces",
      "Design workflow presets",
      "Advanced audit trail",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For platform teams that need governance and deeper system integration.",
    features: ["Private skill packs", "SSO / RBAC", "Custom rollout rules"],
    featured: false,
  },
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark" />
          <span>CA7 Design</span>
        </div>
        <nav className="nav">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="topbar-actions">
          <button className="button button-secondary">View docs</button>
          <button className="button">Start building</button>
        </div>
      </header>

      <main className="content">
        <section className="hero" id="product">
          <div className="hero-copy">
            <div className="eyebrow">AI-native product system</div>
            <h1>
              Premium interfaces for teams building agents, tools, and real
              products.
            </h1>
            <p>
              A React-ready design direction that blends cinematic landing-page
              energy with believable internal product structure.
            </p>
            <div className="hero-actions">
              <button className="button">Open workspace</button>
              <button className="button button-secondary">Read the system</button>
            </div>
            <div className="proof-row">
              <span>RunwayML-grade hero mood</span>
              <span>Supabase-style product clarity</span>
              <span>Vercel-level restraint</span>
            </div>
          </div>

          <div className="hero-stage">
            <div className="window">
              <div className="window-top">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="window-title">agent-workspace.tsx</span>
              </div>
              <div className="prompt-card">
                <p className="mono">{">"} Generate an AI-native workspace shell</p>
              </div>
              <div className="metric-grid">
                {metrics.map((metric) => (
                  <div className="metric-card" key={metric.label}>
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                    <em>{metric.delta}</em>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="feature-grid">
          {featureCards.map((card) => (
            <article className="feature-card" key={card.title}>
              <span className="feature-badge">{card.badge}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </section>

        <section className="workspace-preview" id="workspace">
          <div className="section-heading">
            <span>Workspace preview</span>
            <h2>One visual DNA from landing page to internal product.</h2>
          </div>

          <div className="workspace-shell">
            <aside className="sidebar">
              <p className="sidebar-label">Workspace</p>
              {["Overview", "Runs", "Prompt Graph", "Files", "Docs"].map(
                (item, index) => (
                  <button
                    key={item}
                    className={index === 0 ? "nav-item active" : "nav-item"}
                  >
                    {item}
                  </button>
                ),
              )}
            </aside>

            <div className="workspace-main">
              <div className="workspace-toolbar">
                <div>
                  <h3>Pipeline health</h3>
                  <p>Operational UI styled with the same system as the hero.</p>
                </div>
                <div className="toolbar-pills">
                  <span>Realtime</span>
                  <span>Stable</span>
                </div>
              </div>

              <div className="data-shell">
                <table>
                  <thead>
                    <tr>
                      <th>Capability</th>
                      <th>Status</th>
                      <th>Latency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing" id="pricing">
          <div className="section-heading">
            <span>Pricing</span>
            <h2>Structured like a product system, not a generic SaaS template.</h2>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={plan.featured ? "plan-card featured" : "plan-card"}
              >
                <div className="plan-top">
                  <div>
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                  </div>
                  {plan.featured ? <span className="plan-pill">Popular</span> : null}
                </div>
                <div className="plan-price">{plan.price}</div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button
                  className={plan.featured ? "button" : "button button-secondary"}
                >
                  Choose {plan.name}
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
