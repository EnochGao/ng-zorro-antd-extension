import { Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';

@Component({
  template: `
    <nz-range-picker
      [ngStyle]="{ width: '100%' }"
      [formControl]="form.get(control.controlName)"
    >
    </nz-range-picker>
  `,
})
export class NzxRangePickerControlComponent extends NzxAbstractControl {}
