import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nzx-to-date-demo',
  templateUrl: './nzx-to-date-demo.component.html',
  styleUrls: ['./nzx-to-date-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzxToDateDemoComponent implements OnInit {

  form!: FormGroup;

  pasteValue = {
    datePicker: "2022-08-23",
    datePickerTime: "2022-08-23 09:07:51",
    datePickerTimeH: "2022-08-23 09",
    monthPicker: "2022-11",
    rangePicker: [
      "2022-08-23",
      "2022-09-20"
    ],
    rangePickerTime: [
      "2022-08-20 09:07:58",
      "2022-08-23 12:08:04"
    ],
    timePicker: "06:08:11"
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      datePicker: [null],
      datePickerTime: [null],
      datePickerTimeH: [null],
      monthPicker: [null],
      rangePicker: [[]],
      rangePickerTime: [[]],
      timePicker: [null]
    });
  }


  submitForm(): void {
    console.log(this.form.value);
    this.pasteValue = this.form.value;
  }

  paste() {
    this.form.patchValue(this.pasteValue);
  }

  reset() {
    this.form.reset({});
  }

}
