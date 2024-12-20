import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[nzxPrintContent]',
})
export class NzxPrintContentDirective {
  @Input() identifierStr: string | string[] = '';
  @Input() customStyle = '';
  constructor(public elementRef: ElementRef) {}
}
