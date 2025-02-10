import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NzxDFConfigService } from '../config/dynamic-form-config';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'nzx-dynamic-form-item',
  template: ` <ng-template #dfItemTpl></ng-template> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormItemComponent implements OnInit {
  @ViewChild('dfItemTpl', { static: true, read: ViewContainerRef })
  private itemTemplateView!: ViewContainerRef;

  constructor(private nzxDFConfig: NzxDFConfigService) {}

  ngOnInit(): void {
    this.renderItem();
  }

  private renderItem() {
    this.itemTemplateView.clear();
    const labelComponent = this.nzxDFConfig.getItemWrapper('builtin-item');
    if (labelComponent) {
      const componentRef =
        this.itemTemplateView.createComponent(labelComponent);
    } else {
      throw `item::  is invalidate`;
    }
  }
}
