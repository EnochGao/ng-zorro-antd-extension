# 移除 @docgeni 依赖

本仓库存在两套文档站点并存的情况，迁移目标是**彻底移除 docgeni**，统一到
`projects/ui`（NG-ZORRO 风格）站点。

## 现状盘点（迁移前确认）

docgeni 相关残留位置（用 `search_content` / `search_file` 在全仓核对）：

1. `**.docgenirc.js` —— docgeni 站点根配置文件（输出 `docs-site` 项目）。
2. `src/app/app.module.ts` —— 旧站点入口，import `DocgeniTemplateModule`、
   `DOCGENI_SITE_PROVIDERS`、`RootComponent`，bootstrap `RootComponent`。
3. `src/app/content/*` —— 旧站点由 docgeni 生成的 content（含 `navigations.json`）。
4. `src/assets/stack-blitz/package.json` 与 `src/assets/stack-blitz/bundle.json` ——
   内联引用 `@docgeni/alib`（stack-blitz 示例运行时依赖），可一并移除或替换。
5. `package.json` 的 `devDependencies` 中可能含有 `@docgeni/*`（构建脚本依赖）。
6. `angular.json` 中旧的 `docs-site` 项目（若仍保留）。

> 注意：`projects/ui` 站点**不依赖** docgeni，它直接拷贝 `components/**/doc/**` 和
> `examples/**` 作为静态 assets，并自带 marked 渲染管线。迁移 docgeni 文档风格到 NG-ZORRO
> 风格时，**不要破坏** `projects/ui` 既有的渲染逻辑与 `example-loader.service.ts` manifest。

## 移除步骤

仅当用户明确要求"移除 docgeni"时执行以下步骤。逐项确认后再删除/修改。

### 步骤 1：确认新站点可独立运行

- `projects/ui/public/assets/navigations/{zh-cn,en-us}.json` 已包含全部组件导航与
  `examples` 数组（这是新站点的导航来源，与 docgeni 无关）。
- 运行 `npm run ui`（即 `npx ng serve ui`）确认站点可正常启动、文档与示例可渲染。
  若新站点尚不完整，先完成文档风格迁移（见 ngzorro-doc-conventions.md），再移除 docgeni。

### 步骤 2：删除旧 docgeni 站点目录

- 删除整个 `src/` 目录（旧 docgeni 站点源码、content、stack-blitz 资源）。
  该目录下的 `app.module.ts`、`content/`、`assets/stack-blitz/` 均服务于 docgeni，
  新站点在 `projects/ui`，无依赖关系。
- 删除根目录 `.docgenirc.js`。

### 步骤 3：清理 package.json

- 移除 `devDependencies` 中所有 `@docgeni/*` 包（如 `@docgeni/cli`、`@docgeni/core`、
  `@docgeni/template`、`@docgeni/alib`）。
- 若存在 `docgeni` 相关 scripts（如 `docs:build`、`start:docs`），一并移除。
- 删除后运行 `npm install` 更新 `package-lock.json`。

### 步骤 4：清理 angular.json

- 若 `angular.json` 中仍存在 `docs-site` 项目（旧 docgeni 站点），移除其 `projects` 条目。
- 确认保留 `ng-zorro-antd-extension`（库）与 `ui`（应用）两个项目。
- 确认 `ui` 项目的 `assets` 配置包含：
  - `components` 下 `**/doc/**/*`、`**/examples/**/*.{ts,html}` 拷贝到 `site-src/components`
  - `docs` 目录拷贝到 `site-src/docs`

### 步骤 5：验证

- 运行 `npx ng build ui --configuration production` 确认无 docgeni 引用残留报错。
- 搜索全仓确认无 `@docgeni` 引用：`search_content pattern="docgeni"` 应无结果
  （除本 skill 文档外）。
- 确认 `site-src/components/<lib>/doc/index.zh-CN.md` 能被站点正常加载。

## 注意事项

- 若用户**只要求升级 doc 文档风格、暂不移除 docgeni**，则只执行
  ngzorro-doc-conventions.md 的改写工作，跳过本文件的删除步骤。
- 删除 `src/` 前务必确认 `projects/ui` 导航 json 已覆盖所有组件，避免文档丢失。
- stack-blitz 在线示例功能若仍需要，应将 `@docgeni/alib` 替换为等价方案或移除该资源，
  而非保留悬空引用。
