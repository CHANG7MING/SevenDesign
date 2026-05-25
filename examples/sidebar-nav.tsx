import { ChevronRight } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

type SidebarNavItem = {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  badge?: string;
};

type SidebarNavProps = {
  title?: string;
  items: SidebarNavItem[];
  className?: string;
};

export function SidebarNav({
  title = "Workspace",
  items,
  className,
}: SidebarNavProps) {
  return (
    <aside
      className={cn(
        "flex w-full max-w-[280px] flex-col rounded-2xl border border-border bg-sidebar px-3 py-3 text-foreground shadow-elev-1",
        className,
      )}
    >
      <div className="px-3 py-3">
        <p className="text-caption font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {title}
        </p>
      </div>
      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-body-sm transition-colors duration-fast ease-standard",
              item.active
                ? "bg-card text-foreground shadow-elev-1"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
            type="button"
          >
            <span className="flex h-5 w-5 items-center justify-center">
              {item.icon ?? <ChevronRight className="h-4 w-4" />}
            </span>
            <span className="flex-1">{item.label}</span>
            {item.badge ? (
              <span className="rounded-pill border border-border px-2 py-0.5 text-caption text-muted-foreground">
                {item.badge}
              </span>
            ) : null}
          </button>
        ))}
      </nav>
    </aside>
  );
}
