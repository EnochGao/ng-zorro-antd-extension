import { Component } from '@angular/core';
import { NzxDFAbstractControl } from './abstract.control';

@Component({
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
