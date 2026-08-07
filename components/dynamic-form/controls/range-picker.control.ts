import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NzxDFAbstractControl } from './abstract.control';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  imports: [NzDatePickerModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: ` <nz-range-picker> </nz-range-picker> `,
})
export class NzxDFRangePickerControlComponent extends NzxDFAbstractControl {}
