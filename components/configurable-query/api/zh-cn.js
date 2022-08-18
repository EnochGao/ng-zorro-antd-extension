
module.exports = [
  {
    type: 'interface',
    name: 'QueryControlOptions',
    description: '查询组件配置项',
    properties: [
      {
        name: 'controlName',
        type: 'string',
        description: '控件名对应查询参数的key，必填'
      },
      {
        name: 'controlType',
        type: `'input' | 'select' | 'datePicker' | 'rangePicker' | 'Template'`,
        description: '控件类型，必填'
      },
      {
        name: 'label',
        type: `string`,
        description: '查询框label'
      },
      {
        name: 'placeholder',
        type: `string`,
        description: '查询框placeholder'
      },
      {
        name: 'menuList',
        type: `Array<Options<any>><any>`,
        description: '控件为select时下拉集合'
      },
      {
        name: 'nzxAllowClear',
        type: `boolean`,
        description: '控件为select时允许单独清空'
      },
      {
        name: 'nzxSpan',
        type: `number`,
        description: '查询项所占栅格数'
      },
      {
        name: 'default',
        type: `any`,
        description: '控件默认值，注意默认值重置时不会清空'
      },
      {
        name: 'nzxLSpan',
        type: `number`,
        description: '查询项label所占栅格数'
      },
      {
        name: 'nzxRSpan',
        type: `number`,
        description: '查询项控件所占栅格数'
      },
      {
        name: 'errorTip',
        type: `string`,
        description: '校验错误提示'
      },
      {
        name: 'collapse',
        type: `boolean`,
        description: '是否要隐藏'
      },
      {
        name: 'controlInstance',
        type: `AbstractControl`,
        description: '控件实例，可选'
      },
      {
        name: 'templateRef',
        type: `TemplateRef<unknown>`,
        description: '自定义模板'
      },

    ]
  },
  {
    type: 'component',
    name: 'nzx-configurable-query',
    description: '通过配置项快速生成一个查询组件，支持自定义template',
    properties: [
      {
        name: 'controls',
        type: 'Array<QueryControlOptions>',
        default: '[]',
        description: '配置项'
      },
      {
        name: 'nzxJustify',
        type: 'NzJustify',
        default: 'start',
        description: '查询表单排列方式'
      },
      {
        name: 'nzxGutter',
        type: 'number',
        default: '8',
        description: '查询项间隔'
      },
      {
        name: 'lineNumber',
        type: 'number',
        default: '3',
        description: '一行展示多少查询项'
      },
      {
        name: 'nzxBtnSpan',
        type: 'number | null',
        default: 'null',
        description: '操作按钮所占栅格数，24则换行'
      },
      {
        name: 'nzxCollapse',
        type: 'boolean',
        default: 'true',
        description: '启用折叠'
      },
      {
        name: 'initQuery',
        type: 'boolean',
        default: 'false',
        description: '初始化时，主动查询'
      },
      {
        name: 'queryParamsChange',
        type: 'EventEmitter<NzxQueryParams>',
        default: '',
        description: '查询重置时会触发抛出查询参数'
      },
    ]
  },
  {
    type: 'directive',
    name: 'nzxControl',
    description: '用来自定义查询框中的控件',
    properties: [
      {
        name: 'nzxControl',
        type: 'string',
        default: 'undefined',
        description: '确保要与配置项中controlName相同,`<ng-template></ng-template>`上使用'
      },
      {
        name: 'templateRef',
        type: 'TemplateRef<unknown>',
        default: 'undefined',
        description: 'ngtemplate实例'
      },
    ]
  },
]
