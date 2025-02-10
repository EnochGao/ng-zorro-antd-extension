import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nzx-input-control',
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
  imports: [ReactiveFormsModule, NzInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxInputControlComponent extends NzxAbstractControl {}
