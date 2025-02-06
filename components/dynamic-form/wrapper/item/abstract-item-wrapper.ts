import {
  Directive,
  Injectable,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NzxDFConfigService } from 'ng-zorro-antd-extension/dynamic-form';

@Directive()
export class NzxDFAbstractItemWrapper implements OnInit {
  @ViewChild('dfLabelWrapperTpl', { static: true, read: ViewContainerRef })
  private labelWrapperTemplateView!: ViewContainerRef;
  @ViewChild('dfControlWrapperTpl', { static: true, read: ViewContainerRef })
  private controlWrapperTemplateView!: ViewContainerRef;

  constructor(private nzxDFConfig: NzxDFConfigService) {}

  ngOnInit(): void {
    this.renderLabel();
    this.renderControl();
  }

  private renderLabel() {
    this.labelWrapperTemplateView.clear();
    const labelWrapperComponent = this.nzxDFConfig.getLabelWrapper('builtin-label');
    if (labelWrapperComponent) {
      const componentRef =
        this.labelWrapperTemplateView.createComponent(labelWrapperComponent);
    } else {
      throw `label::  is invalidate`;
    }
  }
  private renderControl() {
    this.controlWrapperTemplateView.clear();
    const controlWrapperComponent = this.nzxDFConfig.getControlWrapper('builtin-control');
    if (controlWrapperComponent) {
      const componentRef =
        this.controlWrapperTemplateView.createComponent(controlWrapperComponent);
    } else {
      throw `label::  is invalidate`;
    }
  }
}
