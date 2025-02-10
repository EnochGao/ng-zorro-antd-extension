import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';

@Component({
  selector: 'nzx-date-picker-control',
  template: `
    <ng-container [formGroup]="form">
      <nz-date-picker
        [ngStyle]="{ width: '100%' }"
        [formControl]="formControl"
        [nzPlaceHolder]="control.placeholder!"
      >
      </nz-date-picker>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxDatePickerControlComponent extends NzxAbstractControl {}
