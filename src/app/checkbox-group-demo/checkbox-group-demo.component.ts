import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox-group-demo',
  templateUrl: './checkbox-group-demo.component.html',
  styleUrls: ['./checkbox-group-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxGroupDemoComponent implements OnInit {

  checkOptions = [
    { label: '客户信赖', value: 1 },
    { label: '技术评估', value: 2 },
  ];

  form!: FormGroup;

  inFn = (v: number) => {
    if (v = 1) return [1];
    if (v = 2) return [2];
    if (v = 3) return [1, 2];
    return [];
  };
  outFn = (v: number[]) => v.reduce((pre, cur) => pre + cur, 0);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      value: [1, []]
    });
  }

}
