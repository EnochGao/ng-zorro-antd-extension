import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { NzxBlankFieldModule } from 'ng-zorro-antd-extension/blank-field';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzxBlankFieldModule,
    NzButtonModule,
    NzSpaceModule,
    NzSwitchModule,
  ],
  selector: 'nzx-blank-field-example',
  templateUrl: './blank-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxBlankFieldExampleComponent {
  form: FormGroup = inject(FormBuilder).group({
    name: [{ value: 'EnochGao', disabled: true }],
  });

  constructor(private cd: ChangeDetectorRef) {}

  update() {
    this.form.get('name')?.patchValue(`张三${Math.floor(Math.random() * 10)}`);
  }

  disabled() {
    this.form.get('name')?.disable();
  }

  enable() {
    this.form.get('name')?.enable();
  }
}
