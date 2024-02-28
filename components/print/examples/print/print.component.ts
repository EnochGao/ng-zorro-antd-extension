import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzxPrintModule } from 'ng-zorro-antd-extension/print';
import { GoodEvaluatePdfComponent } from '../good-evaluate-pdf/good-evaluate-pdf.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzGridModule,
    NzButtonModule,
    GoodEvaluatePdfComponent,
    NzxPrintModule,
  ],
  selector: 'nzx-print-example',
  template: `
    <div nz-row nzJustify="space-between" nzAlign="middle">
      <div nz-col>基于paged.js实现(推荐使用，支持分页，页眉页脚)</div>
      <div nz-col>
        <button nz-button nzType="primary" (click)="nzxPrint.print()">
          下载打印评价表
        </button>
      </div>
    </div>

    <div nz-row nzJustify="center">
      <nzx-print
        #nzxPrint
        [enablePreview]="true"
        printTitle="HUAWEI Mate 60 Pro评价表"
      >
        <div nzxPrintHeader>
          我是header不参与打印
          <button nz-button nzType="primary" (click)="nzxPrint.refresh()">
            刷新
          </button>
        </div>
        <div nzxPrintContent>
          <nzx-good-evaluate-pdf></nzx-good-evaluate-pdf>
        </div>
      </nzx-print>
    </div>

    <div nz-row nzJustify="space-between" nzAlign="middle">
      <div nz-col>普通打印</div>
      <div nz-col>
        <button
          nz-button
          nzType="primary"
          nzxPrint
          [printEl]="printRef"
          printTitle="评价表"
        >
          下载打印评价表
        </button>
      </div>
    </div>
    <div nz-row nzJustify="center">
      <div #printRef>
        <nzx-good-evaluate-pdf></nzx-good-evaluate-pdf>
      </div>
    </div>
  `,
})
export class NzxPrintExampleComponent {}
