/* eslint-disable @angular-eslint/directive-selector */
import { Directive, Input, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[nzxKey]',
})
export class NzxKeyDirective {
  @Input('nzxKey') key!: string;
  templateRef = inject(TemplateRef);
}
