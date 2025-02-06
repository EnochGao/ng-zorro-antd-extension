import { Component } from '@angular/core';
import { NzxDFAbstractLabelWrapper } from './abstract-label-wrapper';

@Component({
  selector: 'nzx-built-in-babel',
  template: ` <nz-form-label>我是label</nz-form-label> `,
})
export class NzxDFBuiltInLabelWrapperComponent extends NzxDFAbstractLabelWrapper {}
