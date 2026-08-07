import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NzxDFAbstractControl } from './abstract.control';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NgStyle } from '@angular/common';

@Component({
  imports: [NzDatePickerModule, NgStyle],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <nz-date-picker [ngStyle]="{ width: '100%' }"> </nz-date-picker>
  `,
})
export class NzxDFDatePickerControlComponent extends NzxDFAbstractControl {}
