module.exports = [
  {
    type: 'interface',
    name: 'TableFormConfig',
    description: 'nzx-table-form 配置项',
    properties: [
      {
        name: 'header',
        type: `string`,
        default: 'null',
        description: '表头名'
      },
      {
        name: 'width',
        type: `string`,
        default: 'null',
        description: '可选，td th 宽度'
      },
      {
        name: 'controlName',
        type: `string`,
        default: 'null',
        description: '控件字段名'
      },
      {
        name: 'defaultValue',
        type: `string`,
        default: 'null',
        description: '可选，控件默认值'
      },
      {
        name: 'type',
        type: `'input' | 'date' | 'select' | 'number' | 'radio' | 'textarea' | 'template'`,
        default: 'null',
        description: '可选，控件类型'
      },
      {
        name: 'validation',
        type: `Array<any>`,
        default: 'null',
        description: '可选 控件校验'
      },
      {
        name: 'errorTip',
        type: `string`,
        default: 'null',
        description: '可选 控件错误提示'
      },
      {
        name: 'options',
        type: `Array<Options<any>>`,
        default: 'null',
        description: '可选 控件为select radio时下拉选项'
      },
      {
        name: 'controlMode',
        type: `'readonly' | 'edit'`,
        default: 'edit',
        description: '可选 控件模式'
      },
      {
        name: 'isShow',
        type: `boolean`,
        default: 'true',
        description: '可选 控件列是否在table中展示'
      },
      {
        name: 'placeholder',
        type: `string`,
        default: '请输入',
        description: '可选 placeholder'
      },
      {
        name: 'allowClear',
        type: `boolean`,
        default: '',
        description: '可选 select时，是否允许清空'
      },
      {
        name: 'showRequiredTip',
        type: `boolean`,
        default: '',
        description: '可选 th是否展示必填星号'
      },
      {
        name: 'templateRef',
        type: `TemplateRef<unknown>`,
        default: '',
        description: '可选 自定义模板'
      },
      {
        name: 'maxLength',
        type: `string | number`,
        default: '',
        description: '可选 最大字符长度'
      },
      {
        name: 'max',
        type: `number`,
        default: '',
        description: '可选 nz-input-number时max'
      },
      {
        name: 'format',
        type: `(value: any) => any`,
        default: '',
        description: '可选 readonly时自定义函数用来自定义展示'
      },
    ]
  },
  {
    type: 'interface',
    name: 'LimitMessage',
    description: '启用数量限制时的警告信息',
    properties: [
      {
        name: 'type',
        type: `'max' | 'min'`,
        default: 'null',
        description: '信息类型'
      },
      {
        name: 'limit',
        type: `number`,
        default: 'null',
        description: '限制数量'
      },
      {
        name: 'msg',
        type: `string`,
        default: 'null',
        description: '警告信息'
      },
    ]

  },
  {
    type: 'component',
    name: 'nzx-table-form',
    description: '表格表单。整个table为一个表单控件，适合当填写的表单为一个list集合的情况，支持自定义',
    properties: [
      {
        name: 'tableLayout',
        type: 'NzTableLayout',
        default: 'fixed',
        description: 'fixed等宽'
      },
      {
        name: 'tableAlign',
        type: `'left' | 'right' | 'center' | null`,
        default: 'center',
        description: 'table各项对齐方式'
      },
      {
        name: 'enableExpand',
        type: 'boolean',
        default: 'false',
        description: 'table 启用扩展行'
      },
      {
        name: 'nzxBordered',
        type: 'boolean',
        default: 'false',
        description: 'table border'
      },
      {
        name: 'nzxSize',
        type: 'NzTableSize',
        default: 'default',
        description: 'table size'
      },
      {
        name: 'enableLimit',
        type: 'boolean',
        default: 'false',
        description: '启用数量限制'
      },
      {
        name: 'maxLimit',
        type: 'number',
        default: '0',
        description: '最大数量'
      },
      {
        name: 'minLimit',
        type: 'number',
        default: '0',
        description: '最小数量'
      },
      {
        name: 'nzxFooter',
        type: 'string | TemplateRef<void>',
        default: '',
        description: '自定义footer'
      },
      {
        name: 'errorTemplate',
        type: 'TemplateRef<void>',
        default: '',
        description: '校验整个table错误提示的自定义模板'
      },
      {
        name: 'enableNo',
        type: 'boolean',
        default: 'false',
        description: '启用序号'
      },
      {
        name: 'serialNumberWidth',
        type: 'string',
        default: '60px',
        description: '序号列宽度'
      },
      {
        name: 'serialNumberTemplate',
        type: 'TemplateRef<void>',
        default: '',
        description: '序号自定义模板'
      },
      {
        name: 'tableValidatorFn',
        type: 'ValidatorFn',
        default: '(control: AbstractControl): ValidationErrors | null => null',
        description: '校验table的函数'
      },
      {
        name: 'tableFormConfig',
        type: 'TableFormConfig[]',
        default: '[]',
        description: 'table config'
      },
      {
        name: 'limitMessage',
        type: 'EventEmitter<LimitMessage>',
        default: '[]',
        description: '数量限制消息回调'
      },
    ],
  },
  {
    type: 'directive',
    name: 'nzxTableFormTd',
    description: '用来自定用td',
    properties: [
      {
        name: 'templateRef',
        type: 'TemplateRef<unknown>',
        default: 'undefined',
        description: '`<ng-template></ng-template>`上使用'
      },
      {
        name: 'controlName',
        type: 'string',
        default: 'undefined',
        description: '`<ng-template></ng-template>`上使用,当此td为一个表单控件时需要传入controlName'
      },
    ]
  },
  {
    type: 'directive',
    name: 'nzxTableFormTh',
    description: '用来自定义th',
    properties: [
      {
        name: 'width',
        type: 'string | null',
        default: 'null',
        description: 'th的宽度'
      },
      {
        name: 'templateRef',
        type: 'TemplateRef<unknown>',
        default: 'undefined',
        description: '`<ng-template></ng-template>`上使用'
      },
    ]
  },
  {
    type: 'directive',
    name: 'nzxTableFormExpand',
    description: '用来支持自定义行拓展',
    properties: [
      {
        name: 'templateRef',
        type: 'TemplateRef<unknown>',
        default: 'undefined',
        description: '`<ng-template></ng-template>`上使用'
      },
    ]
  }
]
