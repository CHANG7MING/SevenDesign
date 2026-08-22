<p align="center">
  <img src="./assets/readme/hero.svg" width="100%" alt="SEVENDESIGN：面向智能体与前端团队的设计操作系统" />
</p>

<p align="center">
  <strong>SEVENDESIGN</strong><br>
  面向 AI Agent 与前端团队的设计系统、界面构建与质量复审 Skill
</p>

<p align="center">
  <a href="./skills/seven-design/SKILL.md">主入口</a> ·
  <a href="./USAGE.md">使用指南</a> ·
  <a href="./skills/component-intelligence/SKILL.md">Component Intelligence</a> ·
  <a href="./skills/react-bits/SKILL.md">React Bits / Vue Bits</a> ·
  <a href="./skills/team-mode/SKILL.md">团队模式</a> ·
  <a href="./DESIGN.md">设计系统</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-actively%20shaping-171817?style=flat-square&labelColor=d8ff47&color=171817" alt="状态：持续完善中" />
  <img src="https://img.shields.io/badge/license-MIT-171817?style=flat-square&labelColor=f5f5f0&color=171817" alt="MIT 许可证" />
  <img src="https://img.shields.io/badge/runtime-Codex%20Skills-171817?style=flat-square&labelColor=6d91bd&color=171817" alt="运行环境：Codex Skills" />
  <img src="https://img.shields.io/badge/format-SKILL.md%20%C2%B7%20presets-171817?style=flat-square&labelColor=8069a5&color=171817" alt="形式：SKILL.md 与预设" />
</p>

SEVENDESIGN 是一套面向 AI 智能体与前端团队、以产品思维为核心的设计操作系统。

它把松散的产品需求转化为明确的视觉方向、统一的界面系统、可解释的组件选型和可复审的实现路径，并结合 Apple 风格的流畅交互、Emil Kowalski 的动效工艺、React 默认与 Vue 可选的公开 Bits 组件，以及探索者 / 执行者 / 复审者的团队协作模型。组件不会再由用户先指定来源，而是由 Component Intelligence 先理解产品任务，再在宿主系统、shadcn/ui、Radix UI、React Bits 和 Vue Bits 之间分配职责。

## 安装与入口

`skills/seven-design/SKILL.md` 是 SEVENDESIGN 的统一入口，负责按任务路由到核心、工艺、上下文、React Bits 扩展和团队 Skill。现有 `skills/*/SKILL.md` 仍然可以独立安装。

使用 Codex Skill 安装器时，选择总入口路径：

```text
--path skills/seven-design
```

需要完整套件时，在同一次安装中追加需要的路径，例如 `skills/design-core`、`skills/component-intelligence`、`skills/react-bits`、`skills/apple-design`、`skills/emil-design-eng`、`skills/review-animations` 和 `skills/team-mode`。只安装总入口也能工作，但仓库内的具体配套 Skill 需要另外安装后才能被加载。

## 从这里开始

如果你只有五分钟：

1. 先阅读 [`skills/seven-design/SKILL.md`](./skills/seven-design/SKILL.md) 和 [`USAGE.md`](./USAGE.md)。
2. 在 [`quickstart/CHOOSE-YOUR-STACK.md`](./quickstart/CHOOSE-YOUR-STACK.md) 中选择一条方向。
3. 将 [`DESIGN.md`](./DESIGN.md)、[`TOKENS.md`](./TOKENS.md)、[`skills/design-core/SKILL.md`](./skills/design-core/SKILL.md) 与 [`skills/component-intelligence/SKILL.md`](./skills/component-intelligence/SKILL.md) 交给智能体，再加入一个匹配的上下文技能。
4. 只有 Component Intelligence 选中 Bits 作为表达层时，才加入 [`skills/react-bits/SKILL.md`](./skills/react-bits/SKILL.md)。
5. 在宣布完成前，使用 [`PRE-FLIGHT-CHECKLIST.md`](./PRE-FLIGHT-CHECKLIST.md) 和对应的动效复审入口进行检查。

对于较大的任务，再加入 [`skills/team-mode/SKILL.md`](./skills/team-mode/SKILL.md) 以及本地路由指南 [`skills/team-mode/references/seven-design-routing.md`](./skills/team-mode/references/seven-design-routing.md)。

