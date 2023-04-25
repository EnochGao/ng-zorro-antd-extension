import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[nzxTableFormTd]',
})
export class NzxTableFormTdDirective {
  @Input() controlName!: string;

  constructor(public templateRef: TemplateRef<any>) {}
}
