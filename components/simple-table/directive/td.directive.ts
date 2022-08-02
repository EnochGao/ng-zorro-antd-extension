import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[nzxTd]'
})
export class TdDirective {

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }

}
