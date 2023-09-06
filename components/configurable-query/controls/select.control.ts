import { Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';

@Component({
  template: `
    <nz-select
      [formControl]="form.get(control.controlName)"
      [nzShowSearch]="true"
      [nzAllowClear]="control.nzxAllowClear"
      [nzPlaceHolder]="control.placeholder"
    >
      <nz-option
        *ngFor="let item of control.menuList"
        [nzValue]="item.value"
        [nzLabel]="item.label"
      >
      </nz-option>
    </nz-select>
  `,
})
export class NzxSelectControlComponent extends NzxAbstractControl {}
