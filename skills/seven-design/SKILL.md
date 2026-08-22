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
4. 一个与任务匹配的工艺 Skill 和上下文 Skill。
5. 只有存在明确产品任务时，才加入 `skills/react-bits/SKILL.md`。

如果只安装了本入口而没有安装仓库其他 Skill，仍执行产品目标、状态设计、响应式和验收流程；不要假设缺失的配套 Skill 已经可用。

## 路由表

| 任务 | 首选 Skill | 需要时再加入 |
| --- | --- | --- |
| 通用产品界面、组件和前端实现 | `design-core` | `emil-design-eng`、`apple-design`、`react-bits` |
| 个人网站、作品集、发布型首页 | `design-core` + `apple-design` | `luxe-landing`、`animation-vocabulary`、`react-bits` |
| AI 对话、智能体工作区、多模态工具 | `design-core` + `ai-native` | `apple-design`、`react-bits`、`review-animations` |
| API 平台、基础设施、技术仪表盘 | `design-core` + `devtool-pro` | `apple-design`、`react-bits`、`review-animations` |
| 文档、帮助中心、引导、定价 | `design-core` + `docs-pricing` | `react-bits`、`review-animations` |
| 高端发布页、硬件展示、汽车或性能产品 | `design-core` + `luxe-landing` | `apple-design`、`emil-design-eng`、`react-bits` |
| React Bits / Vue Bits 智能选型与接入 | `react-bits` | `design-core`、场景 Skill、`motion-review` |
| 查找值得加入动画的界面位置 | `find-animation-opportunities` | `react-bits`、`motion-review` |
| 审计现有动效并生成改进计划 | `improve-animations` | `review-animations`、`motion-review` |
| 动效设计或动效复审 | `animation-vocabulary` 或 `motion-review` | `apple-design`、`review-animations` |
| 动效代码严格复审 | `review-animations` | `design-core/references/interaction-motion.md` |
| 需要独立证据、边界实现或全新复审的较大任务 | `team-mode` | 按任务加载上述 Skill |

React Bits 是公开组件与动效实现扩展，不能覆盖产品层级、场景 Skill 的密度约束或上游动效质量标准。它只有在组件有明确的 reveal、focus、feedback、navigation、state、media 或 showcase 职责时才加入。

## 工作协议

- 先写清受众、主要结果、页面范围、视觉方向、内容真值和验收检查，再开始实现。
- 主线程保留未解决的产品意图、架构、安全、内容真实性和最终视觉验收权。
- 只有当独立证据收集、边界清晰的实现或全新复审能带来明确收益时，才启用 `team-mode`。
- Executor 只能修改已分配的切片；共享目标遵循一个写入者原则。
- Reviewer 从稳定产物和新上下文开始，聚焦一个未解决风险；它不编辑、不格式化、不提交，也不重复已经通过的检查。
- 如果运行时没有实际提供角色选择、模型和沙箱证据，只把 Explorer / Executor / Reviewer 当作协作标签，不宣称隔离已经生效。

## React Bits 接入协议

当任务命中 React Bits 路由时：

1. 先从 `design-core/references/interaction-motion.md` 读取 SevenDesign 动效基准。
2. 先把请求归一化为 `surface`、`jobs`、`frequency`、`interaction`、`contentRole` 和 `constraints`。
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

## 验收

在宣布完成前：

- 在可运行 UI 上检查桌面和移动尺寸；
- 检查焦点、加载、空、错误、长内容、溢出和减少动效状态；
- 确认首页与内部页面共享同一套视觉 DNA；
- 运行仓库中的 `PRE-FLIGHT-CHECKLIST.md`；
- 检查实际 diff 和共享工作区，拒绝未授权写入；
- 对动效、无障碍、公开源依赖和常见 AI 生成模式进行针对性复审。
