import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { NzxQueryI18nInterface } from 'ng-zorro-antd-extension/i18n';
import { updateControlStatus } from 'ng-zorro-antd-extension/util';
import { NzGridModule, NzJustify } from 'ng-zorro-antd/grid';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Subject, fromEvent, takeUntil } from 'rxjs';
import { NzxControlDirective } from './control.directive';
import { NzxQueryControlOptions, NzxQueryParams } from './type';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzxConfigurableQueryItemComponent } from './configurable-query-item/configurable-query-item.component';
import { CommonModule } from '@angular/common';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

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
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCardModule,
    NzGridModule,
    NzSpaceModule,
    NzButtonModule,
    NzIconModule,
    NzxConfigurableQueryItemComponent,
  ],
})
export class NzxConfigurableQueryComponent
  implements OnChanges, OnInit, AfterViewInit, AfterContentInit, OnDestroy
{
  /**
   * 配置项用来生成查询表单
   */
  @Input() controls: Array<NzxQueryControlOptions> = [];
  /** 查询表单排列方式默认start */
  @Input() nzxJustify: NzJustify = 'start';
  /** 查询项间隔默认为8 */
  @Input() nzxGutter: number = 8;
  /** 一行展示多少查询项默认展示3个 */
  @Input() lineNumber: number = 3;
  /** 操作按钮所占栅格数，24则换行 */
  @Input() nzxBtnSpan: number | null = null;
  /** 初始化时，是否主动触发查询 */
  @Input() initQuery = false;
  /** 缺省 固定参数会固定携带在抛出事件中 */
  @Input() fixedParams = {};

  /** 查询时会触发抛出查询参数 */
  @Output() queryChange = new EventEmitter<NzxQueryParams>();
  /** 重置时会触发抛出查询参数 */
  @Output() resetChange = new EventEmitter<NzxQueryParams>();

  /** 组件最终的查询参数 */
  get queryParams() {
    return this._queryParams;
  }
  set queryParams(value: any) {
    this._queryParams = value;
  }

  /** 判断当前组件是否展示展开折叠按钮 */
  get nzxCollapse() {
    return this.controls.some((i) => i.hasOwnProperty('collapse'));
  }

  /** 内置 form 查询表单实例 */
  queryForm!: FormGroup;
  locale!: NzxQueryI18nInterface;
  collapseIcon: string = 'down';
  collapseText: string = '';

  private _queryParams: NzxQueryParams = {};
  /** 重置时用来给查询框默认值 */
  private defaultValue: NzxQueryParams = {};
  private cacheParams: NzxQueryParams = {};
  private destroy$ = new Subject<void>();

  @ViewChild('queyForm') private queyFormEl!: ElementRef<HTMLFormElement>;
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
  }

  ngAfterViewInit(): void {
    if (this.queyFormEl) {
      fromEvent<KeyboardEvent>(this.queyFormEl.nativeElement, 'keydown')
        .pipe(takeUntil(this.destroy$))
        .subscribe((event) => {
          if (event.key === 'Enter') {
            event.stopPropagation();
            event.preventDefault();
            this.search();
          }
          // 检查是否同时按下了Ctrl键（在Windows/Linux上）和S键
          if ((event.ctrlKey || event.metaKey) && event.key === 'r') {
            // 注意：event.metaKey用于兼容Mac的Command键
            event.preventDefault(); // 阻止浏览器默认的保存行为
            event.stopPropagation();
            this.reset();
          }
        });
    }
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
   * @param defaultValueResettable 添加的表单控件默认值是否可以重置，默认不可以
   */
  setControl(
    controlName: string,
    config: Partial<NzxQueryControlOptions>,
    defaultValueResettable = false
  ): void {
    const control = this.getControl(controlName);
    if (control) {
      Object.keys(config).forEach((key) => {
        (control as any)[key] = (config as any)[key];
      });
      this.generateControl(control, defaultValueResettable);
      this.cd.markForCheck();
    }
  }

  /**
   * 动态添加控件
   * @param config 配置项
   * @param position 添加位置 不传为末尾
   * @param defaultValueResettable 添加的表单控件默认值是否可以重置，默认不可以
   */
  addControl(
    config: NzxQueryControlOptions,
    position?: number | undefined,
    defaultValueResettable = false
  ): void {
    const control = this.getControl(config.controlName);
    if (!control) {
      if (config && config['hasOwnProperty']('collapse')) {
        const hasCollapseProperty = this.controls.some((i) =>
          i['hasOwnProperty']('collapse')
        );
        if (hasCollapseProperty) {
          config.collapse = this.controls.some((i) => i.collapse === true);
        }
      }

      this.generateControl(config, defaultValueResettable);

      if (position === void 0 || position === null) {
        this.controls.push(config);
      } else {
        this.controls.splice(position - 1, 0, config);
      }
      this.calculateText();
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
      this.queryForm.removeControl(controlName);
      this.controls = this.controls.filter(
        (c) => c.controlName !== controlName
      );
      this.calculateText();
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
    this.queryForm.reset(this.defaultValue);
    this.resetChange.emit(this._queryParams);
  }

  /**展开、收起*/
  toggleCollapse(): void {
    for (let index = 0; index < this.controls.length; index++) {
      const config = this.controls[index];
      const hasProperty = config.hasOwnProperty('collapse');
      if (hasProperty && config.collapse) {
        config.collapse = false;
      } else if (hasProperty && !config.collapse) {
        config.collapse = true;
      }
    }
    this.calculateText();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /** 计算展开收起icon、文案 */
  private calculateText() {
    if (this.controls.some((i) => i.collapse === true)) {
      this.collapseIcon = 'down';
      this.collapseText = this.locale.expand;
    } else {
      this.collapseIcon = 'up';
      this.collapseText = this.locale.collapse;
    }
    this.cd.markForCheck();
  }

  /** 清空表单控件 */
  private clearFormControl(): void {
    Object.keys(this.queryForm.controls).forEach((key) => {
      this.queryForm.removeControl(key);
    });
  }

  /** 生成 queryForm 表单 */
  private generateForm(controlConfigs: Array<NzxQueryControlOptions>): void {
    this.clearFormControl();

    for (const config of controlConfigs) {
      this.generateControl(config);
    }
    this.defaultValue = this.queryForm.getRawValue();

    if (this.cacheParams) {
      // 缓存回显查询条件
      this.queryForm.patchValue(this.cacheParams);
    }

    this.calculateText();
  }

  /**
   *
   * @param controlConfig control配置
   * @param defaultValueResettable 添加的表单控件默认值是否可以重置，默认不可以
   *
   * 1. 生成单个表单控件并将其添加到queryForm中
   * 2. 如果没有templateRef根据controlName获取投影的templateList中的templateRef给 templateRef 赋值
   *
   **/
  private generateControl(
    config: NzxQueryControlOptions,
    defaultValueResettable = false
  ) {
    if (config.controlName) {
      if (!config?.templateRef) {
        const d = this.controlTemplateList.find(
          (d) => d.nzxControl === config.controlName
        );
        if (d) {
          config.templateRef = d.templateRef;
        }
      }

      this.queryForm.setControl(
        config.controlName,
        config.controlInstance ?? this.fb.control(config.default ?? null)
      );

      if (!defaultValueResettable) {
        const control = this.queryForm.get(config.controlName);
        this.defaultValue = {
          ...this.defaultValue,
          [config.controlName]: control.value,
        };
      }
    }
  }
}
