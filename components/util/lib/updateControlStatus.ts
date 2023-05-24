import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

export function updateControlStatus(control: FormGroup | FormArray) {
  if (control instanceof FormGroup) {
    for (const key in control.controls) {
      if (Object.prototype.hasOwnProperty.call(control.controls, key)) {
        if (control.controls[key].invalid) {
          control.controls[key].markAsDirty();
        } else {
          (control.controls[key] as AbstractControl).markAsPristine();
        }
        control.controls[key].updateValueAndValidity({ onlySelf: true });

        if (
          (control.controls[key] as any)?.controls &&
          (control.controls[key] as any)?.controls
        ) {
          updateControlStatus(control.controls[key] as any);
        }
      }
    }
  }

  if (control instanceof FormArray) {
    for (const item of control.controls) {
      if (item.invalid) {
        item.markAsDirty();
      } else {
        item.markAsPristine();
      }
      item.updateValueAndValidity({ onlySelf: true });
      if ((item as any)?.controls && (item as any)?.controls) {
        updateControlStatus(item as any);
      }
    }
  }
}
