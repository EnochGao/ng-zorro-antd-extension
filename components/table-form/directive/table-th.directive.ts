import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[nzxTableFormTh]'
})
export class TableFormThDirective {
  @Input() controlName!: string;
  @Input() width?: string;

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }

}
