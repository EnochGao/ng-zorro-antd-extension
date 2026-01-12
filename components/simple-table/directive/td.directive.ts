import { Directive, Input, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[nzxTd]',
})
export class NzxTdDirective {
  templateRef = inject<TemplateRef<any>>(TemplateRef);

  @Input() key?: any;
}
