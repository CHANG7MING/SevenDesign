---
name: seven-design
description: SEVENDESIGN 的统一入口与路由 Skill，用于把产品需求转化为有视觉方向、界面系统、交互工艺和质量复审的 AI 设计工作流；当任务涉及产品界面、个人网站、AI 工作区、开发者工具、文档、定价页、发布页或前端 UI 复审时使用。
---

# SEVENDESIGN 总入口

将本 Skill 作为入口，根据任务加载最少的一组 SevenDesign 子 Skill。不要默认加载整个仓库；先确定产品目标、页面范围、已有代码和验收标准，再按路由表补充上下文。

## 启动顺序

在仓库副本中工作时，按以下顺序读取：

1. `DESIGN.md`：产品语气、信息层级、布局和视觉原则。
2. `TOKENS.md`：颜色、字体、间距、层级和动效 token。
3. `skills/design-core/SKILL.md`：检查 → 定向 → 构建 → 验证的主循环。
4. 一个与任务匹配的工艺 Skill 和上下文 Skill。

如果只安装了本入口而没有安装仓库其他 Skill，仍执行产品目标、状态设计、响应式和验收流程；不要假设缺失的配套 Skill 已经可用。

## 路由表

| 任务 | 首选 Skill | 需要时再加入 |
| --- | --- | --- |
| 通用产品界面、组件和前端实现 | `design-core` | `emil-design-eng`、`apple-design` |
| 个人网站、作品集、发布型首页 | `design-core` + `apple-design` | `luxe-landing`、`animation-vocabulary` |
| AI 对话、智能体工作区、多模态工具 | `design-core` + `ai-native` | `apple-design`、`review-animations` |
| API 平台、基础设施、技术仪表盘 | `design-core` + `devtool-pro` | `apple-design` |
| 文档、帮助中心、引导、定价 | `design-core` + `docs-pricing` | `luxe-landing` |
| 高端发布页、硬件展示、汽车或性能产品 | `design-core` + `luxe-landing` | `apple-design`、`emil-design-eng` |
| 动效设计或动效复审 | `animation-vocabulary` 或 `review-animations` | `apple-design` |
| 需要独立证据、边界实现或全新复审的较大任务 | `team-mode` | 按任务加载上述 Skill |

子 Skill 位于本仓库的 `skills/` 目录；它们可以独立安装，不要把本入口当成它们的替代品。

## 工作协议

- 先写清受众、主要结果、页面范围、视觉方向、内容真值和验收检查，再开始实现。
- 主线程保留未解决的产品意图、架构、安全、内容真实性和最终视觉验收权。
- 只有当独立证据收集、边界清晰的实现或全新复审能带来明确收益时，才启用 `team-mode`。
- Executor 只能修改已分配的切片；共享目标遵循一个写入者原则。
- Reviewer 从稳定产物和新上下文开始，聚焦一个未解决风险；它不编辑、不格式化、不提交，也不重复已经通过的检查。
- 如果运行时没有实际提供角色选择、模型和沙箱证据，只把 Explorer / Executor / Reviewer 当作协作标签，不宣称隔离已经生效。

## 验收

在宣布完成前：

- 在可运行 UI 上检查桌面和移动尺寸；
- 检查焦点、加载、空、错误、长内容、溢出和减少动效状态；
- 确认首页与内部页面共享同一套视觉 DNA；
- 运行仓库中的 `PRE-FLIGHT-CHECKLIST.md`；
- 检查实际 diff 和共享工作区，拒绝未授权写入；
- 对动效、无障碍和常见 AI 生成模式进行针对性复审。
