import { Component, HostBinding } from '@angular/core';
import { NzxDFAbstractControlWrapper } from './abstract-control-wrapper';

import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  imports: [NzFormModule],
  selector: 'nzx-built-in-control-wrapper',
  template: `
    <nz-form-control>
      <ng-template #dfControlTpl></ng-template>
    </nz-form-control>
  `,
})
export class NzxDFBuiltInControlWrapperComponent extends NzxDFAbstractControlWrapper {
  @HostBinding('class.ant-form-item-control') controlWrapper = true;
}
