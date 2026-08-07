# NG-ZORRO 文档风格规范（ng-zorro-antd-extension 适配）

本规范定义组件文档（`components/<lib>/doc/index.zh-CN.md`，可选 `index.en-US.md`）在
迁移到 NG-ZORRO 风格后应遵循的格式。目的是与本仓库 `projects/ui` 站点渲染管线
（本地移植的 marked + prismjs + 自定义 renderer）以及 NG-ZORRO 官方站点风格保持一致。

> 渲染管线位置：
> - `projects/ui/src/app/doc/markdown/*`（marked 配置 + 自定义 renderer）
> - `projects/ui/src/app/doc/doc/doc.component.ts`（文档页 + 末尾代码示例区）
> - `projects/ui/src/app/doc/example-loader.service.ts`（示例静态清单 manifest）
> - 导航：`projects/ui/public/assets/navigations/{zh-cn,en-us}.json`

## 1. Frontmatter（文档顶部 `---` 块）

docgeni 旧的 `order` / `type: 组件` / `cover`（空）字段**不再需要**。改为 NG-ZORRO 风格：

```yaml
---
category: Components          # 固定值，分组用
type: 数据录入                  # 组件分类（中文），如：通用 / 布局 / 导航 / 数据录入 / 数据展示 / 反馈
title: Checkbox              # 组件英文名
subtitle: 多选框               # 组件中文名（导航与标题展示）
cover: 'https://...svg'      # 封面图 URL，可选；无则省略或留空字符串
description: 收集用户的多项选择。  # 一句话描述，显示在概览卡片与 SEO
---
```

要点：
- `category` 固定为 `Components`。
- `type` 使用 NG-ZORRO 分类体系（通用、布局、导航、数据录入、数据展示、反馈等）。
- `subtitle` 是中文名，会显示在站点导航与文档标题（`title` 是英文名）。
- 不再写 `order`：排序由导航 json 的 `order` 字段控制。
- 文档正文第一句建议与 `description` 呼应，但不要重复照搬。

## 2. 标准章节结构

文档正文建议按以下顺序组织（与 NG-ZORRO 官方一致）：

```
## 何时使用
<使用场景说明，列表形式>

## 代码演示            # 可选；若示例较多可加，否则省略（站点会在末尾自动追加"代码示例"区）

## API

### [nzx-xxx]          # 组件/指令选择器，用方括号；renderer 会自动加 component/directive 徽章
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `[inputX]` | 说明 | `string` | `-` |
| `(outputY)` | 回调说明 | `EventEmitter<void>` | `-` |

## 方法                # 可选，组件暴露的公开方法
### [nzx-xxx]
| 名称 | 描述 |
| --- | --- |
| `method()` | 描述 |

## Interfaces          # 可选，导出的接口/类型
### SomeInterface
```ts
export interface SomeInterface { ... }
```
```

注意 `## 何时使用` 是 NG-ZORRO 标准章节名，替换旧的 `## 使用`。
旧文档里的 `### 引入` / `### html` / `### ts` 内联代码示例块**应移除**——示例改由
站点从 `examples/` 目录加载，通过导航 json 的 `examples` 数组引用（见第 4 节）。

## 3. 标题徽章语法

`projects/ui/src/app/doc/markdown/renderer.ts` 会在渲染时给特定标题加徽章：

- 以 `nz-` 开头的标题（如 `### [nz-button]`）→ 自动加 `component` 徽章。
- 以 `\[...]` 形式且匹配指令正则的标题（如 `### [nzx-blank-field]`）→ 加 `directive` 徽章。
- 匹配 `NzXxxService` 正则的标题 → 加 `service` 徽章。

本仓库组件使用 `nzx-` 前缀。为保证徽章正确显示，API 章节的组件/指令标题请写成：

```markdown
### [nzx-blank-field]
```

（renderer 当前对 `nzx-` 前缀也能识别为 component 徽章，因为 `isMarkedLabel` 判断的是
以 `nz-` 开头——若前缀识别不符合预期，可在此处提示用户检查 renderer 正则。）

## 4. 代码示例（示例）如何引用

本仓库示例体系**已是 NG-ZORRO 思路**，示例不在 markdown 内联，而是：

1. 示例源码放在 `components/<lib>/examples/<dir>/<dir>.component.{ts,html}`。
2. `example-loader.service.ts` 的 `manifest` 用 key 声明每个示例：
   `nzx-<lib>-<dir>-example`（如 `nzx-checkbox-checkbox-group-example`），
   并指向 `load`（动态 import 组件类）与 `sources`（相对 `site-src/components/` 的 ts/html 路径）。
3. 导航 json（`projects/ui/public/assets/navigations/{zh-cn,en-us}.json`）中该组件的
   `examples` 数组列出这些 key，站点 `doc.component.ts` 会在文档末尾自动渲染"代码示例"区。

因此文档 markdown **无需也不能**用内联 ```html / ```ts 展示示例主体。若想保留一段
"快速上手"的最小代码片段，可作为 `## 代码演示` 下的说明性代码块，但真实可运行示例由
站点从 `examples/` 加载。改写旧 doc 时，将 `### 引入 / ### html / ### ts` 整段删除即可。

## 5. 其他约定

- 版本标记：`## 版本支持` 章节用 `<label type="success">v13.0.0+</label>`（仓库已有用法）。
- 外链：绝对/外站链接会自动新窗口打开（renderer 处理），直接写 Markdown 链接即可。
- 代码高亮：基于 prismjs，标注语言（```ts / ```html / ```scss）。
- 表格：API 表格使用标准 Markdown 表格，`类型` 列用反引号包裹类型名。

## 6. 完整示例（改写后）

```markdown
---
category: Components
type: 数据录入
title: Checkbox
subtitle: 多选框
cover: ''
description: 自定义选择框，选择时传出的值为数组形式，并提供自定义函数转换出入参格式。
---

自定义选择框，选择时传出的值为数组形式。提供 `customFormateInFn` 和 `customFormateOutFn`
自定义函数转换出入参格式。

**注意(v19+)**：zorro 19 版本增加了 `nzOptions` 属性……

## 何时使用

- 需要在多选框组与业务值（如数字/对象）之间做格式转换时；
- 需要复用统一的入参/出参转换逻辑时。

## 版本支持

<label type="success">v13.0.0+</label>

## API

### [nzx-checkbox-group]
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `[customFormateInFn]` | 入参转换函数 | `(v: any) => any[]` | `-` |
| `[customFormateOutFn]` | 出参转换函数 | `(v: any[]) => any` | `-` |
| `[checkOptions]` | 选项列表 | `Array<{label; value}>` | `[]` |
| `[ngModel]` | 选中值，可双向绑定 | `any` | `-` |
| `(ngModelChange)` | 值变化回调 | `EventEmitter<any>` | `-` |
```
