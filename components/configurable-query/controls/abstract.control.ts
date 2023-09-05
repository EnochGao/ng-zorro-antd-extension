import { Directive, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzxQueryControlOptions } from '../type';

@Directive()
export abstract class NzxAbstractControl {
  @Input() form!: FormGroup;
  @Input() control!: NzxQueryControlOptions;
}
