import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[nzxExpandTr]',
})
export class NzxExpandDirective {
  templateRef = inject<TemplateRef<unknown>>(TemplateRef);
}
