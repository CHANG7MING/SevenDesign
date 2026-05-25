<p align="center">
  <strong>SEVEN-DESIGN</strong>
</p>

<p align="center">
  <em>面向 AI Agent 与前端团队的开箱即用 DESIGN.md 工作流库</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Design.md-Plug--and--Play-111827?style=for-the-badge&labelColor=0f172a&color=10b981" alt="Plug and Play DESIGN.md" />
  <img src="https://img.shields.io/badge/Stack-Tailwind%20%C2%B7%20shadcn%20%C2%B7%20Radix-111827?style=for-the-badge&labelColor=0f172a&color=3b82f6" alt="Stack" />
  <img src="https://img.shields.io/badge/License-MIT-111827?style=for-the-badge&labelColor=0f172a&color=f59e0b" alt="MIT License" />
</p>

一个可直接上手的 `DESIGN.md` 设计库，适用于：

- AI 产品
- 开发者工具
- 后端 / DevOps 产品
- SaaS 应用
- 文档系统
- 定价页
- 高级落地页

这不是单篇设计说明，而是一整套可执行工作流，包含：

- 根设计契约
- semantic token 系统
- brand recipes
- page archetypes
- component recipes
- skill-style 工作流
- prompt packs
- starter kits
- 可复制代码样板

<p align="center"><sub><a href="#快速开始">快速开始</a> · <a href="#如何使用">如何使用</a> · <a href="#skills--工作流">Skills / 工作流</a> · <a href="#starter-kits">Starter Kits</a> · <a href="#实现层">实现层</a> · <a href="#常见问题">FAQ</a> · <a href="#许可证">许可证</a></sub></p>

## 快速开始

最快路径：

1. 看 [`START-HERE.md`](./START-HERE.md)
2. 在 [`quickstart/`](./quickstart) 里选方向
3. 在 [`starter-kits/`](./starter-kits) 里选一个 starter
4. 从 [`prompt-packs/`](./prompt-packs) 里拿 prompt
5. 需要代码时直接复制 [`examples/`](./examples) 里的文件

如果你只想 5 分钟内跑起来，直接读：

- [`START-HERE.md`](./START-HERE.md)
- [`quickstart/CHOOSE-YOUR-STACK.md`](./quickstart/CHOOSE-YOUR-STACK.md)
- [`prompt-packs/core-prompts.md`](./prompt-packs/core-prompts.md)

## 如何使用

这个库支持三种主要使用方式。

### 1. 直接喂给 AI

适合：

- ChatGPT
- Codex
- Cursor
- Claude Code
- 其他能读取 markdown / skill 的 agent

推荐组合：

- [`DESIGN.md`](./DESIGN.md)
- [`TOKENS.md`](./TOKENS.md)
- 一个 [`skills/`](./skills) 里的 `SKILL.md`
- 一个 [`prompt-packs/`](./prompt-packs) 里的 prompt

### 2. 作为真实前端项目 starter

适合：

- Tailwind CSS
- `shadcn/ui`
- `radix ui`
- 需要接入 `ant-design` 的数据密集后台

推荐起步文件：

- [`examples/tailwind.config.ts`](./examples/tailwind.config.ts)
- [`examples/globals.css`](./examples/globals.css)
- [`examples/components.json`](./examples/components.json)
- [`examples/utils.ts`](./examples/utils.ts)

### 3. 作为团队内部设计协议

适合：

- 给设计师、前端、AI agent 统一语言
- 做新项目 kickoff
- 做现有产品 redesign

推荐入口：

- [`WORKFLOW.md`](./WORKFLOW.md)
- [`FORBIDDEN-PATTERNS.md`](./FORBIDDEN-PATTERNS.md)
- [`PRE-FLIGHT-CHECKLIST.md`](./PRE-FLIGHT-CHECKLIST.md)

## Skills / 工作流

这个仓库已经整理成接近 `skill` 的形态。每个 skill 负责一类场景，不需要一次全用。

| Skill | 说明 |
| --- | --- |
| [`skills/design-core/SKILL.md`](./skills/design-core/SKILL.md) | 总控 skill，定义参数 dial、反模板规则、统一设计执行方式 |
| [`skills/ai-native/SKILL.md`](./skills/ai-native/SKILL.md) | AI 产品、agent builder、生成式工具 |
| [`skills/devtool-pro/SKILL.md`](./skills/devtool-pro/SKILL.md) | 开发者工具、后台平台、API / infra console |
| [`skills/docs-pricing/SKILL.md`](./skills/docs-pricing/SKILL.md) | 文档系统、定价页、docs-first SaaS |
| [`skills/luxe-landing/SKILL.md`](./skills/luxe-landing/SKILL.md) | 高级落地页、硬件发布、汽车 / prestige 风格 |

### 关键参数

核心 skill 支持这些可调参数：

- `VISUAL_DENSITY`
- `MOTION_INTENSITY`
- `BRAND_WARMTH`
- `LAYOUT_VARIANCE`
- `ENTERPRISE_DENSITY`

## Starter Kits

如果你不想自己拼装，直接用 starter kit。

| Starter Kit | 适用场景 |
| --- | --- |
| [`starter-kits/ai-saas-starter.md`](./starter-kits/ai-saas-starter.md) | AI SaaS、聊天、agent、模型工具 |
| [`starter-kits/devtool-starter.md`](./starter-kits/devtool-starter.md) | Devtool、后台、观测、平台控制台 |
| [`starter-kits/docs-pricing-starter.md`](./starter-kits/docs-pricing-starter.md) | 文档产品站、定价页、帮助中心 |
| [`starter-kits/framework-homepage-starter.md`](./starter-kits/framework-homepage-starter.md) | 设计框架、skill 产品、workflow 工具官网 |

