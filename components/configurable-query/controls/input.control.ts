import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';

@Component({
  template: `
    <ng-container [formGroup]="form">
      <input
        [formControl]="formControl"
        nz-input
        type="text"
        [placeholder]="control.placeholder"
      />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxInputControlComponent extends NzxAbstractControl {}
