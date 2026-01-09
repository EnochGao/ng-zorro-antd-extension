---
category: directive
title: 富文本编辑器
subtitle: nzx-wang-editor-next
order: 1
---

富文本编辑器(因 wangEditor 不在维护，切换@wangeditor-next/editor 包)。基于[wangEditor 5](https://www.npmjs.com/package/@wangeditor-next/editor)的包装组件。详情查看[文档](https://wangeditor-next.github.io/docs/)

## 支持版本

<label type="success">v17.4+</label>

## 基本使用

1. 安装`@wangeditor-next/editor`

```bash
npm i @wangeditor-next/editor
```

2. style 文件或者 angular.json 中引入富文本样式文件

```css
@import 'node_modules/@wangeditor-next/editor/dist/css/style.css';
```

### 引入

```ts
import { NzxWangEditorModule } from 'ng-zorro-antd-extension/wang-editor-next';
```

### html

```html
<div [ngStyle]="{ border: '1px solid #ccc', 'z-index': 100 }">
  <nzx-wang-toolbar
    [ngStyle]="{ 'border-bottom': '1px solid #ccc' }"
    [editor]="editorRef.editor"
  >
  </nzx-wang-toolbar>
  <nzx-wang-editor
    [ngStyle]="{ height: '300px', 'overflow-y': 'hidden' }"
    #editorRef="NzxWangEditor"
    [(ngModel)]="value"
  >
  </nzx-wang-editor>
</div>
```

或者

```html
<div [ngStyle]="{ border: '1px solid #ccc', 'z-index': 100 }">
  <div
    nzxWangToolbar
    [ngStyle]="{ 'border-bottom': '1px solid #ccc' }"
    [editor]="editorRef1.editor"
  ></div>
  <div
    nzxWangEditor
    [ngStyle]="{ height: '300px', 'overflow-y': 'hidden' }"
    #editorRef1="NzxWangEditor"
    [(ngModel)]="value"
  ></div>
</div>
```

### 内置属性

nzx-wang-toolbar

| 属性          | 类型                       | 默认值  |
| ------------- | -------------------------- | ------- |
| mode          | Mode                       | default |
| editor        | IDomEditor                 | --      |
| defaultConfig | ` Partial<IToolbarConfig>` | {}      |
| toolbar       | Toolbar                    | --      |

nzx-wang-editor

| 属性           | 类型                      | 默认值  |
| -------------- | ------------------------- | ------- |
| mode           | Mode                      | default |
| editor         | IDomEditor                | --      |
| defaultConfig  | `Partial<IToolbarConfig>` | {}      |
| defaultHtml    | string                    | ''      |
| defaultContent | SlateDescendant[]         | []      |
| height         | string                    | 35px    |
| textRequired   | boolean                   | false   |
| onCreated      | EventEmitter              | --      |
| onDestroyed    | EventEmitter              | --      |
| onMaxLength    | EventEmitter              | --      |
| onFocus        | EventEmitter              | --      |
| onBlur         | EventEmitter              | --      |
| customAlert    | EventEmitter              | --      |
| customPaste    | EventEmitter              | --      |
| onChange       | EventEmitter              | --      |
