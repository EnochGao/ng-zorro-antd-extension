import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
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
  Validators
} from '@angular/forms';
import { validForm } from 'ng-zorro-antd-extension/util/vaild-form';
import { NzTableLayout } from 'ng-zorro-antd/table';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

import { TableFormExpandDirective } from './directive/table-expand.directive';
import { TableFormTdDirective } from './directive/table-td.directive';
import { TableFormThDirective } from './directive/table-th.directive';

import { TableFormConfig, TableFormContentConfig, TableFormHeaderConfig } from './type';

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
  @Input() enableUniqueId = false;
  @Input() enableExpand = false;
  @Input() enableNo = false;
  @Input() limit: number = 0;
  @Input() enableLimit = false;
  @Input() minLimit: number = 0;
  @Input() enableMinLimit = false;
  @Input() nzFooter?: string | TemplateRef<void>;

  /**
   * 校验整个table的错误提示自定义模板
   */
  @Input() errorTemplate?: TemplateRef<void>;
  @Input() serialNumberTemplate?: TemplateRef<void>;
  /**
   * 校验table的函数
   */
  @Input() tableValidatorFn: ValidatorFn = (control: AbstractControl): ValidationErrors | null => null;

  @Input() formConfig: TableFormConfig[] = [
    {
      header: '名字',
      controlName: 'name',
      defaultValue: '',
      type: 'input',
      validation: [Validators.required],
      errorTip: '必填',
    },
  ];

  @Output() logger = new EventEmitter<string>();
  @Output() addChange = new EventEmitter<any>();
  @Output() removeChange = new EventEmitter<any>();

  headerConfig!: Array<TableFormHeaderConfig>;
  contentConfig!: Array<TableFormContentConfig>;

  thTemplateOfNullInForm: { templateRef: TemplateRef<unknown>; width?: string; }[] = [];
  tdTemplateOfNullInForm: { templateRef: TemplateRef<unknown>; }[] = [];

  form!: FormGroup;

  private get tableList() {
    return (this.form.get('formArray') as FormArray<FormGroup>);
  }

  get formArrayControls() {
    return this.tableList?.controls as FormGroup[];
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
  ) {
    this.form = this.fb.group({
      formArray: this.fb.array([], this.tableValidatorFn)
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.complete();
    this.destroyed$.unsubscribe();
  };

  ngOnInit(): void {

    this.controlsConfig = this.parseFormConfig(this.formConfig);
    this.headerConfig = this.parseHeader(this.formConfig);
    this.contentConfig = this.parseContent(this.formConfig);

    this.form.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.destroyed$)
    ).subscribe(res => {
      this.propagateChange(res.formArray);
      this.cd.markForCheck();
    });
  }

  ngAfterContentInit(): void {
    this.matchTemplate(this.tableThDirectiveList, this.tableTdDirectiveList);
  };

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
   * 更新table config配置项
   * 在更新config时候需要调用重新渲染table
   */
  updateTableConfig(): void {
    this.controlsConfig = this.parseFormConfig(this.formConfig);
    this.headerConfig = this.parseHeader(this.formConfig);
    this.contentConfig = this.parseContent(this.formConfig);
    this.matchTemplate(this.tableThDirectiveList, this.tableTdDirectiveList);
  };

  /**
   * 重置table表单为空
   */
  resetTable(): void {
    this.tableList.clear();
    this.cd.markForCheck();
  }

  /**
   * 添加table一行
   */
  addRow(): void {
    if (this.form.valid) {
      if (this.enableLimit && this.tableList.length < this.limit) {
        const controlsConfigTemp = Object.assign({}, this.controlsConfig);
        // if (this.enableUniqueId) {
        //   controlsConfigTemp['uniqueId'] = [uniqueId()];
        // }
        if (this.enableExpand) {
          controlsConfigTemp['expand'] = [false];
        }

        this.tableList.push(this.fb.group(controlsConfigTemp));
        this.addChange.emit(this.fb.group(controlsConfigTemp));
      } else if (this.enableLimit) {
        this.logger.emit(`最多添加${this.limit}条!`);
      } else {
        const controlsConfigTemp = Object.assign({}, this.controlsConfig);
        // if (this.enableUniqueId) {
        //   controlsConfigTemp['uniqueId'] = [uniqueId()];
        // }
        if (this.enableExpand) {
          controlsConfigTemp['expand'] = [false];
        }
        this.tableList.push(this.fb.group(controlsConfigTemp));
        this.addChange.emit(this.fb.group(controlsConfigTemp));
      }
      this.cd.markForCheck();
    } else {
      this.tableList.controls.forEach((item: FormGroup) => {
        validForm(item);
      });
      this.cd.markForCheck();
    }
  }

  /**
  * 删除table一行
  */
  deleteRow(i: number): void {
    if (this.enableMinLimit) {
      if (this.tableList.length > this.minLimit) {
        this.tableList.removeAt(i);
        this.removeChange.emit(this.tableList.controls[i]);
      } else {
        this.logger.emit(`至少${this.minLimit}条!`);
      }
    } else {
      this.tableList.removeAt(i);
      this.removeChange.emit(this.tableList.controls[i]);
    }
  }

  writeValue(obj: any): void {
    this.tableList.clear();
    if (obj && obj.length > 0) {
      if (this.contentConfig.length > 0) {
        obj.forEach((item: any, i: number) => {
          const controlsConfigTemp = Object.assign({}, this.controlsConfig);
          // if (this.enableUniqueId) {
          //   controlsConfigTemp['uniqueId'] = [uniqueId()];
          // }
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
  };

  registerOnTouched(fn: any): void {

  };

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  private propagateChange = (_: any) => { };

  /**
   * 匹配投影模板template放到config中
   */
  private matchTemplate(thList: QueryList<TableFormThDirective>, tdList: QueryList<TableFormTdDirective>) {
    this.headerConfig = this.headerConfig.map(item => {
      const ThDirective = thList.find(th => th.controlName === item.controlName);
      return {
        ...item,
        templateRef: ThDirective?.templateRef
      };
    });

    this.contentConfig = this.formConfig.map(item => {
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
  private parseFormConfig(customFormConfig: TableFormConfig[]) {
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
  private parseHeader(customFormConfig: TableFormConfig[]) {
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
  private parseContent(customFormConfig: TableFormConfig[]) {
    return customFormConfig.map(item => ({
      header: item.header,
      controlName: item?.controlName,
      isShow: item.isShow ?? true,
      templateRef: void 0,
      showRequiredTip: item?.showRequiredTip,

      defaultValue: item.controlName,
      type: item.type,
      validation: item.validation,
      errorTip: item.errorTip,
      options: item.options,
      controlMode: item.controlMode,
      placeholder: item.placeholder,
      allowClear: item.allowClear,
      maxLength: item.maxLength,
      max: item.max,
    }));
  }

}
