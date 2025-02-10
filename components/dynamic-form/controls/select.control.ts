import { Component } from '@angular/core';
import { NzxDFAbstractControl } from './abstract.control';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, ReactiveFormsModule, NzSelectModule],
  template: `
    <ng-container [formGroup]="form">
      <nz-select
        [formControlName]="control.controlName!"
        [nzShowSearch]="control.nzxShowSearch ?? true"
        [nzAllowClear]="control.nzxAllowClear ?? true"
        [nzPlaceHolder]="control.placeholder!"
      >
        <nz-option
          *ngFor="let item of control.menuList"
          [nzValue]="item.value"
          [nzLabel]="item.label"
        >
        </nz-option>
      </nz-select>
    </ng-container>
  `,
})
export class NzxDFSelectControlComponent extends NzxDFAbstractControl {}
