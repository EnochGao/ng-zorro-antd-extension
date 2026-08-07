---
name: doc-upgrade
description: "将 ng-zorro-antd-extension 组件的文档从旧的 docgeni 风格升级为 NG-ZORRO 官方文档风格，并可选择性地彻底移除 docgeni 依赖。当任务涉及升级 doc、改文档风格、去掉 docgeni、对齐 ng-zorro 文档、重写组件文档，或编辑 components 下 doc 的 index markdown 时，应使用此 skill。"
---

# Doc Upgrade（组件文档风格升级）

## Overview

本 skill 用于将本仓库组件文档从 **@docgeni 风格** 重写为 **NG-ZORRO 官方文档风格**，
使文档与站点（`projects/ui`）渲染管线及 NG-ZORRO 官方站点风格统一，并可按需彻底移除
`@docgeni` 相关依赖与旧站点。

本仓库文档体系现状：
- **新站点** `projects/ui` 已采用 NG-ZORRO 风格渲染管线（本地移植的 marked + prismjs +
  自定义 renderer，见 `projects/ui/src/app/doc/markdown/*`），示例从 `components/<lib>/examples/`
  经 `example-loader.service.ts` 的 manifest 加载，文档末尾由 `doc.component.ts` 自动追加
  "代码示例"区。导航来自 `projects/ui/public/assets/navigations/{zh-cn,en-us}.json`。
- **旧站点** `src/` 基于 `@docgeni/template`，由 `.docgenirc.js` 配置，是待移除对象。
- 当前 doc 源文件（如 `components/blank-field/doc/index.zh-CN.md`）仍是 docgeni 风格：
  frontmatter 含 `order`/`type: 组件`/`subtitle`，正文用 `### 引入 / ### html / ### ts`
  内联代码示例，缺少 NG-ZORRO 标准的 `## 何时使用`、`## API` 属性表格与徽章语法。

## 何时使用

- 用户要求升级/改写某个或某些组件的 doc 文档。
- 用户要求移除 `@docgeni`，统一到 NG-ZORRO 文档体系。
- 用户要求"对齐 ng-zorro 文档风格"、"保持文档风格统一"。
- 编辑 `components/*/doc/index.zh-CN.md` 或 `index.en-US.md` 时，确保遵循本规范。

## 执行流程

### 阶段 A：升级文档风格（核心，必做）

对目标组件（单个或多个）执行以下改写。详细格式见
`references/ngzorro-doc-conventions.md`，要点如下：

1. **改写 frontmatter**：删除 `order`、`type: 组件`，改为
   `category: Components` / `type: <分类>` / `title: <英文名>` / `subtitle: <中文名>` /
   `cover: ''` / `description: <一句话>`。
2. **重命名/重组章节**：
   - `## 使用` → `## 何时使用`（使用场景说明，列表形式）。
   - 删除 `### 引入` / `### html` / `### ts` 整段内联代码示例（示例由站点从 `examples/`
     自动加载，见阶段 A 第 4 步）。
3. **补充 `## API` 章节**：用 Markdown 表格列出输入 `[input]`、输出 `(output)` 的
   参数/说明/类型/默认值；组件/指令标题写成 `### [nzx-xxx]` 以触发 renderer 的
   component/directive 徽章。可选补充 `## 方法`、`## Interfaces`。
4. **保留版本标记**：`## 版本支持` 章节保留 `<label type="success">vX.Y.Z+</label>` 写法。
5. **标题与徽章**：API 章节的选择器标题用 `### [nzx-xxx]` 形式；renderer 会自动加徽章。

> 改写前先 `read_file` 目标 doc 文件，确认当前内容与 frontmatter。改写后用 `replace_in_file`
> 或 `write_to_file` 落地。不要改动 `examples/` 目录与 `example-loader.service.ts` 的 manifest
> （除非用户要求新增示例），也不要改动 `projects/ui` 渲染管线。

### 阶段 B：移除 docgeni（按需）

仅当用户明确要求"移除 docgeni"时执行。详细步骤与检查点见
`references/docgeni-removal.md`，要点：

1. 先确认 `projects/ui` 站点可独立运行、导航 json 已覆盖所有组件。
2. 删除旧站点 `src/` 目录与根 `.docgenirc.js`。
3. 从 `package.json` 移除所有 `@docgeni/*` devDependencies 与相关 scripts，重跑 `npm install`。
4. 从 `angular.json` 移除 `docs-site` 项目（若存在），保留 `ng-zorro-antd-extension` 与 `ui`。
5. 搜索全仓确认无 `@docgeni` 引用残留（`search_content pattern="docgeni"` 应为空）。
6. 构建验证：`npx ng build ui --configuration production` 通过。

若用户只要求升级文档风格、暂不移除 docgeni，则跳过阶段 B。

## 资源

### references/
- `references/ngzorro-doc-conventions.md` —— NG-ZORRO 文档格式完整规范（frontmatter、
  标准章节、API 表格、徽章语法、示例引用方式、完整示例）。改写文档时按需加载。
- `references/docgeni-removal.md` —— 移除 @docgeni 的盘点、步骤与验证清单。仅在阶段 B 加载。

### scripts/ 与 assets/
本 skill 不依赖可执行脚本或输出资源，目录可留空或删除（当前已移除示例文件）。

## 关键约定

- 文档正文**不内联**可运行示例；示例统一走 `examples/` + `example-loader` + 导航 json 的
  `examples` 数组。
- frontmatter 的 `type` 用 NG-ZORRO 分类（通用/布局/导航/数据录入/数据展示/反馈等）。
- `order` 排序交由导航 json，文档 frontmatter 不再写 `order`。
- 保持与 `projects/ui` 渲染管线兼容：使用 `## 何时使用`、`## API` 标准章节名与
  `### [nzx-xxx]` 徽章标题语法。
