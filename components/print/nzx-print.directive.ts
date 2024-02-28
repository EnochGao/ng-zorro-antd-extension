import {
  AfterViewInit,
  Directive,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { getElementTag } from './util';

/**
 * 常规打印
 */
@Directive({
  selector: 'button[nzxPrint]',
})
export class NzxPrintDirective implements OnInit, AfterViewInit {
  @Input() printEl: HTMLElement | string | undefined;
  @Input() printTitle: string | undefined = 'pdf';
  private _printEl!: HTMLElement;

  ngOnInit(): void {
    if (!this.printEl) {
      throw new Error(
        'The "printEl" input is required for the nzxPrint directive.'
      );
    }
  }

  ngAfterViewInit(): void {
    this.getElement();
  }

  @HostListener('click')
  private print(): void {
    const newWin = window.open('', '_blank');

    if (newWin) {
      const styles = getElementTag('style');
      const links = getElementTag('link');
      const baseTag = getElementTag('base');

      const scripts = `
      <script>
        window.onload = function () {
          window.print();
        };
        window.onafterprint = function () {
          window.close();
        };
      </script>
      `;

      const html = `
      <!DOCTYPE html>
        <html>
          <head>
            <title>${this.printTitle}</title>
            ${baseTag}
            ${links}
            ${styles}
            ${scripts}
          </head>
          <body>
            ${this._printEl.outerHTML}
          </body>
        </html>
      `;
      newWin.document.open();
      newWin.document.write(html);
      newWin.document.close();
    }
  }

  private getElement(): void {
    if (typeof this.printEl === 'string') {
      const el: HTMLElement | null = document.querySelector(this.printEl);
      if (el) {
        this._printEl = el;
      } else {
        throw new Error('printEl is not find');
      }
    } else if (this.printEl instanceof HTMLElement) {
      this._printEl = this.printEl;
    } else {
      throw new Error('printEl is invalid');
    }
  }
}
