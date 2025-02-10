import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ReactiveFormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

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
  imports: [NgStyle, ReactiveFormsModule, NzDatePickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxDatePickerControlComponent extends NzxAbstractControl {}
