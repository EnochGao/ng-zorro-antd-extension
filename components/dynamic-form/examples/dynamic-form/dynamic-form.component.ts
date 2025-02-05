import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  imports: [CommonModule, NzButtonModule, NzDividerModule],
  selector: 'nzx-dynamic-form-example',
  template: `nzx-dynamic-form-example`,
})
export class NzxDynamicFormExampleComponent {}
