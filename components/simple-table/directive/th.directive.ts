import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[nzxTh]',
})
export class NzxThDirective {
  @Input() width: string | null = null;

  constructor(public templateRef: TemplateRef<unknown>) {}
}