## 质量闭环

SevenDesign 现在不只检查规则和代码，还增加了三层可验证质量闭环：

1. [`benchmarks/`](./benchmarks/)：20 个覆盖 AI SaaS、Dashboard、Landing Page、Editor、Admin、Portfolio、Mobile Web、Documentation、Pricing 和 AI Workspace 的真实任务，用来测试 Component Intelligence 是否正确选择来源，并解释为什么选、为什么不选。
2. [`visual-qa`](./skills/visual-qa/SKILL.md)：对可运行页面执行“截图 → Visual Audit → 修改 → 再截图”，覆盖桌面、移动和 reduced-motion 状态。
3. [`resolve-context.py`](./skills/seven-design/scripts/resolve-context.py)：按需加载 Skill、Reference 和 Catalog，默认排除完整 registry、`llms.txt` 和无关源码。

当前 benchmark 的“决策分”与最终质量分分开计算。只有完成 Visual QA、响应式、无障碍和实现验证后，才允许宣称达到 9.5/10；没有截图证据时不会把规则判断分冒充成完整质量分。

## 核心循环

```mermaid
flowchart LR
  A[需求] --> B[探索者\n收集证据]
  B --> C[主线程\n设计契约]
  C --> D[执行者\n完成切片]
  D --> E[渲染结果]
  E --> F[复审者\n全新上下文]
  F --> G[主线程\n最终验收]
  G --> H[交付]
```

团队模式根据价值决定是否启用，并不是强制流程。小型的文案或 token 修改留在主线程即可；只有当独立证据收集、边界清晰的实现或全新复审确实能带来质量收益时，才进行并行协作。

## 为什么需要它

许多生成式界面虽然技术上完整，却在视觉上彼此雷同。SEVENDESIGN 把关键决策显式化：

- **先定方向，再做装饰**：先确定产品语气、信息密度、温度、布局变化和页面原型，再处理视觉细节。
- **用系统代替截图**：使用语义化 token、真实状态、可复用原语和可信的内容。
- **让动效有理由**：用流畅且可中断的动效表达反馈、连续性、方向感和解释；高频操作中则移除动效。
- **让 React Bits 有职责**：公开组件只能服务明确的 reveal、focus、feedback、state、media 或 showcase 任务，不能代替产品层级。
- **保持同一套视觉 DNA**：首页、工作区、文档、定价页和响应式状态，都应像由同一个产品团队创作。
- **通过复审获得批准**：交付前检查渲染结果、焦点、响应式行为、减少动效设置和常见 AI 模式。

## 选择合适的层级

| 层级 | 适用场景 | 从这里开始 |
| --- | --- | --- |
| 基础 | 原则、架构、token、页面构成 | [`DESIGN.md`](./DESIGN.md) · [`TOKENS.md`](./TOKENS.md) |
| 核心执行 | 检查 → 定向 → 构建 → 验证 | [`skills/design-core/SKILL.md`](./skills/design-core/SKILL.md) |
| 组件智能 | 从产品任务统一选择 foundation / behavior / expression 来源 | [`skills/component-intelligence/SKILL.md`](./skills/component-intelligence/SKILL.md) |
| 工艺 | UI 精修、组件质感、动效决策 | [`emil-design-eng`](./skills/emil-design-eng/SKILL.md) |
| 流畅交互 | 手势、弹簧、惯性、字体、材质 | [`apple-design`](./skills/apple-design/SKILL.md) |
| Bits 表达层 | 经 Component Intelligence 选中的 React Bits / Vue Bits 公开组件、reveal、状态和媒体编排 | [`component-intelligence`](./skills/component-intelligence/SKILL.md) → [`react-bits`](./skills/react-bits/SKILL.md) |
| 动效复审 | 产品级编排复审与代码级严格审查 | [`motion-review`](./skills/motion-review/SKILL.md) · [`review-animations`](./skills/review-animations/SKILL.md) |
| 上下文 | AI、开发者工具、文档 / 定价、高端发布 | [`skills/`](./skills) |
| 团队 | 证据、边界执行、全新复审 | [`team-mode`](./skills/team-mode/SKILL.md) |
| 防线 | 反套路、质量、无障碍、可构建性 | [`FORBIDDEN-PATTERNS.md`](./FORBIDDEN-PATTERNS.md) · [`PRE-FLIGHT-CHECKLIST.md`](./PRE-FLIGHT-CHECKLIST.md) |
| 质量闭环 | 20-case Benchmark、截图审计、按需上下文加载 | [`benchmarks/`](./benchmarks) · [`visual-qa`](./skills/visual-qa/SKILL.md) · [`resolve-context.py`](./skills/seven-design/scripts/resolve-context.py) |

