---
name: seven-design
description: Use when an AI agent or frontend team needs to design, build, polish, or review a product interface, personal site, AI workspace, developer tool, documentation surface, pricing flow, launch page, or React Bits motion integration with SevenDesign.
---

# SEVENDESIGN 总入口

将本 Skill 作为入口，根据任务加载最少的一组 SevenDesign 子 Skill。不要默认加载整个仓库；先确定产品目标、页面范围、已有代码和验收标准，再按路由表补充上下文。

## 启动顺序

在仓库副本中工作时，按以下顺序读取：

1. `DESIGN.md`：产品语气、信息层级、布局和视觉原则。
2. `TOKENS.md`：颜色、字体、间距、层级和动效 token。
3. `skills/design-core/SKILL.md`：检查 → 定向 → 构建 → 验证的主循环。
4. `skills/seven-design/scripts/resolve-context.py`：先解析本次任务需要的最小 Skill、Reference 和 Catalog 集合。
5. `skills/component-intelligence/SKILL.md`：按产品任务选择 foundation、behavior 和 expression 的来源。
6. 一个与任务匹配的工艺 Skill 和上下文 Skill。
7. 只有 Component Intelligence 选中 Bits 表达层时，才加入 `skills/react-bits/SKILL.md`。

如果只安装了本入口而没有安装仓库其他 Skill，仍执行产品目标、状态设计、响应式和验收流程；不要假设缺失的配套 Skill 已经可用。

## 路由表

| 任务 | 首选 Skill | 需要时再加入 |
| --- | --- | --- |
| 通用产品界面、组件和前端实现 | `design-core` + `component-intelligence` | `emil-design-eng`、`apple-design` |
| 个人网站、作品集、发布型首页 | `design-core` + `component-intelligence` | `apple-design`、`luxe-landing`、`animation-vocabulary` |
| AI 对话、智能体工作区、多模态工具 | `design-core` + `component-intelligence` | `ai-native`、`apple-design`、`review-animations` |
| API 平台、基础设施、技术仪表盘 | `design-core` + `component-intelligence` | `devtool-pro`、`apple-design`、`review-animations` |
| 文档、帮助中心、引导、定价 | `design-core` + `component-intelligence` | `docs-pricing`、`review-animations` |
| 高端发布页、硬件展示、汽车或性能产品 | `design-core` + `component-intelligence` | `luxe-landing`、`apple-design`、`emil-design-eng` |
| 用户明确指定 React Bits / Vue Bits | `component-intelligence` | `react-bits`、`design-core`、场景 Skill |
| 检查已实现页面、截图和响应式结果 | `visual-qa` | `playwright`、场景 Skill、`review-animations` |
| 运行真实来源选型基准 | `benchmarks/run-benchmarks.py` | `component-intelligence` |
| 查找值得加入动画的界面位置 | `find-animation-opportunities` | `react-bits`、`motion-review` |
| 审计现有动效并生成改进计划 | `improve-animations` | `review-animations`、`motion-review` |
| 动效设计或动效复审 | `animation-vocabulary` 或 `motion-review` | `apple-design`、`review-animations` |
| 动效代码严格复审 | `review-animations` | `design-core/references/interaction-motion.md` |
| 需要独立证据、边界实现或全新复审的较大任务 | `team-mode` | 按任务加载上述 Skill |

Component Intelligence 是 SevenDesign 的统一组件决策层。Agent 不应要求用户先选组件库，而应先识别产品任务，再在宿主系统、shadcn/ui、Radix UI、React Bits 和 Vue Bits 之间分配 foundation、behavior 与 expression 的归属。React Bits 是其中的公开表达层实现，不能覆盖产品层级、场景 Skill 的密度约束或上游动效质量标准；它只有在组件有明确的 reveal、focus、feedback、navigation、state、media 或 showcase 职责时才加入。

按需加载是统一入口的默认行为。先运行 [`skills/seven-design/scripts/resolve-context.py`](../seven-design/scripts/resolve-context.py)，再按输出加载资源；不要把整个 `skills/`、完整 registry 或所有 references 一次性放入上下文。

## 工作协议

- 先写清受众、主要结果、页面范围、视觉方向、内容真值和验收检查，再开始实现。
- 主线程保留未解决的产品意图、架构、安全、内容真实性和最终视觉验收权。
- 只有当独立证据收集、边界清晰的实现或全新复审能带来明确收益时，才启用 `team-mode`。
- Executor 只能修改已分配的切片；共享目标遵循一个写入者原则。
- Reviewer 从稳定产物和新上下文开始，聚焦一个未解决风险；它不编辑、不格式化、不提交，也不重复已经通过的检查。
- 如果运行时没有实际提供角色选择、模型和沙箱证据，只把 Explorer / Executor / Reviewer 当作协作标签，不宣称隔离已经生效。

## Component Intelligence 协议

当用户说“做一个 AI SaaS Hero”“做数据 Dashboard”“做作品集”，但没有指定组件库时：

