import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  forwardRef, Input,
  OnDestroy,
  OnInit,
  Output, QueryList,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { validForm } from 'ng-zorro-antd-extension/util';

import { NzTableLayout, NzTableSize } from 'ng-zorro-antd/table';
import { distinctUntilChanged, Subject, takeUntil } from 'rxjs';

import { TableFormExpandDirective } from './directive/table-expand.directive';
import { TableFormTdDirective } from './directive/table-td.directive';
import { TableFormThDirective } from './directive/table-th.directive';

import { LimitMessage, TableFormConfig, TableFormHeaderConfig, TableFormTdConfig } from './type';

@Component({
  selector: 'nzx-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.less'],
  exportAs: 'nzxTableForm',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TableFormComponent),
      multi: true
    },
    { provide: NG_VALIDATORS, useExisting: TableFormComponent, multi: true }
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableFormComponent implements OnInit, ControlValueAccessor, AfterContentInit, Validator, OnDestroy {

  @Input() tableLayout: NzTableLayout = 'fixed';
  @Input() tableAlign: 'left' | 'right' | 'center' | null = 'center';
  /** table 启用扩展行 */
  @Input() enableExpand = false;
  /** table border */
  @Input() nzxBordered: boolean = false;
  /** table size */
  @Input() nzxSize: NzTableSize = 'default';
  /** 启用数量限制 */
  @Input() enableLimit = false;
  /** 最大数量 */
  @Input() maxLimit: number = 0;
  /** 最少数量 */
  @Input() minLimit: number = 0;
  /** 自定义footer */
  @Input() nzxFooter?: string | TemplateRef<void>;

  /**
   * 校验整个table的错误提示自定义模板
   */
  @Input() errorTemplate?: TemplateRef<void>;
  /** 启用序号 */
  @Input() enableNo = false;

  /** 序号宽度*/
  @Input() serialNumberWidth: string = '60px';
  /** 序号自定义模板 */
  @Input() serialNumberTemplate?: TemplateRef<void>;
  /**
   * 校验table的函数
   */
  @Input() tableValidatorFn: ValidatorFn = (control: AbstractControl): ValidationErrors | null => null;

  /** table config */
  @Input() tableFormConfig: TableFormConfig[] = [];

  /** 数量限制回调 */
  @Output() limitMessage = new EventEmitter<LimitMessage>();

  headerConfig!: Array<TableFormHeaderConfig>;
  tdConfig!: Array<TableFormTdConfig>;

  thTemplateOfNullInForm: { templateRef: TemplateRef<unknown>; width?: string; }[] = [];
  tdTemplateOfNullInForm: { templateRef: TemplateRef<unknown>; }[] = [];

  form!: FormGroup;
  isDisabled = false;

  get tableList() {
    return (this.form.get('formArray') as FormArray<FormGroup>);
  }

  get formGroups() {
    return this.tableList.controls.concat([]);
  }

  get invalid() {
    return this.form.invalid;
  }

  /** 一行的form配置 */
  private controlsConfig!: { [key: string]: any; };

  private destroyed$: Subject<void> = new Subject<void>();

  @ContentChildren(TableFormTdDirective) tableTdDirectiveList!: QueryList<TableFormTdDirective>;
  @ContentChildren(TableFormThDirective) tableThDirectiveList!: QueryList<TableFormThDirective>;
  @ContentChild(TableFormExpandDirective) tableExpandDirective!: TableFormExpandDirective;

  constructor(
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
  ) { }

  ngOnDestroy(): void {
    this.destroyed$.complete();
    this.destroyed$.unsubscribe();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      formArray: this.fb.array([], [this.tableValidatorFn])
    });

    this.controlsConfig = this.parseFormConfig(this.tableFormConfig);
    this.headerConfig = this.parseHeader(this.tableFormConfig);
    this.tdConfig = this.parseTd(this.tableFormConfig);

    this.form.valueChanges.pipe(
      distinctUntilChanged(),
      takeUntil(this.destroyed$)
    ).subscribe(res => {
      this.propagateChange(res.formArray);
      this.cd.markForCheck();
    });
  }

  ngAfterContentInit(): void {
    this.matchTemplate(this.tableThDirectiveList, this.tableTdDirectiveList);
  }

  /**
  * 若table为空或者有一行数据校验不通过，则整个组件校验不通过
  */
  validate(control: AbstractControl): ValidationErrors | null {
    const arr = this.tableList.controls as FormGroup[] || [];
    if (arr.some(row => row.status === 'INVALID')) {
      return { tableRequiredError: true };
    }
    return null;

  }

  /**
   * 根据controlName设置config值
   */
  setConfig(
    controlName: string,
    config: Partial<TableFormConfig>
  ): void {
    const index = this.tableFormConfig.findIndex(item => item.controlName === controlName);
    if (index > -1) {
      this.tableFormConfig[index] = {
        ... this.tableFormConfig[index],
        ...config
      };
    }
    this.updateTableConfig();
  }

  /**
   * 重置table表单为空
   */
  clearTable(): void {
    this.tableList.clear();
    this.cd.markForCheck();
  }

  /**
   * 添加table一行
   */
  addRow(): void {
    if (this.form.valid) {
      if (this.enableLimit && this.tableList.length < this.maxLimit) {
        const controlsConfigTemp = Object.assign({}, this.controlsConfig);
        if (this.enableExpand) {
          controlsConfigTemp['expand'] = [false];
        }
        this.tableList.push(this.fb.group(controlsConfigTemp));
      } else if (this.enableLimit) {
        this.limitMessage.emit({
          type: 'max',
          limit: this.maxLimit,
          msg: `最多${this.maxLimit}条`
        });
      } else {
        const controlsConfigTemp = Object.assign({}, this.controlsConfig);
        if (this.enableExpand) {
          controlsConfigTemp['expand'] = [false];
        }
        this.tableList.push(this.fb.group(controlsConfigTemp));
      }
    } else {
      this.tableList.controls.forEach((item: FormGroup) => {
        validForm(item);
      });
    }
    this.cd.markForCheck();
  }

  /**
  * 删除table一行
  */
  deleteRow(i: number): void {
    if (this.enableLimit) {
      if (this.tableList.length > this.minLimit) {
        this.tableList.removeAt(i);
      } else {
        this.limitMessage.emit(
          {
            type: 'min',
            limit: this.maxLimit,
            msg: `至少${this.minLimit}条`
          }
        );
      }
    } else {
      this.tableList.removeAt(i);
    }
  }

  writeValue(obj: any): void {
    this.tableList.clear();
    if (obj && obj.length > 0) {
      if (this.tdConfig.length > 0) {
        obj.forEach((item: any, i: number) => {
          const controlsConfigTemp = Object.assign({}, this.controlsConfig);
          if (this.enableExpand) {
            controlsConfigTemp['expand'] = [false];
          }
          this.tableList.push(this.fb.group(controlsConfigTemp));
          this.tableList.controls[i].patchValue(item);
        });
      }
    }
    this.cd.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
  /**
   * 更新table config配置项
   * 在更新config时候需要调用重新渲染table
   */
  private updateTableConfig(): void {
    this.controlsConfig = this.parseFormConfig(this.tableFormConfig);
    this.headerConfig = this.parseHeader(this.tableFormConfig);
    this.tdConfig = this.parseTd(this.tableFormConfig);
    this.matchTemplate(this.tableThDirectiveList, this.tableTdDirectiveList);
  }

  private propagateChange = (_: any) => { };

  /**
   * 匹配投影模板template放到config中
   */
  private matchTemplate(thList: QueryList<TableFormThDirective>, tdList: QueryList<TableFormTdDirective>): void {
    this.headerConfig = this.headerConfig.map(item => {
      const ThDirective = thList.find(th => th.controlName === item.controlName);
      return {
        ...item,
        templateRef: ThDirective?.templateRef,
        width: ThDirective?.width,
      };
    });

    this.tdConfig = this.tdConfig.map(item => {
      const TdDirective = tdList.find(td => td.controlName === item.controlName);
      return {
        ...item,
        templateRef: TdDirective?.templateRef
      };
    });

    this.thTemplateOfNullInForm = thList.filter(item => !item.controlName).map(item => ({
      templateRef: item.templateRef,
      width: item?.width
    }));


    this.tdTemplateOfNullInForm = tdList.filter(item => !item.controlName).map(item => ({
      templateRef: item.templateRef,
    }));
  }

  /**
   * 解析配置生成controls
   */
  private parseFormConfig(customFormConfig: TableFormConfig[]): { [key: string]: any; } {
    const controls: { [key: string]: any; } = {};
    customFormConfig.forEach(item => {
      if (item.controlName) {
        let defaultValue = null;
        if (item.defaultValue === false) {
          defaultValue = false;
        }
        defaultValue = item.defaultValue;
        controls[item.controlName] = [defaultValue, item.validation];
      }
    });
    return controls;
  }

  /**
   * 解析配置生成header
   *
   */
  private parseHeader(customFormConfig: TableFormConfig[]): Array<TableFormHeaderConfig> {
    return customFormConfig.map(item => ({
      header: item.header,
      width: item?.width,
      controlName: item?.controlName,
      isShow: item.isShow ?? true,
      templateRef: void 0,
      showRequiredTip: item?.showRequiredTip,
    }));
  }

  /**
   * 解析配置生成Content
   */
  private parseTd(customFormConfig: TableFormConfig[]): Array<TableFormTdConfig> {

    return customFormConfig.map(item => ({
      controlName: item?.controlName,
      isShow: item.isShow ?? true,
      templateRef: void 0,
      showRequiredTip: item?.showRequiredTip,
      defaultValue: item?.defaultValue,
      type: item.type,
      validation: item.validation,
      errorTip: item?.errorTip,
      options: item?.options,
      controlMode: item?.controlMode ?? 'edit',
      placeholder: item?.placeholder,
      allowClear: item?.allowClear,
      maxLength: item?.maxLength,
      max: item?.max,
      format: item?.format
    }));
  }

}
