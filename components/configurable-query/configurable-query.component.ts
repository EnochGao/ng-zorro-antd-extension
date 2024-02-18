import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

import { NzxQueryI18nInterface } from 'ng-zorro-antd-extension/i18n';
import { updateControlStatus } from 'ng-zorro-antd-extension/util';
import { NzJustify } from 'ng-zorro-antd/grid';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Subject, takeUntil } from 'rxjs';
import { NzxControlDirective } from './control.directive';
import { NzxQueryControlOptions, NzxQueryParams } from './type';

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
  implements OnChanges, OnInit, AfterContentInit, OnDestroy
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

  /** 缺省 固定参数 */
  @Input() fixedParams = {};

  /** 查询时会触发抛出查询参数 */
  @Output() queryChange = new EventEmitter<NzxQueryParams>();
  /** 重置时会触发抛出查询参数 */
  @Output() resetChange = new EventEmitter<NzxQueryParams>();

  /** form 表单*/
  queryForm!: FormGroup;

  /** 查询组件出参*/
  get queryParams() {
    return this._queryParams;
  }

  set queryParams(value: any) {
    this._queryParams = value;
  }

  get collapseText() {
    return this.isCollapse ? this.locale.expand : this.locale.collapse;
  }

  get collapseIcon() {
    return this.isCollapse ? 'down' : 'up';
  }

  locale!: NzxQueryI18nInterface;

  /**是否展开状态*/
  private isCollapse = true;
  private _queryParams: NzxQueryParams = {};
  private defaultValue: NzxQueryParams = {};
  private cacheParams: NzxQueryParams = {};
  private destroy$ = new Subject<void>();
  private _nzxBtnSpan: number | null = null;

  @ContentChildren(NzxControlDirective, { descendants: true })
  controlTemplateList!: QueryList<NzxControlDirective>;

  constructor(
    private i18n: NzI18nService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    this.queryForm = this.fb.group({});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['controls'] && !changes['controls'].isFirstChange()) {
      const controls = changes['controls'].currentValue;
      if (Array.isArray(controls)) {
        this.generateForm(controls);
      }
    }
  }

  ngOnInit(): void {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData('Query');
      this.cd.markForCheck();
    });

    this.queryForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        this._queryParams = {
          ...val,
          ...this.fixedParams,
        };
      });

    this._nzxBtnSpan = this.nzxBtnSpan;
  }

  ngAfterContentInit(): void {
    this.generateForm(this.controls);

    if (this.initQuery) {
      this.search();
    }
  }

  /** 设置查询值进行回显 */
  setQueryParams(cacheParams: NzxQueryParams): void {
    this.cacheParams = cacheParams;
    this.queryForm.patchValue(cacheParams);
  }

  /**
   * 根据controlName设置config值
   */
  setControl(
    controlName: string,
    config: Partial<NzxQueryControlOptions>
  ): void {
    Promise.resolve().then(() => {
      const control = this.getControl(controlName);
      if (control) {
        Object.keys(config).forEach((key) => {
          (control as any)[key] = (config as any)[key];
        });
      }
    });
  }

  /**
   * 动态添加控件
   */
  addControl(config: NzxQueryControlOptions): void {
    const control = this.getControl(config.controlName);
    if (!control) {
      this.collapse();
      if (config.controlName) {
        this.queryForm.addControl(
          config.controlName,
          config.controlInstance ?? this.fb.control(config.default ?? null)
        );
      }
      this.controls.push(config);
      this.cd.markForCheck();
    } else {
      throw `The control name: '${config.controlName}' already exists!`;
    }
  }

  /**
   * 根据控件名删除控件
   */
  removeControl(controlName: string): void {
    const control = this.getControl(controlName);
    if (control) {
      this.collapse();
      this.queryForm.removeControl(controlName);
      this.controls = this.controls.filter(
        (c) => c.controlName !== controlName
      );

      this.cd.markForCheck();
    } else {
      throw `The control name: '${controlName}' not find!`;
    }
  }

  /**
   * 根据controlName获取config项
   */
  getControl(
    controlName: string | undefined
  ): NzxQueryControlOptions | undefined {
    return this.controls.find((config) => config.controlName === controlName);
  }

  /**
   * 检索给定控件名称或路径的子控件。
   * 这个 getFormControl 签名支持字符串和 const 数组（.getFormControl(['foo', 'bar'] as const)）
   * 注意调用时机，最好在afterViewInit中调用
   */
  getFormControl(
    path: string | readonly (string | number)[]
  ): AbstractControl<any, any> | null {
    return this.queryForm.get(path);
  }

  /** 查询 */
  search(): void {
    if (this.queryForm.invalid) {
      updateControlStatus(this.queryForm);
      return;
    }
    this.queryChange.emit(this._queryParams);
  }

  /** 重置 */
  reset(): void {
    if (this.queryForm.invalid) {
      updateControlStatus(this.queryForm);
      return;
    }
    this.queryForm.reset(this.defaultValue);
    this.resetChange.emit(this._queryParams);
  }

  /**展开、收起*/
  toggleCollapse(): void {
    this.controls.forEach((config) => {
      if (this.isCollapse && config.collapse === true) {
        // 展开
        config.collapse = false;
        this.nzxBtnSpan = 24;
      }
      if (!this.isCollapse && config.collapse === false) {
        config.collapse = true;
        this.nzxBtnSpan = this._nzxBtnSpan;
      }
    });
    this.isCollapse = !this.isCollapse;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /** 清空表单控件 */
  private clearFormControl(): void {
    Object.keys(this.queryForm.controls).forEach((key) => {
      this.queryForm.removeControl(key);
    });
  }

  /** 折叠 */
  private collapse(): void {
    this.isCollapse = true;
    this.controls.forEach((config) => {
      if (config.collapse === false) {
        config.collapse = true;
        this.nzxBtnSpan = this._nzxBtnSpan;
      }
    });
  }

  /** 生成表单 */
  private generateForm(controlConfigs: Array<NzxQueryControlOptions>): void {
    this.clearFormControl();

    for (const config of controlConfigs) {
      if (config.controlType === 'Template') {
        const item = this.controlTemplateList.find(
          (directive) => directive.nzxControl === config.controlName
        );
        if (item) {
          config.templateRef = item.templateRef;
        }
      }
      if (config.controlName) {
        this.queryForm.addControl(
          config.controlName,
          config.controlInstance ?? this.fb.control(config.default ?? null)
        );
      }
    }
    this.defaultValue = this.queryForm.getRawValue();
    if (this.cacheParams) {
      // 缓存回显查询条件
      this.queryForm.patchValue(this.cacheParams);
    }
  }
}
