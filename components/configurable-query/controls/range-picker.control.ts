import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ReactiveFormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

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
  imports: [NgStyle, ReactiveFormsModule, NzDatePickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxRangePickerControlComponent extends NzxAbstractControl {}
