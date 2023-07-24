import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'nzxSafeStyle',
})
export class NzxSafeStylePipe implements PipeTransform {
  private domSanitizer: DomSanitizer = inject(DomSanitizer);

  transform(value: string) {
    return this.domSanitizer.bypassSecurityTrustStyle(value);
  }
}
