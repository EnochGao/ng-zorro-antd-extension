import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'nzx-good-evaluate-pdf',
  templateUrl: './good-evaluate-pdf.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./good-evaluate-pdf.component.less'],
})
export class GoodEvaluatePdfComponent {}
