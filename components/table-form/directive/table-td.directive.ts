import { Directive, Input, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[nzxTableFormTd]',
})
export class NzxTableFormTdDirective {
  templateRef = inject<TemplateRef<any>>(TemplateRef);

  @Input() controlName!: string;
}
