import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[nzxExpand]'
})
export class ExpandDirective {

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }

}
