import { Component } from '@angular/core';
import { NzxDFAbstractControlWrapper } from './abstract-control-wrapper';

@Component({
  selector: 'nzx-built-in-control-wrapper',
  template: `
    <nz-form-control>
      <ng-template #dfControlTpl></ng-template>
    </nz-form-control>
  `,
})
export class NzxDFBuiltInControlWrapperComponent extends NzxDFAbstractControlWrapper {}
