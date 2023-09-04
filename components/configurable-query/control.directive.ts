import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[nzxControl]',
})
export class NzxControlDirective {
  @Input() nzxControl!: string;
  constructor(public templateRef: TemplateRef<unknown>) {}
}
