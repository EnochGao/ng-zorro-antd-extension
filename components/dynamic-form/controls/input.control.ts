import { Component } from '@angular/core';
import { NzxDFAbstractControl } from './abstract.control';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  imports: [NzInputModule],
  template: ` <input nz-input type="text" /> `,
})
export class NzxDFInputControlComponent extends NzxDFAbstractControl {}
