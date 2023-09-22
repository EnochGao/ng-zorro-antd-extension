import { Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';

@Component({
  template: `
    <ng-container [formGroup]="form">
      <nz-date-picker
        [ngStyle]="{ width: '100%' }"
        [formControlName]="control.controlName!"
        [nzPlaceHolder]="control.placeholder!"
      >
      </nz-date-picker>
    </ng-container>
  `,
})
export class NzxDatePickerControlComponent extends NzxAbstractControl {}
