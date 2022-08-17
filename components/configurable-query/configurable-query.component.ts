import {
  AfterContentInit, ChangeDetectionStrategy,
  Component, ContentChildren, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList
} from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { NzJustify } from 'ng-zorro-antd/grid';
import { Subject } from 'rxjs';
import { ControlDirective } from './control.directive';
import { QueryControlOptions } from './type';

interface QueryParams {
  [key: string]: any;
}

/**
 * 查询组件
 * 支持模板自定义，在使用模板自定义时，要注意controlType应该设置为Template并且确保controlName与指令上的controlName应该相同
 */

@Component({
  selector: 'nzx-configurable-query',
  templateUrl: './configurable-query.component.html',
  styleUrls: ['./configurable-query.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'ConfigurableQuery'
})
export class ConfigurableQueryComponent implements OnInit, AfterContentInit, OnDestroy {

  @Input() controls: Array<QueryControlOptions> = [];
  /** 查询控件左侧控件布局方式 */
  @Input() nzJustify: NzJustify = 'start';
  /** 查询控件左侧控件占比 */
  @Input() lSpan = 24;
  /** 查询控件右侧查询按钮空间占比 */
  @Input() rSpan = 24;

  @Output() query = new EventEmitter<QueryParams>();
  @Output() resetQuery = new EventEmitter<QueryParams>();

  queryParams: QueryParams = {};
  queryForm!: FormGroup;

  private defaultValue: QueryParams = {};
  private params: QueryParams = {};
  private destroy$ = new Subject<void>();

  @ContentChildren(ControlDirective) controlTemplateList!: QueryList<ControlDirective>;

  constructor(
    private fb: FormBuilder,
  ) {
    this.queryForm = this.fb.group({});
  }


  ngOnInit(): void {
    this.queryForm.valueChanges.subscribe(val => {
      this.queryParams = val;
    });
  }

  ngAfterContentInit(): void {
    for (const control of this.controls) {
      if (control.controlType === 'Template') {
        const item = this.controlTemplateList.find(directive =>
          (directive.controlName === control.controlName));
        if (item) {
          control.templateRef = item.templateRef;
        }
      }
      this.queryForm.addControl(control.controlName, control.controlInstance);
    }

    this.queryParams = this.queryForm.value;

    this.defaultValue = Object.assign({}, this.queryParams);

    if (this.params) { // 缓存回显查询条件
      this.queryForm.patchValue(this.params);
    }
  }

  setQueryParams(params: QueryParams) {
    this.params = params;
  }

  search(): void {
    this.query.emit(this.queryParams);
  }

  reset() {
    this.queryForm.reset(this.defaultValue);
    this.resetQuery.emit(this.queryParams);
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

}
