import { Directive, Input, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[nzxTh]',
})
export class NzxThDirective {
  templateRef = inject<TemplateRef<unknown>>(TemplateRef);

  @Input() width: string | null = null;
}
