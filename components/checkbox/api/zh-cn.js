module.exports = [
  {
    type: 'component',
    name: 'nzx-checkbox-group',
    description: 'checkbox拓展，默认勾选后是value的数组，支持自定义格式',
    properties: [
      {
        name: 'checkOptions',
        type: 'Array<{label:string;value:<number | string>}>',
        default: '[]',
        description: '选项集合'
      },
      {
        name: 'customFormateInFn',
        type: '(value: any) => Array<any> ',
        default: '(value: any) => value',
        description: '自定义函数用来格式化输输入内容用来回显'
      },
      {
        name: 'customFormateOutFn',
        type: ' (value: any) => any',
        default: '(checkedList: any) => checkedList',
        description: '自定义函数用来格式化输出内容用来接口入参'
      }
    ]
  }
]
