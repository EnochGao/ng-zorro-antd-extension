import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NzxDynamicFormModule } from 'ng-zorro-antd-extension/dynamic-form';

@Component({
  standalone: true,
  imports: [CommonModule, NzxDynamicFormModule],
  selector: 'nzx-dynamic-form-example',
  template: `
    <nzx-dynamic-form></nzx-dynamic-form>
  `,
})
export class NzxDynamicFormExampleComponent {}
