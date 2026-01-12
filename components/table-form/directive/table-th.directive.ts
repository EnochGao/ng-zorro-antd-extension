import { Directive, Input, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[nzxTableFormTh]',
})
export class NzxTableFormThDirective {
  templateRef = inject<TemplateRef<any>>(TemplateRef);

  @Input() controlName!: string;
  @Input() width?: string;
}
