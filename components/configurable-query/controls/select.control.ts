import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';

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
        <nz-option
          *ngFor="let item of control.menuList"
          [nzValue]="item.value"
          [nzLabel]="item.label"
        >
        </nz-option>
      </nz-select>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxSelectControlComponent extends NzxAbstractControl {}
