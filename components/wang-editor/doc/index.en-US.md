---
category: Components
type: Directive
title: Wang Editor
subtitle: nzx-wang-editor
cover: ''
description: A rich text editor wrapper based on wangEditor 5, easy to use in Angular.
order: 1
---

A rich text editor, easy to use in Angular, based on [wangEditor 5](https://www.npmjs.com/package/@wangeditor/editor). See [docs](https://www.wangeditor.com/).

## Support Version

<label type="success">v15.3.1+</label>

## When To Use

1. Install `@wangeditor/editor`:

```bash
npm i @wangeditor/editor
```

2. Import the rich text style file in your style file or angular.json:

```css
@import "node_modules/@wangeditor/editor/dist/css/style.css";
```

### Import

```ts
import { NzxWangEditorModule } from "ng-zorro-antd-extension/wang-editor";
```

### html

```html
<div [ngStyle]="{ border: '1px solid #ccc', 'z-index': 100 }">
  <nzx-wang-toolbar [ngStyle]="{ 'border-bottom': '1px solid #ccc' }" [editor]="editorRef.editor"> </nzx-wang-toolbar>
  <nzx-wang-editor [ngStyle]="{ height: '300px', 'overflow-y': 'hidden' }" #editorRef="NzxWangEditor" [(ngModel)]="value"> </nzx-wang-editor>
</div>
```

Or:

```html
<div [ngStyle]="{ border: '1px solid #ccc', 'z-index': 100 }">
  <div nzxWangToolbar [ngStyle]="{ 'border-bottom': '1px solid #ccc' }" [editor]="editorRef1.editor"></div>
  <div nzxWangEditor [ngStyle]="{ height: '300px', 'overflow-y': 'hidden' }" #editorRef1="NzxWangEditor" [(ngModel)]="value"></div>
</div>
```

### Built-in Properties

nzx-wang-toolbar

| Property       | Type                       | Default Value |
| -------------- | -------------------------- | ------------- |
| mode           | Mode                       | default       |
| editor         | IDomEditor                 | --            |
| defaultConfig  | ` Partial<IToolbarConfig>` | {}            |
| toolbar        | Toolbar                    | --            |

nzx-wang-editor

| Property        | Type                      | Default Value |
| --------------- | ------------------------- | ------------- |
| mode            | Mode                      | default       |
| editor          | IDomEditor                | --            |
| defaultConfig   | `Partial<IToolbarConfig>` | {}            |
| defaultHtml     | string                    | ''            |
| defaultContent  | SlateDescendant[]         | []            |
| height          | string                    | 35px          |
| textRequired    | boolean                   | false         |
| onCreated       | EventEmitter              | --            |
| onDestroyed     | EventEmitter              | --            |
| onMaxLength     | EventEmitter              | --            |
| onFocus         | EventEmitter              | --            |
| onBlur          | EventEmitter              | --            |
| customAlert     | EventEmitter              | --            |
| customPaste     | EventEmitter              | --            |
| onChange        | EventEmitter              | --            |
