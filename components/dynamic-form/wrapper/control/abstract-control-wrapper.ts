import {
  Directive,
  OnInit,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { NzxDFConfigService } from '../../config/dynamic-form-config';

@Directive()
export class NzxDFAbstractControlWrapper implements OnInit {
  private nzxDFConfig = inject(NzxDFConfigService);

  @ViewChild('dfControlTpl', { static: true, read: ViewContainerRef })
  private controlTemplateView!: ViewContainerRef;

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
