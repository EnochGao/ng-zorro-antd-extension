import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[nzxTableFormTd]'
})
export class TableFormTdDirective {
  @Input() controlName!: string;

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }

}
