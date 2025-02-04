import { Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';

@Component({
  selector: 'nzx-range-picker-control',
  template: `
    <ng-container [formGroup]="form">
      <nz-range-picker
        [ngStyle]="{ width: '100%' }"
        [formControlName]="control.controlName!"
      >
      </nz-range-picker>
    </ng-container>
  `,
})
export class NzxRangePickerControlComponent extends NzxAbstractControl {}
