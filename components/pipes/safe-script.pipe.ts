import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'nzxSafeScript',
})
export class NzxSafeScriptPipe implements PipeTransform {
  private domSanitizer: DomSanitizer = inject(DomSanitizer);

  transform(value: string) {
    return this.domSanitizer.bypassSecurityTrustScript(value);
  }
}
