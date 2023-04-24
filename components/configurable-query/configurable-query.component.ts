import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { NzJustify } from 'ng-zorro-antd/grid';
import { Subject, takeUntil } from 'rxjs';
import { ControlDirective } from './control.directive';
import { NzxQueryParams, NzxQueryControlOptions } from './type';

/**
 * 查询组件
 * 支持模板自定义，在使用模板自定义时，要注意controlType应该设置为Template并且确保controlName与指令上的nzxControl应该相同
 */

@Component({
  selector: 'nzx-configurable-query',
  templateUrl: './configurable-query.component.html',
  styleUrls: ['./configurable-query.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'NzxConfigurableQuery',
})
export class NzxConfigurableQueryComponent
  implements OnInit, AfterContentInit, OnDestroy
{
  /** 配置项 */
  @Input() controls: Array<NzxQueryControlOptions> = [];
  /** 查询表单排列方式 */
  @Input() nzxJustify: NzJustify = 'start';
  /** 查询项间隔 */
  @Input() nzxGutter: number = 8;
  /** 一行展示多少查询项 */
  @Input() lineNumber: number = 3;
  /** 操作按钮所占栅格数，24则换行 */
  @Input() nzxBtnSpan: number | null = null;
  /**启用折叠 */
  @Input() nzxCollapse = true;
  /** 初始化时，主动查询 */
  @Input() initQuery = false;

  /** 查询重置时会触发抛出查询参数 */
  @Output() queryParamsChange = new EventEmitter<NzxQueryParams>();

  queryParams: NzxQueryParams = {};
  queryForm!: FormGroup;
  isCollapse = true;

  private defaultValue: NzxQueryParams = {};
  private params: NzxQueryParams = {};
  private destroy$ = new Subject<void>();
  private _nzxBtnSpan: number | null = null;

  @ContentChildren(ControlDirective)
  controlTemplateList!: QueryList<ControlDirective>;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {
    this.queryForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.queryForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        this.queryParams = val;
      });

    this._nzxBtnSpan = this.nzxBtnSpan;
  }

  ngAfterContentInit(): void {
    for (const control of this.controls) {
      if (control.controlType === 'Template') {
        const item = this.controlTemplateList.find(
          (directive) => directive.nzxControl === control.controlName
        );
        if (item) {
          control.templateRef = item.templateRef;
        }
      }
      this.queryForm.addControl(
        control.controlName,
        control.controlInstance ?? this.fb.control(control.default ?? null)
      );
    }

    this.queryParams = this.queryForm.value;

    this.defaultValue = Object.assign({}, this.queryParams);

    if (this.params) {
      // 缓存回显查询条件
      this.queryForm.patchValue(this.params);
    }

    if (this.initQuery) {
      this.search();
    }
  }

  setQueryParams(params: NzxQueryParams) {
    this.params = params;
  }

  /**
   * 根据controlName设置config值
   */
  setControl(controlName: string, config: Partial<NzxQueryControlOptions>): void {
    let control = this.getControl(controlName);
    if (control) {
      Object.keys(config).forEach((key) => {
        (control as any)[key] = (config as any)[key];
      });
    }
  }

  /**
   * 根据controlName获取config项
   */
  getControl(controlName: string): NzxQueryControlOptions | undefined {
    const index = this.controls.findIndex(
      (item) => item.controlName === controlName
    );
    if (index > -1) {
      return this.controls[index];
    }
    return void 0;
  }

  search(): void {
    if (this.queryForm.invalid) {
      Object.values(this.queryForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    } else {
      this.queryParamsChange.emit(this.queryParams);
    }
  }

  reset() {
    this.queryForm.reset(this.defaultValue);
    this.search();
  }

  toggleCollapse() {
    this.controls.forEach((control) => {
      if (this.isCollapse && control.collapse === true) {
        // 展开
        control.collapse = false;
        this.nzxBtnSpan = 24;
      }
      if (!this.isCollapse && control.collapse === false) {
        control.collapse = true;
        this.nzxBtnSpan = this._nzxBtnSpan;
      }
    });
    this.isCollapse = !this.isCollapse;
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
