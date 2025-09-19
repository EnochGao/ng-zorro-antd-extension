import { Component } from '@angular/core';



import { NzxDynamicFormModule } from 'ng-zorro-antd-extension/dynamic-form';

@Component({
  imports: [NzxDynamicFormModule],
  standalone: true,
  selector: 'nzx-dynamic-form-example',
  template: ` <nzx-dynamic-form></nzx-dynamic-form> `,
})
export class NzxDynamicFormExampleComponent {}
