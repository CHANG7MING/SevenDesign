import { ArrowRight } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta?: string;
  className?: string;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta = "View docs",
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-[32px] border border-spotlight-border bg-background px-6 py-16 shadow-glow-blue sm:px-10 lg:px-14",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--hero-glow),transparent_35%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex rounded-pill border border-spotlight-border bg-hero-surface px-3 py-1 text-caption font-medium uppercase tracking-[0.12em] text-foreground">
            {eyebrow}
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-display-lg font-semibold leading-[0.95] tracking-tight text-foreground">
              {title}
            </h1>
            <p className="max-w-xl text-body-lg text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="gap-2">
              {primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="secondary">
              {secondaryCta}
            </Button>
          </div>
        </div>
        <div className="rounded-[28px] border border-spotlight-border bg-hero-surface p-4 backdrop-blur-xl">
          <div className="rounded-[24px] border border-border bg-card p-4 shadow-elev-2">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-danger" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning" />
              <span className="h-2.5 w-2.5 rounded-full bg-success" />
              <span className="ml-2 font-mono text-caption text-muted-foreground">
                ai-workspace.tsx
              </span>
            </div>
            <div className="space-y-4 pt-4">
              <div className="rounded-xl border border-border bg-code-surface p-4 font-mono text-mono-sm text-muted-foreground">
                {">"} Generate a premium AI-native dashboard shell
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-caption uppercase tracking-[0.12em] text-muted-foreground">
                    Latency
                  </p>
                  <p className="pt-2 font-display text-title-lg font-semibold text-foreground">
                    132ms
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-caption uppercase tracking-[0.12em] text-muted-foreground">
                    Runs today
                  </p>
                  <p className="pt-2 font-display text-title-lg font-semibold text-foreground">
                    2.4k
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
