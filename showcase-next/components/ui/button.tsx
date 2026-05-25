import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary";
};

export function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-body-sm font-medium transition-all duration-200",
        variant === "default"
          ? "bg-primary text-primary-foreground shadow-glow-emerald"
          : "border border-border bg-secondary text-secondary-foreground hover:bg-muted",
        className,
      )}
      {...props}
    />
  );
}
