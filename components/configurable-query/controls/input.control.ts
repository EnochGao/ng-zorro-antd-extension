import { Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';

@Component({
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
