import { Component } from '@angular/core';
import { NzxDFAbstractLabelWrapper } from './abstract-label-wrapper';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  imports: [CommonModule, NzFormModule],
  selector: 'nzx-built-in-label-wrapper',
  template: ` <nz-form-label>我是label</nz-form-label> `,
})
export class NzxDFBuiltInLabelWrapperComponent extends NzxDFAbstractLabelWrapper {}
