import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[nzxExpandTr]'
})
export class ExpandDirective {

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }

}
