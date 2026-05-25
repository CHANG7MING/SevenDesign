import {
  ArrowRight,
  ChevronDown,
  Github,
  Layers3,
  MoveRight,
  PanelLeft,
  Sparkles,
  SquareTerminal,
  WandSparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = ["Docs", "Components", "Patterns", "Philosophy"];

const capabilities = [
  {
    label: "01",
    title: "Hero systems",
    body: "Scene-driven landing pages with strong silhouette, layered product installation, and premium motion cues.",
  },
  {
    label: "02",
    title: "Interior recipes",
    body: "Docs, pricing, AI workspace, dashboards, and detail pages that still feel like one product family.",
  },
  {
    label: "03",
    title: "Implementation layer",
    body: "Tailwind, shadcn, tokens, structure, and motion direction that translate taste into real components.",
  },
];

const surfaces = [
  {
    name: "Framework homepage",
    copy: "Launch pages that feel like products, not repository wrappers.",
  },
  {
    name: "AI workspace",
    copy: "Believable assistants, result panes, prompts, state changes, and control surfaces.",
  },
  {
    name: "Docs system",
    copy: "Editorial hierarchy, calmer reading rhythm, and sharper navigation logic.",
  },
];

const workflow = [
  "Capture brand posture and page type.",
  "Define scene, hierarchy, and section rhythm.",
  "Map tokens, spacing, type, and motion rules.",
  "Translate into Tailwind, shadcn, and reusable page structure.",
];

const proofPoints = [
  {
    title: "Adaptive by default",
    body: "Interfaces respond to user, context, and intent.",
    icon: Sparkles,
  },
  {
    title: "Composable primitives",
    body: "Build with clarity. Scale with confidence.",
    icon: Layers3,
  },
];

const recipes = [
  {
    title: "Landing systems",
    body: "Oversized hero composition, proof rhythm, and branded motion that avoid generic AI-page tropes.",
  },
  {
    title: "Workspace flows",
    body: "Prompt bars, command surfaces, result cards, and activity states that feel like real software.",
  },
  {
    title: "Pricing + docs",
    body: "Long-form page architecture with cleaner cadence, stronger hierarchy, and calmer chrome.",
  },
];

const tokenRows = [
  ["Background", "#05080d"],
  ["Aurora accent", "#93e9db"],
  ["Ice blue", "#9ecff3"],
  ["Line / border", "rgba(255,255,255,0.10)"],
];

export default function HomePage() {
  return (
    <main className="ca7-page min-h-screen bg-[#05080d] px-4 py-4 text-white sm:px-5 lg:px-6">
      <section className="hero-frame relative overflow-hidden rounded-[34px] border border-white/10 bg-[#04070b] px-6 pb-0 pt-6 shadow-[0_30px_120px_rgba(0,0,0,0.48)] sm:px-8 lg:px-10">
        <div className="hero-noise absolute inset-0 opacity-40" />
        <div className="starfield absolute inset-0 opacity-80" />
        <div className="aurora-ribbon aurora-ribbon-a absolute right-[-12%] top-[1%] h-[420px] w-[72%] opacity-100 lg:h-[500px]" />
        <div className="aurora-ribbon aurora-ribbon-b absolute left-[18%] top-[40%] h-[320px] w-[62%] opacity-90 lg:h-[400px]" />
        <div className="aurora-core absolute left-[38%] top-[26%] h-[360px] w-[22%] opacity-95 lg:h-[480px]" />
        <div className="absolute left-[39%] top-[48%] h-[160px] w-[15%] rounded-full bg-[rgba(132,222,255,0.18)] blur-[70px]" />
        <div className="absolute inset-x-0 bottom-[23%] h-[1px] bg-white/10" />
        <div className="mountain-range mountain-back absolute inset-x-0 bottom-0 h-[30%]" />
        <div className="mountain-range mountain-front absolute inset-x-0 bottom-0 h-[22%]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,transparent,rgba(2,5,9,0.76)_34%,rgba(2,5,9,1))]" />

        <header className="relative z-30 flex items-center justify-between gap-4 py-2">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#87f2d7]/24 bg-[linear-gradient(135deg,rgba(80,236,201,0.22),rgba(104,190,255,0.15))] text-[#aaf3e2] shadow-[0_0_40px_rgba(59,203,180,0.18)]">
              <WandSparkles className="h-5 w-5" />
            </div>
            <p className="text-[1.1rem] font-medium tracking-[-0.03em] text-white">
              CA7 Design
            </p>
          </div>

          <nav className="hidden items-center gap-10 text-[0.98rem] text-white/84 lg:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition-colors hover:text-white">
                {item}
              </a>
            ))}
            <a href="#" className="flex items-center gap-1 transition-colors hover:text-white">
              Resources
              <ChevronDown className="h-4 w-4" />
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden items-center gap-2 text-sm text-white/76 lg:inline-flex"
            >
              <Github className="h-4 w-4" />
              <span>9.2k</span>
            </a>
            <Button
              variant="secondary"
              className="hidden h-12 rounded-full border-white/12 bg-white/[0.035] px-6 text-white hover:bg-white/[0.08] sm:inline-flex"
            >
              Star on GitHub
            </Button>
            <Button className="h-12 rounded-full bg-white px-6 text-black shadow-none hover:bg-white/90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </header>

        <div className="relative z-20 grid gap-12 pb-24 pt-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(660px,1.05fr)] lg:items-center lg:pt-20">
          <div className="max-w-[620px]">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[0.78rem] uppercase tracking-[0.28em] text-white/78">
              Open source AI design framework
            </div>

            <h1 className="mt-8 max-w-[10ch] font-display text-[clamp(4.2rem,8vw,7.9rem)] font-semibold leading-[0.88] tracking-[-0.085em] text-white">
              Design AI
              <span className="block">interfaces</span>
              <span className="block font-editorial text-[clamp(3.8rem,7vw,6.8rem)] font-normal italic tracking-[-0.05em] text-[#d9e9ff]">
                that think.
              </span>
            </h1>

            <p className="mt-7 max-w-[34rem] text-[1.04rem] leading-8 text-white/68 sm:text-[1.14rem]">
              CA7 Design is a production-ready framework for crafting
              intelligent, adaptive experiences. Built for scale. Engineered for
              clarity.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button className="h-12 rounded-full bg-white px-8 text-black shadow-none hover:bg-white/92">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-1 text-[1rem] text-white/88 transition-colors hover:text-white"
              >
                View on GitHub
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[370px] sm:min-h-[420px] lg:min-h-[720px]">
            <article className="hero-panel hero-panel-main absolute bottom-[2%] left-0 right-0 z-20 mx-auto w-full max-w-[420px] rounded-[26px] border border-white/14 bg-[linear-gradient(180deg,rgba(14,20,29,0.9),rgba(8,12,18,0.9))] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.36)] backdrop-blur-[18px] sm:bottom-[4%] lg:bottom-[18%] lg:left-[1%] lg:right-auto lg:mx-0 lg:w-[52%] lg:max-w-none">
              <div className="flex gap-4">
                <div className="flex w-9 flex-col items-center gap-4 pt-1 text-white/46">
                  <Sparkles className="h-4 w-4" />
                  <PanelLeft className="h-4 w-4" />
                  <SquareTerminal className="h-4 w-4" />
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[1.02rem] font-medium text-white">Assistant</span>
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-[0.62rem] uppercase tracking-[0.12em] text-white/44">
                      v2.1
                    </span>
                  </div>
                  <h3 className="mt-7 text-[1.72rem] font-medium leading-[1.12] tracking-[-0.05em] text-white sm:text-[2rem]">
                    Good morning, Alex.
                  </h3>
                  <p className="mt-2 text-[1.03rem] text-white/72">
                    How can I help you today?
                  </p>

                  <div className="mt-6 rounded-[18px] border border-white/10 bg-white/[0.02] p-3">
                    <div className="flex items-center justify-between gap-3 rounded-[16px] border border-white/8 bg-black/16 px-4 py-4 text-sm text-white/60">
                      <span>Analyze user feedback and surface key themes</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/8">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </span>
                    </div>
                    <div className="mt-3 hidden flex-wrap gap-2 sm:flex">
                      {["Summarize", "Generate UI", "Refactor", "Explain"].map((item) => (
                        <span
                          key={item}
                          className="rounded-[10px] border border-white/8 bg-white/[0.02] px-3 py-1.5 text-[0.72rem] text-white/55"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 hidden grid-cols-3 gap-3 sm:grid">
                    {[
                      ["Active Users", "24.6k", "+12.4%"],
                      ["Task Success", "98.1%", "+2.7%"],
                      ["Avg. Response", "142s", "+8.1%"],
                    ].map(([label, value, delta]) => (
                      <div
                        key={label}
                        className="rounded-[16px] border border-white/8 bg-white/[0.02] px-3 py-4"
                      >
                        <p className="text-[0.63rem] uppercase tracking-[0.08em] text-white/40">
                          {label}
                        </p>
                        <p className="mt-3 text-[1.6rem] font-medium tracking-[-0.05em] text-white">
                          {value}
                        </p>
                        <p className="mt-1 text-[0.72rem] text-[#86e5bf]">{delta}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className="hero-panel hero-panel-code absolute left-[47%] top-[11%] z-30 hidden w-[31%] rounded-[24px] border border-white/14 bg-[linear-gradient(180deg,rgba(14,18,28,0.92),rgba(9,12,20,0.9))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-[18px] lg:block">
              <div className="flex items-center justify-between">
                <span className="text-[0.84rem] font-medium text-[#f0d3ff]">App.tsx</span>
                <span className="text-white/32">×</span>
              </div>
              <pre className="mt-5 overflow-hidden font-mono text-[0.74rem] leading-7 text-[#b8cdf1]">
                <code>{`import {\n  CA7Provider,\n  Assistant,\n  useAssistant,\n} from 'ca7/core'\n\nexport default function App() {\n  return (\n    <CA7Provider>\n      <Assistant\n        persona='analyst'\n        theme='system'\n      />\n    </CA7Provider>\n  )\n}\n\nfunction Example() {\n  const { send, status } = useAssistant()\n}`}</code>
              </pre>
            </article>

            <article className="hero-panel hero-panel-inspect absolute right-[-2%] top-[25%] z-10 hidden w-[26%] rounded-[24px] border border-white/14 bg-[linear-gradient(180deg,rgba(16,20,28,0.88),rgba(10,13,20,0.9))] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.34)] backdrop-blur-[18px] lg:block">
              <div className="flex gap-2 text-[0.75rem] text-white/48">
                <span className="rounded-[10px] border border-white/10 px-3 py-1.5 text-white/78">
                  Design
                </span>
                <span className="rounded-[10px] border border-transparent px-3 py-1.5">
                  Inspect
                </span>
              </div>

              <div className="mt-7 space-y-6">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.12em] text-white/40">
                    Theme
                  </p>
                  <div className="mt-3 rounded-[14px] border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/74">
                    CA7 Emerald
                  </div>
                  <div className="mt-4 flex gap-2">
                    {["#2CB68C", "#2B3E4A", "#495C66", "#6B97AB", "#97D7EF", "#DDEFFF"].map(
                      (color) => (
                        <span
                          key={color}
                          className="h-4 w-4 rounded-full border border-white/10"
                          style={{ backgroundColor: color }}
                        />
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.12em] text-white/40">
                    Radius
                  </p>
                  <div className="mt-3 flex items-center justify-between rounded-[14px] border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/74">
                    <span>12</span>
                    <span className="text-white/34">~</span>
                  </div>
                </div>

                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.12em] text-white/40">
                    Typography
                  </p>
                  <div className="mt-3 rounded-[14px] border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/74">
                    Aeonik
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border border-t-0 border-white/10 bg-[linear-gradient(180deg,#03070b,#05090e)] px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,0.72fr)_minmax(300px,0.58fr)] lg:items-start">
          <div>
            <span className="text-[0.76rem] uppercase tracking-[0.28em] text-white/54">
              Designed for real-world complexity
            </span>
            <h2 className="mt-6 max-w-[10ch] font-display text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-white">
              A framework
              <span className="block">for the</span>
              <span className="font-editorial text-[clamp(3rem,4.6vw,5.1rem)] font-normal italic text-[#dce7ff]">
                next era
              </span>
            </h2>
          </div>

          <div className="pt-2 text-[1.04rem] leading-9 text-white/68 lg:pt-24">
            CA7 Design brings structure to the uncertainty of AI. From
            components to interactions to reasoning loops, every layer is
            intentional.
          </div>

          <div className="space-y-6 lg:pt-8">
            {proofPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.03] text-white/80 shadow-[0_0_30px_rgba(255,255,255,0.03)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[1.28rem] font-medium tracking-[-0.04em] text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-base leading-7 text-white/56">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-x border-white/10 bg-[linear-gradient(180deg,#05090e,#060b10)] px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-5">
            <span className="text-[0.76rem] uppercase tracking-[0.28em] text-white/54">
              What ships
            </span>
            <h2 className="max-w-[12ch] font-display text-[clamp(2.6rem,4vw,4.8rem)] font-semibold leading-[0.94] tracking-[-0.07em]">
              One system, many surfaces.
            </h2>
            <p className="max-w-[32rem] text-[1.02rem] leading-8 text-white/64">
              Instead of a single hero trick, CA7 extends the same taste system
              through landing pages, workspaces, docs, and implementation
              patterns.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="glass-panel glass-panel-soft rounded-[26px] px-5 py-6"
              >
                <div className="text-[0.76rem] uppercase tracking-[0.18em] text-white/40">
                  {item.label}
                </div>
                <h3 className="mt-5 text-[1.45rem] font-medium tracking-[-0.04em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/56">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-x border-white/10 bg-[linear-gradient(180deg,#060b10,#060b10)] px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <span className="text-[0.76rem] uppercase tracking-[0.28em] text-white/54">
              Surface recipes
            </span>
            <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(2.6rem,4vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.07em]">
              Pages that feel cut from one world.
            </h2>
            <p className="mt-5 max-w-[34rem] text-[1.02rem] leading-8 text-white/64">
              The library includes scene logic, hierarchy rules, and component
              pressure for the surfaces most teams actually need to ship.
            </p>
          </div>

          <div className="grid gap-4">
            {surfaces.map((item, index) => (
              <article
                key={item.name}
                className="glass-panel rounded-[28px] px-6 py-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="grid gap-5 lg:grid-cols-[88px_minmax(0,1fr)_auto] lg:items-center">
                  <div className="text-[0.78rem] uppercase tracking-[0.18em] text-white/38">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-[1.45rem] font-medium tracking-[-0.04em] text-white">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/56">{item.copy}</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/72">
                    <MoveRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-x border-white/10 bg-[linear-gradient(180deg,#060b10,#071019)] px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <span className="text-[0.76rem] uppercase tracking-[0.28em] text-white/54">
              Workflow
            </span>
            <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(2.5rem,4vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.07em]">
              Direction first. Code second.
            </h2>
          </div>

          <div className="grid gap-4">
            {workflow.map((step, index) => (
              <div
                key={step}
                className="glass-panel glass-panel-rail rounded-[24px] px-5 py-5"
              >
                <div className="grid gap-4 lg:grid-cols-[64px_minmax(0,1fr)] lg:items-center">
                  <span className="text-[0.82rem] uppercase tracking-[0.18em] text-white/40">
                    Step 0{index + 1}
                  </span>
                  <p className="text-[1.05rem] leading-8 text-white/68">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-x border-white/10 bg-[linear-gradient(180deg,#071019,#07111a)] px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <article className="glass-panel rounded-[30px] px-6 py-6">
            <span className="text-[0.76rem] uppercase tracking-[0.24em] text-white/44">
              Recipe library
            </span>
            <div className="mt-6 grid gap-4">
              {recipes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-white/8 bg-white/[0.025] px-5 py-5"
                >
                  <h3 className="text-[1.36rem] font-medium tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/56">{item.body}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel glass-panel-soft rounded-[30px] px-6 py-6">
            <span className="text-[0.76rem] uppercase tracking-[0.24em] text-white/44">
              Token excerpt
            </span>
            <pre className="mt-6 overflow-hidden rounded-[22px] border border-white/8 bg-black/20 p-5 font-mono text-[0.8rem] leading-8 text-[#bed2f0]">
              <code>{`export const theme = {\n  background: "#05080d",\n  surface: "rgba(12,18,26,0.72)",\n  aurora: "#93e9db",\n  ice: "#9ecff3",\n  line: "rgba(255,255,255,0.10)",\n  radius: { card: 26, pill: 999 },\n}`}</code>
            </pre>
            <div className="mt-6 grid gap-3">
              {tokenRows.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-[18px] border border-white/8 bg-white/[0.025] px-4 py-3"
                >
                  <span className="text-sm text-white/58">{label}</span>
                  <span className="text-sm text-white/84">{value}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-x border-white/10 bg-[linear-gradient(180deg,#07111a,#08121b)] px-6 py-16 sm:px-8 lg:px-10">
        <div className="glass-panel rounded-[34px] px-7 py-8 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <span className="text-[0.76rem] uppercase tracking-[0.28em] text-white/44">
                Final layer
              </span>
              <h2 className="mt-5 max-w-[11ch] font-display text-[clamp(2.8rem,4.2vw,5rem)] font-semibold leading-[0.95] tracking-[-0.07em]">
                Build a design system that still feels alive in code.
              </h2>
            </div>
            <div>
              <p className="max-w-[40rem] text-[1.02rem] leading-8 text-white/64">
                CA7 Design is meant to be used, forked, extended, and translated
                into real interfaces. Not just admired as a moodboard.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button className="h-12 rounded-full bg-white px-8 text-black shadow-none hover:bg-white/92">
                  Open the framework
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  className="h-12 rounded-full border-white/12 bg-white/[0.035] px-8 text-white hover:bg-white/[0.08]"
                >
                  Browse recipes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="rounded-b-[34px] border border-t-0 border-white/10 bg-[linear-gradient(180deg,#08121b,#071019)] px-6 py-8 text-sm text-white/44 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span>CA7 Design</span>
          <span>Anti-slop framework for AI-built interfaces.</span>
        </div>
      </footer>
    </main>
  );
}
