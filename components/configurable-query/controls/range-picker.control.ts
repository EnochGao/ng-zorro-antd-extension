import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';

@Component({
  selector: 'nzx-range-picker-control',
  template: `
    <ng-container [formGroup]="form">
      <nz-range-picker
        [formControl]="formControl"
        [ngStyle]="{ width: '100%' }"
      >
      </nz-range-picker>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxRangePickerControlComponent extends NzxAbstractControl {}
