import { AbstractControl, FormGroup } from '@angular/forms';

export function validForm(form: FormGroup) {
  for (const key in form.controls) {
    if (Object.prototype.hasOwnProperty.call(form.controls, key)) {
      if (form.controls[key].invalid) {
        form.controls[key].markAsDirty();
      } else {
        (form.controls[key] as AbstractControl).markAsPristine();
      }
      form.controls[key].updateValueAndValidity({ onlySelf: true });
    }
  }
}
