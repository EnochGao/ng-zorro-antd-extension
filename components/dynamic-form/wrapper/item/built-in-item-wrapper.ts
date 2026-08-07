import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NzxDFAbstractItemWrapper } from './abstract-item-wrapper';

import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  imports: [NzFormModule],
  selector: 'nzx-built-in-item-wrapper',
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <nz-form-item>
      <ng-template #dfLabelWrapperTpl></ng-template>
      <ng-template #dfControlWrapperTpl></ng-template>
    </nz-form-item>
  `,
})
export class NzxDFBuiltInItemWrapperComponent extends NzxDFAbstractItemWrapper {}
