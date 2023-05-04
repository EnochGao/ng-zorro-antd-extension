import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NzxWangEditorModule } from 'ng-zorro-antd-extension/wang-editor';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, NzxWangEditorModule],
  selector: 'nzx-editor-example',
  template: `
    <div [ngStyle]="{ border: '1px solid #ccc', 'z-index': 100 }">
      <nzx-wang-toolbar
        [ngStyle]="{ 'border-bottom': '1px solid #ccc' }"
        [editor]="editorRef.editor"
      >
      </nzx-wang-toolbar>
      <nzx-wang-editor
        [ngStyle]="{ height: '300px', 'overflow-y': 'hidden' }"
        #editorRef="NzxWangEditor"
      >
      </nzx-wang-editor>
    </div>
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
      ></div>
    </div>
  `,
})
export class NzxWangEditorExampleComponent {}
