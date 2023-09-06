import { Directive, Input } from '@angular/core';
import { NzxQueryControlOptions } from '../type';
import { FormGroup } from '@angular/forms';

@Directive()
export abstract class NzxAbstractControl {
  @Input() form!: FormGroup<any>;
  @Input() control!: NzxQueryControlOptions;
}
