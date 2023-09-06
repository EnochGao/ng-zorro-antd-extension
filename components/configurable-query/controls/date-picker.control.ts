import { Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';

@Component({
  template: `
    <nz-date-picker
      [ngStyle]="{ width: '100%' }"
      [formControl]="form.get(control.controlName)"
      [nzPlaceHolder]="control.placeholder"
    >
    </nz-date-picker>
  `,
})
export class NzxDatePickerControlComponent extends NzxAbstractControl {}
