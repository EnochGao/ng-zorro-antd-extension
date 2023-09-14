import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';

import { CommonModule } from '@angular/common';
import { NzxTrimModule } from 'ng-zorro-antd-extension/trim';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzGridModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzxTrimModule,
  ],
  selector: 'nzx-trim-example',
  template: `
    <form [formGroup]="form">
      trim：
      <input formControlName="trim" nz-input nzxTrim trimType="trim" />
      <div nz-row>
        <pre nz-col nzSpan="20">
        {{ form.value.trim | json }}
      </pre
        >
      </div>

      trimStart：
      <input
        nz-input
        nzxTrim
        trimType="trimStart"
        formControlName="trimStart"
      />
      <div nz-row>
        <pre nz-col nzSpan="20">
        {{ form.value.trimStart | json }}
      </pre
        >
      </div>

      trimEnd：
      <textarea
        rows="4"
        nz-input
        nzxTrim
        trimType="trimEnd"
        formControlName="trimEnd"
      ></textarea>
      <div nz-row>
        <pre nz-col nzSpan="20">
        {{ form.value.trimEnd | json }}
      </pre
        >
      </div>
    </form>

    <button nz-button (click)="log()">log</button>
  `,
})
export class NzxTrimExampleComponent {
  form = inject(FormBuilder).group({
    trimStart: [],
    trimEnd: [],
    trim: ['  fdfdf      '],
  });

  constructor() {
    this.form.valueChanges.subscribe((v) => {
      console.log(v);
    });
  }

  log() {
    console.log(this.form.value);
  }
}
