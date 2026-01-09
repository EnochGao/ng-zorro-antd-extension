import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import {
  CoreViewer,
  Navigation,
  PageViewMode,
  Payload,
  SingleDocumentOptions,
} from '@vivliostyle/core';
import { NzxPrintContentDirective } from './nzx-print-content.directive';

/**
 * Vivliostyle 打印
 */
@Component({
  selector: 'nzx-print-v',
  template: `
    <ng-content select="[nzxPrintHeader]"></ng-content>

    <div #vivView [ngStyle]="{ margin: '10px 0' }"></div>

    <div nz-row nzJustify="end" *ngIf="enablePreview">
      <ng-template #totalTemplate let-total>共 {{ total }} 页</ng-template>
      <nz-pagination
        [nzPageIndex]="1"
        [nzTotal]="pageTotal"
        [nzPageSize]="1"
        [nzSize]="'small'"
        [nzShowTotal]="totalTemplate"
        nzShowQuickJumper
        (nzPageIndexChange)="onPageIndexChange($event)"
      ></nz-pagination>
    </div>
  `,
})
export class NzxPrintVComponent implements OnDestroy, AfterViewInit {
  @Input() printTitle = 'pdf';
  /**
   * a4 794px1123px
   */
  @Input() width = 814;
  @Input() height = 1143;
  @Input() enablePreview = true;
  @Input() pixelRatio = 8;
  @Output() pageRenderComplete = new EventEmitter<boolean>();

  viewer: CoreViewer | undefined;
  pageTotal = 0;

  @ViewChild('vivView')
  private vivViewRef!: ElementRef<HTMLDivElement>;

  @ContentChildren(NzxPrintContentDirective)
  private _printElQueryList!: QueryList<NzxPrintContentDirective>;
  private _title = document.title;
  private iframeEl!: HTMLIFrameElement;
  private _isRenderComplete = false;

