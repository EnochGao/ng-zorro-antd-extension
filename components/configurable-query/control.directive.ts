import { Directive, Input, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[nzxControl]',
})
export class NzxControlDirective {
  templateRef = inject<TemplateRef<unknown>>(TemplateRef);

  @Input() nzxControl!: string;
}
