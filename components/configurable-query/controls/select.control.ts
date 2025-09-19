import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';
import { ReactiveFormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nzx-select-control',
  template: `
    <ng-container [formGroup]="form">
      <nz-select
        [formControl]="formControl"
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
  imports: [ReactiveFormsModule, NzSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxSelectControlComponent extends NzxAbstractControl {}
