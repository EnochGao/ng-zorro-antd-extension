import { Component } from '@angular/core';
import { NzxDFAbstractControl } from './abstract.control';

@Component({
  template: `
    <nz-date-picker [ngStyle]="{ width: '100%' }"> </nz-date-picker>
  `,
})
export class NzxDFDatePickerControlComponent extends NzxDFAbstractControl {}
