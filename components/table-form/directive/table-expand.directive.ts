import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[nzxTableFormExpand]',
})
export class NzxTableFormExpandDirective {
  @Input() controlName!: string;

  constructor(public templateRef: TemplateRef<any>) {}
}
