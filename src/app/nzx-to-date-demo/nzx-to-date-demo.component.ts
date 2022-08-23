import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nzx-to-date-demo',
  templateUrl: './nzx-to-date-demo.component.html',
  styleUrls: ['./nzx-to-date-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzxToDateDemoComponent implements OnInit {

  validateForm!: FormGroup;

  submitForm(): void {
    console.log(this.validateForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      datePicker: [null],
      datePickerTime: [null],
      monthPicker: [null],
      rangePicker: [[]],
      rangePickerTime: [[]],
      timePicker: [null]
    });
  }

}
