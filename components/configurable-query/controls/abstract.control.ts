import { Directive, Input } from '@angular/core';
import { NzxQueryControlOptions } from '../type';
import { FormGroup } from '@angular/forms';

/**
 * 用来动态添加control type类型控件，类型控件需要继承此控件
 */

@Directive()
export abstract class NzxAbstractControl {
  @Input() form!: FormGroup<any>;
  @Input() control!: NzxQueryControlOptions;
}
