import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[nzxTh]'
})
export class ThDirective {

  @Input() width: string | null = null;

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }

}
