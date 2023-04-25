import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';

import { CommonModule } from '@angular/common';
import { NzxTrimModule } from 'ng-zorro-antd-extension/trim';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzGridModule,
    FormsModule,
    NzInputModule,
    NzxTrimModule,
  ],
  selector: 'nzx-trim-example',
  template: `
    <input
      nz-input
      ngModel
      #input="ngModel"
      (ngModelChange)="valueChange($event)"
      nzxTrim
      trimType="trimEnd"
    />
    <div nz-row>
      <div nz-col nzSpan="2">input value:</div>
      <pre nz-col nzSpan="20">
        {{ input.value | json }}
      </pre
      >
    </div>
    <textarea
      rows="4"
      nz-input
      ngModel
      #textarea="ngModel"
      (ngModelChange)="valueChange($event)"
      nzxTrim
    ></textarea>
    <div nz-row>
      <div nz-col nzSpan="2">textarea value:</div>
      <pre nz-col nzSpan="20">
        {{ textarea.value | json }}
      </pre
      >
    </div>
  `,
})
export class NzxTrimExampleComponent {
  valueChange(value: string) {
    console.log('valueChange::', JSON.stringify(value));
  }
}
