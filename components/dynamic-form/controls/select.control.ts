import { Component } from '@angular/core';
import { NzxDFAbstractControl } from './abstract.control';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';


@Component({
  imports: [ReactiveFormsModule, NzSelectModule],
  template: `
    <ng-container [formGroup]="form">
      <nz-select
        [formControlName]="control.controlName!"
        [nzShowSearch]="control.nzxShowSearch ?? true"
        [nzAllowClear]="control.nzxAllowClear ?? true"
        [nzPlaceHolder]="control.placeholder!"
        >
        @for (item of control.menuList; track item) {
          <nz-option
            [nzValue]="item.value"
            [nzLabel]="item.label"
            >
          </nz-option>
        }
      </nz-select>
    </ng-container>
    `,
})
export class NzxDFSelectControlComponent extends NzxDFAbstractControl {}
