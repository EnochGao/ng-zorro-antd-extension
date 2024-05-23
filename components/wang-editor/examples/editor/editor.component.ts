import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NzxWangEditorModule } from 'ng-zorro-antd-extension/wang-editor';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzxWangEditorModule,
  ],
  selector: 'nzx-editor-example',
  template: `
    <form nz-form [formGroup]="form">
      <nz-form-item>
        <nz-form-label [nzSpan]="6" nzRequired>中文</nz-form-label>
        <nz-form-control [nzSpan]="14" [nzErrorTip]="errorTip">
          <div [ngStyle]="{ border: '1px solid #ccc', 'z-index': 100 }">
            <nzx-wang-toolbar
              [ngStyle]="{ 'border-bottom': '1px solid #ccc' }"
              [editor]="editorRef.editor"
            >
            </nzx-wang-toolbar>
            <nzx-wang-editor
              [textRequired]="true"
              [ngStyle]="{ height: '300px', 'overflow-y': 'hidden' }"
              #editorRef="NzxWangEditor"
              formControlName="zh"
            >
            </nzx-wang-editor>
          </div>

          <ng-template #errorTip let-control>
            <ng-container *ngIf="control.hasError('editorTextRequired')">
              必填
            </ng-container>
          </ng-template>
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-label [nzSpan]="6">英文</nz-form-label>
        <nz-form-control [nzSpan]="14">
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
              formControlName="en"
            ></div>
          </div>
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-control [nzOffset]="20" [nzSpan]="4">
          <button nz-button nzType="primary" [disabled]="!form.valid">
            Submit
          </button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
})
export class NzxWangEditorExampleComponent {
  form = inject(FormBuilder).group({
    zh: [],
    en: [],
  });
}
