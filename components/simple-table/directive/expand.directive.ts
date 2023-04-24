import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[nzxExpandTr]',
})
export class NzxExpandDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
