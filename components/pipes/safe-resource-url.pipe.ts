import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'nzxSafeResourceUrl',
})
export class NzxSafeResourceUrlPipe implements PipeTransform {
  private domSanitizer: DomSanitizer = inject(DomSanitizer);

  transform(value: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
