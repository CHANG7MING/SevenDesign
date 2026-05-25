import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

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
    description: "For platform teams that need governance and deeper integration.",
    features: ["Private skill packs", "SSO / RBAC", "Custom rollout rules"],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <SiteShell>
      <section className="page-panel p-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow mx-auto">Pricing</div>
          <h1 className="mt-5 text-display-md font-semibold tracking-[-0.05em]">
            Structured like a product system, not a generic SaaS template.
          </h1>
          <p className="mt-4 text-body-lg leading-8 text-muted-foreground">
            One highlighted plan, cleaner hierarchy, stronger differentiation,
            and the same visual language as the product interior.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.featured
                  ? "rounded-3xl border border-[rgba(59,130,246,0.24)] bg-card p-6 shadow-glow-blue"
                  : "rounded-3xl border border-border bg-card p-6 shadow-elev-2"
              }
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-title-md font-semibold">{plan.name}</h3>
                  <p className="mt-3 text-body-md leading-7 text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                {plan.featured ? <span className="eyebrow">Popular</span> : null}
              </div>
              <div className="mt-8 text-display-md font-semibold tracking-[-0.06em]">
                {plan.price}
              </div>
              <ul className="mt-6 space-y-3 text-body-sm text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Button className="mt-8 w-full" variant={plan.featured ? "default" : "secondary"}>
                Choose {plan.name}
              </Button>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
