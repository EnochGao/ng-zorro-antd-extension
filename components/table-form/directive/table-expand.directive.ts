import { Directive, Input, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[nzxTableFormExpand]',
})
export class NzxTableFormExpandDirective {
  templateRef = inject<TemplateRef<any>>(TemplateRef);

  @Input() controlName!: string;
}
