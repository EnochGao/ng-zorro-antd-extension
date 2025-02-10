import { Directive, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

/**
 * 用来动态添加control type类型控件，类型控件需要继承此控件
 */
@Directive()
export class NzxDFAbstractControl {
  @Input() form!: FormGroup<any>;
  @Input() control!: any;
}
