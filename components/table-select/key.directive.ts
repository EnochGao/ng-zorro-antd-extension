/* eslint-disable @angular-eslint/directive-selector */
import { Directive, Input, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[nzxTableSelectKey]',
  exportAs: 'NzxTableSelectKey',
})
export class NzxKeyDirective {
  @Input('nzxTableSelectKey') key!: string;
  templateRef = inject(TemplateRef);
}
