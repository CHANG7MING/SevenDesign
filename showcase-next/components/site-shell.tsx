import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/pricing", label: "Pricing" },
  { href: "/workspace", label: "Workspace" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen px-4 py-6">
      <header className="container mb-6 flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-[rgba(6,8,12,0.58)] px-5 py-4 backdrop-blur-2xl sm:px-6">
        <div className="flex items-center gap-3 font-semibold">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/14 bg-[linear-gradient(135deg,rgba(28,182,140,0.28),rgba(108,180,248,0.22))] text-foreground shadow-glow-emerald">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <span className="block text-sm tracking-[-0.03em] text-white">
              CA7 Design
            </span>
            <span className="block text-[0.68rem] uppercase tracking-[0.18em] text-white/38">
              Anti-slop framework
            </span>
          </div>
        </div>
        <nav className="hidden items-center gap-5 text-body-sm text-white/52 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            className="hidden rounded-full border-white/12 bg-white/[0.04] text-white hover:bg-white/[0.08] sm:inline-flex"
          >
            Library
          </Button>
          <Button className="rounded-full">Start building</Button>
        </div>
      </header>
      <main className="container pb-10">{children}</main>
    </div>
  );
}
