import { Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ReactiveFormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

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
  imports: [NgStyle, ReactiveFormsModule, NzDatePickerModule],
})
export class NzxRangePickerControlComponent extends NzxAbstractControl {}
