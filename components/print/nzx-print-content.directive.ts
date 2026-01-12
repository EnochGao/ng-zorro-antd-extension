import { Directive, ElementRef, Input, inject } from '@angular/core';

@Directive({
  selector: '[nzxPrintContent]',
})
export class NzxPrintContentDirective {
  elementRef = inject(ElementRef);

  @Input() identifierStr: string | string[] = '';
  @Input() customStyle = '';
}