  constructor(private platform: Platform, private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.createIframeWrapper();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.viewer) {
      this.clearView();
    }
  }

  onPageIndexChange(num: number) {
    if (this.viewer) {
      this.viewer.navigateToPage(Navigation.EPAGE, num - 1);
    }
  }

  print() {
    if (this._isRenderComplete) {
      this.iframeEl.contentWindow!.print();
    } else {
      console.warn('rending...');
    }
  }

  refresh() {
    setTimeout(() => {
      this.createIframeWrapper();
    }, 100);
  }

  private createIframeWrapper() {
    if (this.vivViewRef) {
      this.clearView();

      this.iframeEl = document.createElement('iframe');
      this.iframeEl.height = this.height + '';
      this.iframeEl.width = this.width + '';
      this.iframeEl.style.border = '1px solid #ccc';
      this.iframeEl.style.background = '#fff';

      const template = `
        <!DOCTYPE html>
        <html data-vivliostyle-paginated="true">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <base href="/" />
            <title>${this.printTitle}</title>
            <style>
              html[data-vivliostyle-paginated] {
                width: 100%;
                height: 100%;
              }
              html[data-vivliostyle-paginated] body,
              html[data-vivliostyle-paginated] [data-vivliostyle-viewer-viewport] {
                width: 100% !important;
                height: 100% !important;
                background: #fff;
              }
              html[data-vivliostyle-paginated],
              html[data-vivliostyle-paginated] body {
                margin: 0;
                padding: 0;
              }
            </style>
            <style id="vivliostyle-page-rules"></style>
          </head>
          <body>
            <div id="vivliostyle-viewer-viewport"></div>
          </body>
        </html>
      `;

      if (!this.enablePreview) {
        this.vivViewRef.nativeElement.setAttribute(
          'style',
          'visibility: hidden; height: 0; width: 0; position: absolute; border: 0'
        );
      }

      this.iframeEl.srcdoc = template;
      this.vivViewRef.nativeElement.appendChild(this.iframeEl);
      this.iframeEl.contentWindow!.onbeforeprint = () => {
        this.iframeEl.contentWindow!.parent.document.title = this.printTitle;
      };
      this.iframeEl.contentWindow!.onafterprint = () => {
        this.iframeEl.contentWindow!.parent.document.title = this._title;
      };
      this.createVivViewer();
    }
  }

  private createVivViewer() {
    this.iframeEl.onload = () => {
      const els: NzxPrintContentDirective[] = this._printElQueryList.toArray();
      const templates = this.getVivTemplates(els);
      const options: SingleDocumentOptions[] = [];
      templates.forEach((template) => {
        const docBlob = new Blob([template], {
          type: 'text/html',
        });
        const docURL = URL.createObjectURL(docBlob);
        options.push({ url: docURL });
      });
      this.viewer = new CoreViewer(
        {
          viewportElement: this.iframeEl.contentWindow?.document.body
            .firstElementChild as HTMLElement,
        },
        {
          pageViewMode: PageViewMode.SINGLE_PAGE,
          pixelRatio: this.pixelRatio,
        }
      );
      this.viewer.loadDocument(options);
      this.createListener(this.viewer);
    };
  }

  private handleError = (payload: Payload) => {
    console.log('error::', payload);
  };

  private handleReadyStateChange = (payload: Payload) => {
    this._isRenderComplete = false;
    this.pageRenderComplete.emit(false);
    if (this.viewer && this.viewer.readyState === 'complete') {
      const intervalTag = setInterval(() => {
        if (
          this.iframeEl &&
          this.iframeEl.contentWindow &&
          this.iframeEl.contentWindow.document
        ) {
          const images =
            this.iframeEl.contentWindow.document.getElementsByTagName('img');

          let allImagesLoaded = true;
          for (let i = 0; i < images.length; i++) {
            if (!images[i].complete) {
              allImagesLoaded = false;
              break;
            }
          }
          if (allImagesLoaded) {
            console.log('All images in iframe loaded successfully');
            this.pageRenderComplete.emit(true);
            this._isRenderComplete = true;
            clearInterval(intervalTag);
          }
        }
      }, 1000);
    }
  };

  private handleHyperlink = (payload: Payload) => {
    console.log('handleHyperlink::', payload);
  };

  private handleLoaded = (payload: Payload) => {
    console.log('handleLoaded::', payload);
  };

  private handleNavigation = (payload: Payload) => {
    this.pageTotal = payload.epageCount;
    this.cd.markForCheck();
  };

  private createListener(viewer: CoreViewer) {
    viewer.addListener('error', this.handleError);
    viewer.addListener('readystatechange', this.handleReadyStateChange);
    viewer.addListener('loaded', this.handleLoaded);
    viewer.addListener('hyperlink', this.handleHyperlink);
    viewer.addListener('nav', this.handleNavigation);
  }

  private removeListeners(viewer: CoreViewer) {
    viewer.removeListener('error', this.handleError);
    viewer.removeListener('readystatechange', this.handleReadyStateChange);
    viewer.removeListener('loaded', this.handleLoaded);
    viewer.removeListener('hyperlink', this.handleHyperlink);
    viewer.removeListener('nav', this.handleNavigation);
  }

  private getStyles(identifierStr: string | string[]): string {
    const stylesArray: string[] = [];
    const styleElements = document.getElementsByTagName('style');
    const length = styleElements.length;
    let identifiers: string[] = [];
    if (Array.isArray(identifierStr)) {
      identifiers = [...identifierStr];
    } else {
      identifiers = [identifierStr];
    }
    for (let index = 0; index < length; index++) {
      identifiers.forEach((s) => {
        if (styleElements[index].outerHTML.includes(s)) {
          const formateStr = styleElements[index].outerHTML.replace(
            /\/\*[\s\S]*?\*\//g,
            ''
          );
          stylesArray.push(formateStr);
        }
      });
    }
    return stylesArray.join('\r\n');
  }

  private getVivTemplates(directives: NzxPrintContentDirective[]) {
    const templates: string[] = [];
    directives.forEach((d) => {
      let styles = '';
      if (d.identifierStr || d.identifierStr.length > 0) {
        styles = this.getStyles(d.identifierStr);
      }

      let html = `
          <!DOCTYPE html>
          <html>
            <head>
            <meta charset="utf-8" />
            <title>${this.printTitle}</title>
            <base href="/" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
             ${d.customStyle}
             ${styles}
            </head>
            <body>
              ${d.elementRef.nativeElement.outerHTML}
            </body>
          </html>
        `;
      html = html.replace(/<!---->/g, ' ');
      templates.push(html);
    });

    return templates;
  }

  private clearView() {
    if (this.viewer) {
      this.removeListeners(this.viewer);
    }
    this.vivViewRef.nativeElement.innerHTML = '';
    this.viewer = undefined;
    this._isRenderComplete = false;
  }
}
