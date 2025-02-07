import { Injectable } from '@angular/core';
import { NzxDFBuiltInItemWrapperComponent } from '../wrapper/item/built-in-item-wrapper';
import { NzxDFBuiltInLabelWrapperComponent } from '../wrapper/label/built-in-label-wrapper';
import { NzxDFBuiltInControlWrapperComponent } from '../wrapper/control/built-in-control-wrapper';
import { NzxDFAbstractItemWrapper } from '../wrapper/item/abstract-item-wrapper';
import { NzxDFAbstractLabelWrapper } from '../wrapper/label/abstract-label-wrapper';
import { NzxDFAbstractControlWrapper } from '../wrapper/control/abstract-control-wrapper';
import { NzxDFAbstractControl } from '../controls/abstract.control';
import { NzxDFInputControlComponent } from '../controls/input.control';
import { NzxDFDatePickerControlComponent } from '../controls/date-picker.control';
import { NzxDFRangePickerControlComponent } from '../controls/range-picker.control';
import { NzxDFSelectControlComponent } from '../controls/select.control';
import { NzxDFTemplateControlComponent } from '../controls/template.control';

@Injectable({ providedIn: 'root' })
export class NzxDFConfigService {
  private itemWrapperMap = new Map<string, typeof NzxDFAbstractItemWrapper>([
    ['builtin-item', NzxDFBuiltInItemWrapperComponent],
  ]);

  private labelWrapperMap = new Map<string, typeof NzxDFAbstractLabelWrapper>([
    ['builtin-label', NzxDFBuiltInLabelWrapperComponent],
  ]);

  private controlWrapperMap = new Map<
    string,
    typeof NzxDFAbstractControlWrapper
  >([['builtin-control', NzxDFBuiltInControlWrapperComponent]]);

  private controlMap = new Map<string, typeof NzxDFAbstractControl>([
    ['input', NzxDFInputControlComponent],
    ['datePicker', NzxDFDatePickerControlComponent],
    ['rangePicker', NzxDFRangePickerControlComponent],
    ['select', NzxDFSelectControlComponent],
    ['template', NzxDFTemplateControlComponent],
  ]);
  constructor() {}

  getItemWrapper(key: string) {
    return this.itemWrapperMap.get(key);
  }
  getLabelWrapper(key: string) {
    return this.labelWrapperMap.get(key);
  }
  getControlWrapper(key: string) {
    return this.controlWrapperMap.get(key);
  }

  getControl(key: string) {
    return this.controlMap.get(key);
  }
}
