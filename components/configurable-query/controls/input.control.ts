import { Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

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
  imports: [ReactiveFormsModule, NzInputModule],
})
export class NzxInputControlComponent extends NzxAbstractControl {}
