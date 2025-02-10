import { Component } from '@angular/core';
import { NzxDFAbstractControl } from './abstract.control';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  imports: [NzDatePickerModule],
  template: ` <nz-range-picker> </nz-range-picker> `,
})
export class NzxDFRangePickerControlComponent extends NzxDFAbstractControl {}
