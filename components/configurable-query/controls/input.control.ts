import { Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';

@Component({
  selector: 'nzx-input-control',
  template: `
    <ng-container [formGroup]="form">
      <input
        nz-input
        type="text"
        [placeholder]="control.placeholder"
        [formControlName]="control.controlName!"
      />
    </ng-container>
  `,
})
export class NzxInputControlComponent extends NzxAbstractControl {}
