import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

import {
  NzxCheckboxModule,
  NzxCheckboxGroupComponent,
} from 'ng-zorro-antd-extension/checkbox';

@Component({
  selector: 'nzx-checkbox-group-example',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCardModule,
    NzButtonModule,
    NzxCheckboxModule,
  ],
})
export class NzxCheckboxGroupExampleComponent implements OnInit {
  checkOptions: any[] = [
    { label: '客户信赖', value: 1 },
    { label: '技术评估', value: 2 },
  ];

  form!: FormGroup;
  form1!: FormGroup;

  inFn = (v: number) => {
    if (v === 1) return [1];
    if (v === 2) return [2];
    if (v === 3) return [1, 2];
    return [];
  };
  outFn = (v: number[]) => v.reduce((pre, cur) => pre + cur, 0);

  @ViewChild('nzxCheckbox')
  nzxCheckboxRef!: NzxCheckboxGroupComponent;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      value: [2, []],
    });

    this.form1 = this.fb.group({
      value: [[], []],
    });
  }

  lazyLoad() {
    setTimeout(() => {
      this.checkOptions = [
        { label: '客户信赖', value: 1, disabled: true },
        { label: '技术评估', value: 2 },
      ];
      this.form.get('value')?.patchValue(1);
      this.nzxCheckboxRef.updateView();
    }, 1000);
  }

  reset() {
    this.form.reset();
  }

  patchValue() {
    this.form.get('value')?.patchValue(3);
  }

  disabledToggle() {
    const state = this.form.get('value')?.disabled;
    if (state) {
      this.form.get('value')?.enable();
    } else {
      this.form.get('value')?.disable();
    }
  }

  reset1() {
    this.form1.reset();
  }

  patchValue1() {
    this.form1.get('value')?.patchValue([2]);
  }

  disabledToggle1() {
    const state = this.form1.get('value')?.disabled;
    if (state) {
      this.form1.get('value')?.enable();
    } else {
      this.form1.get('value')?.disable();
    }
  }
}
