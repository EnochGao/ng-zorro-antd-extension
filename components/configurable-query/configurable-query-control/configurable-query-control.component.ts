import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';
import { NzxQueryConfigService } from '../query-config.service';
import { NzxQueryControlOptions, NzxQueryControlType } from '../type';

@Component({
  selector: 'nzx-configurable-query-control',
  template: ` <ng-template></ng-template> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxConfigurableQueryControlComponent implements OnInit, OnDestroy {
  @Input() form!: FormGroup;
  @Input() control!: NzxQueryControlOptions;

  @ViewChild(TemplateRef, { static: true, read: ViewContainerRef })
  private controlTemplateView!: ViewContainerRef;

  private destroy$ = new Subject<void>();

  constructor(private nzxQueryConfigService: NzxQueryConfigService) {}

  ngOnInit(): void {
    this.nzxQueryConfigService.controlTypes$
      .pipe(takeUntil(this.destroy$))
      .subscribe((list) => {
        this.renderControl(list);
      });
  }

  ngOnDestroy(): void {
    if (this.destroy$) {
      this.destroy$.next();
      this.destroy$.complete();
    }
  }

  private renderControl(list: NzxQueryControlType[]) {
    this.controlTemplateView.clear();
    const config = list.find((i) => i.key === this.control.controlType);
    if (config) {
      const componentRef = this.controlTemplateView.createComponent(
        config.component as any
      );
      componentRef.setInput('control', this.control);
      componentRef.setInput('form', this.form);
    } else {
      throw `ControlType:: '${this.control.controlType}' is invalidate`;
    }
  }
}