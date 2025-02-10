import { Component } from '@angular/core';

@Component({
  selector: 'nzx-dynamic-form',
  template: `
    <form nz-form [nzLayout]="'vertical'">
      <nz-form-item>
        <nz-form-label>我是label</nz-form-label>
        <nz-form-control>
          <input nz-input />
        </nz-form-control>
      </nz-form-item>

      <nzx-dynamic-form-item></nzx-dynamic-form-item>
      <nzx-dynamic-form-item></nzx-dynamic-form-item>
      <nzx-dynamic-form-item></nzx-dynamic-form-item>
    </form>
  `,
})
export class NzxDynamicFormComponent {}
