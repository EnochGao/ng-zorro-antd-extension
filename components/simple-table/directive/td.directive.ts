import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[nzxTd]',
})
export class NzxTdDirective {
  @Input() key?: any;

  constructor(public templateRef: TemplateRef<any>) {}
}
