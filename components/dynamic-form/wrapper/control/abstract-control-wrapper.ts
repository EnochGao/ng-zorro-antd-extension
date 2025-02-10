import { Directive, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NzxDFConfigService } from '../../config/dynamic-form-config';

@Directive()
export class NzxDFAbstractControlWrapper implements OnInit {
  @ViewChild('dfControlTpl', { static: true, read: ViewContainerRef })
  private controlTemplateView!: ViewContainerRef;

  constructor(private nzxDFConfig: NzxDFConfigService) {}

  ngOnInit(): void {
    this.renderControl();
  }

  private renderControl() {
    this.controlTemplateView.clear();
    const controlComponent = this.nzxDFConfig.getControl('input');
    if (controlComponent) {
      const componentRef =
        this.controlTemplateView.createComponent(controlComponent);
    } else {
      throw `label::  is invalidate`;
    }
  }
}