## Prompt Packs

可直接复制给 AI 的 prompt：

- [`prompt-packs/core-prompts.md`](./prompt-packs/core-prompts.md)
- [`prompt-packs/landing-page-prompts.md`](./prompt-packs/landing-page-prompts.md)
- [`prompt-packs/app-shell-prompts.md`](./prompt-packs/app-shell-prompts.md)
- [`prompt-packs/framework-homepage-prompts.md`](./prompt-packs/framework-homepage-prompts.md)

## 设计资产层

### 核心设计契约

- [`DESIGN.md`](./DESIGN.md)
- [`TOKENS.md`](./TOKENS.md)
- [`WORKFLOW.md`](./WORKFLOW.md)

### Guardrails

- [`FORBIDDEN-PATTERNS.md`](./FORBIDDEN-PATTERNS.md)
- [`PRE-FLIGHT-CHECKLIST.md`](./PRE-FLIGHT-CHECKLIST.md)

### 品牌 Recipes

- [`brands/vercel.md`](./brands/vercel.md)
- [`brands/stripe.md`](./brands/stripe.md)
- [`brands/runwayml.md`](./brands/runwayml.md)
- [`brands/apple.md`](./brands/apple.md)
- [`brands/supabase.md`](./brands/supabase.md)
- [`brands/linear.md`](./brands/linear.md)
- [`brands/notion.md`](./brands/notion.md)
- [`brands/tesla.md`](./brands/tesla.md)

### 页面 Archetypes

- [`archetypes/landing-hero.md`](./archetypes/landing-hero.md)
- [`archetypes/framework-homepage.md`](./archetypes/framework-homepage.md)
- [`archetypes/devtool-dashboard.md`](./archetypes/devtool-dashboard.md)
- [`archetypes/ai-workspace.md`](./archetypes/ai-workspace.md)
- [`archetypes/docs-system.md`](./archetypes/docs-system.md)
- [`archetypes/pricing-page.md`](./archetypes/pricing-page.md)

### 组件 Recipes

- [`components/button.md`](./components/button.md)
- [`components/pricing-card.md`](./components/pricing-card.md)
- [`components/data-table.md`](./components/data-table.md)
- [`components/command-palette.md`](./components/command-palette.md)

## 实现层

如果你要真正落到代码，优先看这里：

- [`implementation/TAILWIND-THEME.md`](./implementation/TAILWIND-THEME.md)
- [`implementation/COMPONENT-MAPPING.md`](./implementation/COMPONENT-MAPPING.md)
- [`implementation/SHADCN-GUIDE.md`](./implementation/SHADCN-GUIDE.md)

可直接复制的实现样板：

- [`examples/theme.css`](./examples/theme.css)
- [`examples/tailwind.config.ts`](./examples/tailwind.config.ts)
- [`examples/globals.css`](./examples/globals.css)
- [`examples/button.tsx`](./examples/button.tsx)
- [`examples/card.tsx`](./examples/card.tsx)
- [`examples/dialog.tsx`](./examples/dialog.tsx)
- [`examples/command.tsx`](./examples/command.tsx)
- [`examples/input.tsx`](./examples/input.tsx)
- [`examples/tabs.tsx`](./examples/tabs.tsx)
- [`examples/table-shell.tsx`](./examples/table-shell.tsx)
- [`examples/sidebar-nav.tsx`](./examples/sidebar-nav.tsx)
- [`examples/hero-section.tsx`](./examples/hero-section.tsx)
- [`examples/pricing-card.tsx`](./examples/pricing-card.tsx)

## 常见问题

**这和普通 `DESIGN.md` 有什么区别？**  
这套库不只是写风格描述，而是把设计方向、token、页面 archetype、组件 recipe、workflow、prompt 和代码样板全部串起来了。

**能不能直接给 ChatGPT / Codex / Cursor / Claude 用？**  
可以。最简单的方法是把 [`DESIGN.md`](./DESIGN.md)、[`TOKENS.md`](./TOKENS.md)、一个 [`skills/`](./skills) 里的 `SKILL.md` 和一个 [`prompt-packs/`](./prompt-packs) 里的 prompt 一起给它。

**ReactBits、21st.dev 会直接用到吗？**  
会参考它们的动效语言和展示型 section 风格，但这套库默认不是强依赖它们。它们更适合 hero、showcase、实验性高影响模块，不适合整站滥用。

**能不能用于 React 之外的技术栈？**  
可以。设计规则本身是框架无关的，只是当前实现样板优先给了 Tailwind + `shadcn/ui` + `radix ui`。

**如果我要继续扩展这个库，应该从哪开始？**  
看 [`templates/`](./templates)、[`CONTRIBUTING.md`](./CONTRIBUTING.md) 和 [`LIBRARY-INDEX.md`](./LIBRARY-INDEX.md)。

## 贡献

欢迎继续扩品牌、页面 archetype、组件 recipe、实现样板和 skill 变体。

详见 [`CONTRIBUTING.md`](./CONTRIBUTING.md)。

## 状态

这个仓库现在已经可以直接作为：

- AI 设计工作流库
- 前端项目 starter
- 团队内部设计协议
- skill-style 设计规范库

来使用。

## 许可证

[MIT License](./LICENSE)
