import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[nzxControl]'
})
export class ControlDirective {

  @Input() controlName!: string;

  constructor(public templateRef: TemplateRef<unknown>) { }

}
