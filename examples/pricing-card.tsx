import { Check } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel?: string;
  featured?: boolean;
  className?: string;
};

export function PricingCard({
  name,
  price,
  description,
  features,
  ctaLabel = "Get started",
  featured = false,
  className,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col rounded-2xl",
        featured &&
          "border-spotlight-border bg-gradient-to-b from-card to-card shadow-glow-blue",
        className,
      )}
    >
      <CardHeader className="gap-3">
        <div className="flex items-center justify-between gap-3">
          <CardTitle>{name}</CardTitle>
          {featured ? (
            <span className="rounded-pill border border-spotlight-border bg-hero-surface px-3 py-1 text-caption font-medium uppercase tracking-[0.12em] text-foreground">
              Popular
            </span>
          ) : null}
        </div>
        <CardDescription>{description}</CardDescription>
        <div className="flex items-end gap-2 pt-2">
          <span className="font-display text-display-md font-semibold leading-none">
            {price}
          </span>
          <span className="pb-1 text-body-sm text-muted-foreground">/ month</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-body-sm">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-card-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={featured ? "default" : "secondary"}
          size="lg"
        >
          {ctaLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}
