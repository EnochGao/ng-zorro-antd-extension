import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'nzx-checkbox-group-demo',
  templateUrl: './checkbox-group-demo.component.html',
  styleUrls: ['./checkbox-group-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxGroupDemoComponent implements OnInit {
  checkOptions = [
    { label: '客户信赖', value: 1 },
    { label: '技术评估', value: 2 },
  ];

  checkOptions1 = [
    { label: '客户信赖', value: 1 },
    { label: '技术评估', value: 2 },
  ];

  form!: FormGroup;
  form1!: FormGroup;

  inFn = (v: number) => {
    if ((v === 1)) return [1];
    if ((v === 2)) return [2];
    if ((v === 3)) return [1, 2];
    return [];
  };
  outFn = (v: number[]) => v.reduce((pre, cur) => pre + cur, 0);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      value: [1, []],
    });

    this.form1 = this.fb.group({
      value: [[], []],
    });
  }
}