## 选择上下文技能

| 你正在构建…… | 使用 |
| --- | --- |
| AI 对话、智能体构建器、副驾驶、多模态工具 | [`ai-native`](./skills/ai-native/SKILL.md) |
| API 平台、基础设施控制台、技术仪表盘 | [`devtool-pro`](./skills/devtool-pro/SKILL.md) |
| 文档、帮助中心、引导流程、定价页 | [`docs-pricing`](./skills/docs-pricing/SKILL.md) |
| 发布页、硬件展示、汽车、高端产品 | [`luxe-landing`](./skills/luxe-landing/SKILL.md) |
| 个人网站 | [`apple-design`](./skills/apple-design/SKILL.md) + [`luxe-landing`](./skills/luxe-landing/SKILL.md) |

## React Bits / Vue Bits 接入边界

SevenDesign 已经在 skill、设计协议和本地资源层真正接入 [React Bits](https://github.com/DavidHDev/react-bits) 与 [Vue Bits](https://github.com/DavidHDev/vue-bits)。两者都不是默认强行加载的组件库，而是由 [`Component Intelligence`](./skills/component-intelligence/SKILL.md) 根据产品任务决定是否进入 expression 层。React 是默认实现框架；只有用户明确使用 Vue / Nuxt，或宿主项目证据明确指向 Vue 时，才切换到 Vue Bits。

### React Bits 公开资源

仓库内包含官方公开 React registry 的 pinned snapshot，以及 6 组可直接复制或适配的公开组件源码：

- [`AnimatedList-TS-CSS`](./skills/react-bits/catalog/components/AnimatedList-TS-CSS/)：结果或列表的低频 reveal
- [`BlurText-TS-CSS`](./skills/react-bits/catalog/components/BlurText-TS-CSS/)：解释、结果和 onboarding reveal
- [`CountUp-JS-CSS`](./skills/react-bits/catalog/components/CountUp-JS-CSS/)：少量关键指标强调
- [`FlowingMenu-JS-CSS`](./skills/react-bits/catalog/components/FlowingMenu-JS-CSS/)：编排型导航或 showcase
- [`SpotlightCard-JS-CSS`](./skills/react-bits/catalog/components/SpotlightCard-JS-CSS/)：低频 showcase 卡片的 pointer focus
- [`TiltedCard-JS-TW`](./skills/react-bits/catalog/components/TiltedCard-JS-TW/)：产品或媒体 showcase

### Vue Bits 公开资源

Vue Bits 当前是 selective public snapshot，不是完整源码镜像。仓库内已整理 2 组可直接复制或适配的 Vue 组件源码：

- [`BlurText`](./skills/react-bits/catalog/vue/components/BlurText/)：短标题或能力说明 reveal，依赖 `motion-v`
- [`SpotlightCard`](./skills/react-bits/catalog/vue/components/SpotlightCard/)：次级证明或 showcase focus，无额外依赖

Vue 的资源入口见 [`skills/react-bits/catalog/vue/README.md`](./skills/react-bits/catalog/vue/README.md) 和 [`source-manifest.json`](./skills/react-bits/catalog/vue/source-manifest.json)。Vue Bits 源码只在 framework 已解析为 Vue / Nuxt 后使用，不把 React 源码静默移植成 Vue；本地 registry 中存在的其他条目也不代表已经被 materialize。

先按 [`skills/component-intelligence/SKILL.md`](./skills/component-intelligence/SKILL.md) 解析产品任务和来源职责，再按 [`skills/react-bits/references/framework-selection.md`](./skills/react-bits/references/framework-selection.md) 解析 React 或 Vue。之后只读取 resolved framework 对应的 catalog、registry 和真实源码，再复制到宿主项目并做 token、依赖、响应式和 reduced-motion 适配。catalog 是 Skill 的公开资源层，不是 SevenDesign 的 runtime dependency，也不能直接从宿主项目 import。

接入时遵循五条边界：

1. 先写产品任务，再选组件；没有明确任务就不引入动效。
2. 先判断 Bits 是否真的适合表达层；shadcn/ui、Radix UI 与宿主系统仍可分别承担基础层和行为层。
3. 优先使用本地 pinned public catalog；未内置的组件再按官方 public registry 记录公开安装路径，并映射到本项目的 token、字体、间距、焦点和状态。
4. 使用 `micro`、`system`、`signature` 三档动效预算；默认每个 viewport 只保留一个 signature 动效。
5. Pro 如果无法合法获得，只参考公开可见的分类、构图和工作流，不复制收费源码、私有素材或 gated template，也不声称本地已经安装了 Pro。

来源、commit、license 和刷新边界见 [`skills/react-bits/UPSTREAM.md`](./skills/react-bits/UPSTREAM.md)、[`skills/react-bits/REACT-BITS-LICENSE.md`](./skills/react-bits/REACT-BITS-LICENSE.md)、[`skills/react-bits/VUE-BITS-LICENSE.md`](./skills/react-bits/VUE-BITS-LICENSE.md) 和 [`skills/react-bits/catalog/frameworks.json`](./skills/react-bits/catalog/frameworks.json)。Token 控制规则见 [`skills/react-bits/references/token-budget.md`](./skills/react-bits/references/token-budget.md)：默认只读紧凑矩阵和命中的源码，不整份加载 registry 或 `llms.txt`。产品级编排使用 [`skills/motion-review/SKILL.md`](./skills/motion-review/SKILL.md)，需要寻找动画机会时使用 [`skills/find-animation-opportunities/SKILL.md`](./skills/find-animation-opportunities/SKILL.md)，审计现有动效时使用 [`skills/improve-animations/SKILL.md`](./skills/improve-animations/SKILL.md)，动效代码级严格复审使用 [`skills/review-animations/SKILL.md`](./skills/review-animations/SKILL.md)。

## 设计工艺基线

SEVENDESIGN 完整引入了 [`attentiondotnet/emilkowalski_skills`](https://github.com/attentiondotnet/emilkowalski_skills) 的设计工程技能：

- [`emil-design-eng`](./skills/emil-design-eng/SKILL.md)：高完成度 UI 精修与动效决策
- [`apple-design`](./skills/apple-design/SKILL.md)：响应、直接操控、弹簧、惯性、材质、字体与减少动效
- [`animation-vocabulary`](./skills/animation-vocabulary/SKILL.md)：描述动效的精确词汇
- [`review-animations`](./skills/review-animations/SKILL.md)：严格的动效复审与结论

上游文件保持原样；SEVENDESIGN 只在其周围补充产品上下文与路由。详见 [`skills/UPSTREAM-SOURCE.md`](./skills/UPSTREAM-SOURCE.md)。

## 包含内容

- AI 原生、开发者工具、温暖 SaaS、创意动效、金融信任、高端性能和产品化框架等方向的预设。
- Apple、Linear、Notion、Stripe、Supabase、Vercel、Tesla 和 Runway 的品牌参考。
- 发布页、仪表盘、AI 工作区、文档、定价页、框架首页等页面原型。
- 可复用的组件配方，以及 Tailwind / shadcn / Radix 示例。
- Component Intelligence 跨来源选型层：基于产品任务在宿主系统、shadcn/ui、Radix UI、React Bits 和 Vue Bits 之间做 foundation / behavior / expression 分工。
- React Bits / Vue Bits 官方公开 registry 快照、基于产品任务与框架的智能选型协议、React 默认与 Vue 可选的公开组件源码、组件 provenance、动效分级、token 适配和 Pro 边界。
- React Bits 官方的动画机会发现与动效改进审计 Skill。
- 一套包含调度包、单写入者归属、全新复审、运行时就绪门槛和失败恢复的团队模式路由契约。
- 一个小型的 [`personal-site/`](./personal-site/) Apple 风格首页原型。

## 可直接使用的提示词

```text
请为此任务使用 $seven-design、$component-intelligence、$team-mode 和 $design-core。

为技术团队构建一个响应式 AI 工作区。
使用 $ai-native 处理产品状态，使用 $emil-design-eng 处理 UI 工艺，
使用 $apple-design 处理面板、手势和可中断动效。
先让 Component Intelligence 判断 foundation、behavior、expression 的来源。只有在某个公开 React Bits 组件能承担明确的 reveal、state、media
或 showcase 任务时，才使用 $react-bits；最后用 $review-animations
复审动效代码。

先从 DESIGN.md、TOKENS.md、AI 原生预设、AI 工作区页面原型
以及现有组件配方中收集证据。
未解决的产品与视觉决策保留在主线程中。
只有当设计契约和验收检查明确后才开始实现。
最后完成桌面端 / 移动端渲染检查，以及全新的动效 / 无障碍复审。
```

## 实现

进行真实前端工作时，请优先使用已有 token 和示例，不要另起一套平行系统：

- [`implementation/TAILWIND-THEME.md`](./implementation/TAILWIND-THEME.md)
- [`implementation/COMPONENT-MAPPING.md`](./implementation/COMPONENT-MAPPING.md)
- [`implementation/SHADCN-GUIDE.md`](./implementation/SHADCN-GUIDE.md)
- [`examples/`](./examples)

这套库在原则上与框架无关；Tailwind CSS、shadcn/ui 和 Radix 是参考实现技术栈。React Bits 的公开组件源码已按选择性快照内置，适合复制或适配到宿主项目；本仓库不复制整套上游实现，也不包含 Pro、私有素材或 gated template。

## 质量门槛

在交付设计前，请运行[预检清单](./PRE-FLIGHT-CHECKLIST.md)。尤其要做到：

- 让产品任务和下一步行动一眼可见；
- 保持首页与内部页面的视觉连续性；
- 定义悬停、按下、焦点可见、禁用、加载、空状态和错误状态；
- 任何 React Bits 动效都必须有产品任务、触发器、编排、可中断行为和 reduced-motion 降级；
- 尊重 `prefers-reduced-motion`、`prefers-reduced-transparency` 和触控输入；
- 从高频键盘操作中移除动效；
- 在宽屏和窄屏尺寸下检查真实渲染结果；
- 拒绝通用 SaaS、伪终端、先发光再解释和伪高级感模式。

## 贡献

只有当一个新增内容能够教会他人可复用的决策时，才添加品牌、页面原型、组件配方、预设、实现示例或技能。请遵循 [`CONTRIBUTING.md`](./CONTRIBUTING.md)，并让新增材料保持产品特异性。

### 上游贡献者

感谢 [DavidHDev](https://github.com/DavidHDev) 创建并维护 [React Bits](https://github.com/DavidHDev/react-bits) 与 [Vue Bits](https://github.com/DavidHDev/vue-bits)。SevenDesign 使用这两个项目的公开组件、动效表达和 registry 作为 Component Intelligence 的上游参考与可选表达层来源。

这是一项上游致谢，不代表 DavidHDev 是 SevenDesign 的直接维护者或本仓库的提交者。GitHub 右侧的 `Contributors` 列表由真实提交、Pull Request 或共同作者记录自动生成，不能通过 README 手动添加。

## 当前状态

SevenDesign 现在可以直接作为：

- AI Agent 的设计 skill 库
- 前端团队的设计协议
- React / Tailwind 项目的 UI starter
- 带 React Bits 风格动效与质量门禁的产品设计工作流

来使用。

## 许可证

SEVENDESIGN 采用 MIT 许可证。引入的上游源文件保留各自的声明，详见 [`skills/EMILKOWALSKI-LICENSE.txt`](./skills/EMILKOWALSKI-LICENSE.txt)、[`skills/TEAM-MODE-LICENSE.txt`](./skills/TEAM-MODE-LICENSE.txt)、[`skills/react-bits/REACT-BITS-LICENSE.md`](./skills/react-bits/REACT-BITS-LICENSE.md) 和 [`skills/react-bits/VUE-BITS-LICENSE.md`](./skills/react-bits/VUE-BITS-LICENSE.md)。
