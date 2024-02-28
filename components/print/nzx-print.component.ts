import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  Inject,
  Input,
} from '@angular/core';
import { getElementTag } from './util';

@Directive({
  selector: '[nzxPrintContent]',
})
export class NzxPrintContentDirective {}

/**
 * 使用Paged.js打印
 */
@Component({
  selector: 'nzx-print',
  template: `
    <ng-content select="[nzxPrintHeader]"></ng-content>
    <div id="nzx-print-iframe-content"></div>
  `,
  styles: [
    `
      #nzx-print-iframe-content {
        iframe {
          background: #fff;
          border: 1px solid #ccc;
        }
      }
    `,
  ],
})
export class NzxPrintComponent implements AfterViewInit {
  @Input() printTitle = 'pdf';
  /**
   * a4 794px1123px
   */
  @Input() width = 814;
  @Input() height = 1143;
  @Input() enablePreview = true;

  @ContentChild(NzxPrintContentDirective, { read: ElementRef, static: true })
  private _printEl!: ElementRef;
  private iframeEl!: HTMLIFrameElement;
  private _title = this.document.title;

  private afterPrint = () => {
    this.iframeEl.contentWindow!.parent.document.title = this._title;
  };
  private beforePrint = () => {
    this.iframeEl.contentWindow!.parent.document.title = this.printTitle;
  };

  constructor(
    private platform: Platform,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit(): void {
    this.render();
  }

  print() {
    if (this.iframeEl.contentWindow) {
      this.iframeEl.contentWindow.focus();
      this.iframeEl.contentWindow.print();
    }
  }

  refresh() {
    setTimeout(() => {
      this.render();
    }, 100);
  }

  private render() {
    const container = this.document.getElementById('nzx-print-iframe-content');
    this.iframeEl = this.document.createElement('iframe');
    this.iframeEl.height = this.height + '';
    this.iframeEl.width = this.width + '';
    if (!this.enablePreview) {
      this.iframeEl.style.visibility = 'hidden';
      if (this.platform.FIREFOX) {
        this.iframeEl.setAttribute(
          'style',
          'width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0'
        );
      } else {
        this.iframeEl.setAttribute(
          'style',
          'visibility: hidden; height: 0; width: 0; position: absolute; border: 0'
        );
      }
    }
    if (container) {
      container.innerHTML = '';
      container.appendChild(this.iframeEl);
    }

    if (this.iframeEl.contentWindow) {
      this.iframeEl.contentWindow.document.open();
      this.iframeEl.contentWindow.document.write(this.getTemplateStr());
      this.iframeEl.contentWindow.document.close();
      // chorme bug
      this.iframeEl.contentWindow.onbeforeprint = this.beforePrint;
      this.iframeEl.contentWindow.onafterprint = this.afterPrint;
    }
  }

  private getTemplateStr() {
    const styles = getElementTag('style');

    const scripts = `
        <script src="https://winkong-frontend.oss-cn-qingdao.aliyuncs.com/javascript/paged/paged.polyfill.min.js"></script>
        <script>
          class RepeatingTableHeaders extends Paged.Handler {
            constructor(chunker, polisher, caller) {
              super(chunker, polisher, caller);
            }

            afterPageLayout(pageElement, page, breakToken, chunker) {
              let tables = pageElement.querySelectorAll('table[data-split-from]');
              tables.forEach((table) => {
                let ref = table.dataset.ref;
                let sourceTable = chunker.source.querySelector(
                  "[data-ref='" + ref + "']"
                );
                let header = sourceTable.querySelector('thead');
                if (header) {
                  let clonedHeader = header.cloneNode(true);
                  table.insertBefore(clonedHeader, table.firstChild);
                }
              });
            }
          }
          Paged.registerHandlers(RepeatingTableHeaders);
        </script>
      `;

    const html = `
        <!DOCTYPE html>
        <html>
          <head>
          <meta charset="utf-8" />
          <title>${this.printTitle}</title>
          <base href="/" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="preconnect"
            href="https://winkong-frontend.oss-cn-qingdao.aliyuncs.com"
          />
          <style>
              ::-webkit-scrollbar {
                width: 5px;
                height: 5px;
              }
              ::-webkit-scrollbar-thumb {
                background-color: #999;
                -webkit-border-radius: 5px;
                border-radius: 5px;
              }
              ::-webkit-scrollbar-thumb:vertical:hover {
                background-color: #666;
              }
              ::-webkit-scrollbar-thumb:vertical:active {
                background-color: #666;
              }
              ::-webkit-scrollbar-button {
                display: none;
              }
              ::-webkit-scrollbar-track {
                background-color: #f1f1f1;
              }
          </style>

            ${styles}
            ${scripts}
          </head>
          <body>
            ${this._printEl.nativeElement.outerHTML}
          </body>
        </html>
      `;

    return html;
  }
}
