import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

function updateControl(
  control: AbstractControl,
  markAsClean: boolean,
  customOperate?: (control: AbstractControl) => void
) {
  if (markAsClean) {
    control.markAsPristine();
    if (customOperate) {
      customOperate(control);
    }
    control.updateValueAndValidity({
      onlySelf: true,
    });
  } else {
    if (control.invalid) {
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: true });
    }
  }
  if ((control as any)?.controls) {
    updateControlStatus(control as any, markAsClean);
  }
}

/**
 * 用来更新控件的状态，默认标注控件以及子控件为dirty，通常用来更新ng zorro中表单错误及时更新错误提示
 *
 * @param abstractControl FormControl、FormArray、FormGroup实例
 * @param markAsClean 是否标记控件为干净状态，实际只设置pristine为true，如要设置更多参数请使用customOperate自定义
 * @param customOperate 当markAsClean为true时可以自定义操作，用来完全让control干净，比如markAsUntouched
 */
export function updateControlStatus(
  abstractControl: AbstractControl,
  markAsClean = false,
  customOperate?: (control: AbstractControl) => void
) {
  if (abstractControl instanceof FormGroup) {
    for (const key in abstractControl.controls) {
      if (Object.prototype.hasOwnProperty.call(abstractControl.controls, key)) {
        const control = abstractControl.controls[key];
        updateControl(control, markAsClean, customOperate);
      }
    }
  } else if (abstractControl instanceof FormArray) {
    for (const control of abstractControl.controls) {
      updateControl(control, markAsClean, customOperate);
    }
  } else if (abstractControl instanceof FormControl) {
    updateControl(abstractControl, markAsClean, customOperate);
  }
}
