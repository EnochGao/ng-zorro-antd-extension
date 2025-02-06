import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NzxDFConfigService } from './config/dynamic-form-config';

@Component({
  selector: 'nzx-dynamic-form',
  template: `
    <form nz-form>
      <ng-template #dfItemTemp></ng-template>
    </form>
  `,
})
export class NzxDynamicFormComponent implements OnInit {
  @ViewChild('dfItemTemp', { static: true, read: ViewContainerRef })
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