1. 先加载 [`skills/component-intelligence/SKILL.md`](../component-intelligence/SKILL.md)，把请求归一化为产品 archetype、用户 job、密度、频率、交互和 framework。
2. 运行 [`skills/component-intelligence/scripts/select-source.py`](../component-intelligence/scripts/select-source.py) 或使用 [`skills/component-intelligence/catalog/source-matrix.json`](../component-intelligence/catalog/source-matrix.json) 做第一轮来源分层。
3. 让 foundation、behavior、expression 分别拥有清晰职责；shadcn、Radix、Bits 和宿主系统可以组合，不把它们当成互斥库。
4. 输出选择理由、拒绝的来源 / 效果、静态 fallback、依赖、token 归属和验证路径。
5. 只有表达层实际选择 React Bits 或 Vue Bits 时，才进入下面的 React Bits 接入协议。

默认流程保持低 token：先读紧凑矩阵，再用窄查询检索 registry，最多保留 8 个结果，最后只读取选中的源码。不要默认加载完整 registry、`llms.txt` 或无关组件 JSON。

## React Bits 接入协议

当 Component Intelligence 选中 React Bits / Vue Bits 表达层，或用户明确要求 Bits 时：

1. 先从 `design-core/references/interaction-motion.md` 读取 SevenDesign 动效基准。
2. 先使用 Component Intelligence 已归一化的 `surface`、`jobs`、`frequency`、`interaction`、`contentRole` 和 `constraints`，不要重新从组件名称开始。
3. 读取 `skills/react-bits/references/framework-selection.md`，通过用户对话或宿主项目证据解析 React / Vue；未指定时默认 React。
4. 读取 `skills/react-bits/references/selection-protocol.md` 和 `catalog/selection-matrix.json`，给出最多两个候选。
5. 明确写出每个候选为什么适合，并至少解释两个合理替代项为什么不选。
6. 写下产品 job、trigger、choreography、interruption、resting state 和 reduced-motion fallback。
7. 从 resolved framework 的公开 React Bits / Vue Bits 源码或公开安装路径中选择最小组件，并选择匹配的 JS/TS 与 CSS/Tailwind 变体。
   React 优先查阅 `catalog/components/`；Vue 优先查阅 `catalog/vue/components/`；两者都要记录实际复制或适配的文件。
   选择阶段不要整份读取 registry、`llms.txt` 或无关组件 JSON；需要查找未内置组件时使用 `search-registry.py` 的紧凑结果。
8. 将颜色、字体、间距、表面、焦点和状态映射到宿主项目 token，并检查依赖和浏览器要求。
9. 用 `micro`、`system`、`signature` 标记动效预算；默认每个 viewport 只保留一个 signature 动效。
10. 用 `motion-review` 做产品级编排检查；修改动画代码时再用 `review-animations` 做严格代码审查。

当用户问“哪里适合加动画”“让界面更有生命力”时，先加载 `skills/find-animation-opportunities/SKILL.md`。它只读扫描并拒绝高频、数据阅读和纯装饰场景，不直接修改代码。

当用户问“审计动画”“优化现有动画”或“让动效更好”时，加载 `skills/improve-animations/SKILL.md`。它只读审计并生成可执行计划；真正改动画代码时，再交给执行流程并使用 `review-animations` 复审。

如果公开源代码不在当前项目中，明确记录需要的公开依赖或安装步骤；不要把仓库中的 skill 文档描述成已经包含 React Bits 运行时代码，也不要声称拥有 Pro。

## Visual QA 协议

当存在可运行 UI、截图请求或视觉结果需要复审时：

1. 加载 [`skills/visual-qa/SKILL.md`](../visual-qa/SKILL.md) 和对应的 [`audit-rubric.md`](../visual-qa/references/audit-rubric.md)。
2. 用 [`capture-playwright.mjs`](../visual-qa/scripts/capture-playwright.mjs) 捕获桌面、移动和 reduced-motion 截图。
3. 用 [`validate-report.py`](../visual-qa/scripts/validate-report.py) 校验结构化审计报告；`critical` / `high` 的未解决问题不能宣布视觉完成。
4. 修改后必须重新截图同一视图，比较前后证据，不能只凭代码 diff 判断结果。

如果运行环境没有 Playwright，明确报告环境缺口，不伪造截图或 Visual QA 结论。

## Quality Benchmarks

当修改 Component Intelligence、来源矩阵或主路由规则时，运行 [`benchmarks/run-benchmarks.py`](../../benchmarks/run-benchmarks.py)。基准报告会区分决策分和完整质量分；没有 Visual QA 证据时，不得把决策分冒充为最终 9.5/10 质量分。

## 验收

在宣布完成前：

- 在可运行 UI 上检查桌面和移动尺寸；
- 检查焦点、加载、空、错误、长内容、溢出和减少动效状态；
- 确认首页与内部页面共享同一套视觉 DNA；
- 运行仓库中的 `PRE-FLIGHT-CHECKLIST.md`；
- 检查实际 diff 和共享工作区，拒绝未授权写入；
- 对动效、无障碍、公开源依赖和常见 AI 生成模式进行针对性复审。
- 对 Component Intelligence 修改，运行 20-case benchmark；对可运行 UI 修改，完成截图 → Visual Audit → 修改 → 再截图闭环。
