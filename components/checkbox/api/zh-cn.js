module.exports = [
  {
    type: 'component',
    name: 'nzx-checkbox-group',
    description: '按钮组件，支持 alibButton 指令和 alib-button 组件两种形式',
    properties: [
      {
        name: 'checkOptions',
        type: 'Array<Options<number | string>>',
        default: '[]',
        description: '选项集合'
      },
      {
        name: 'alibSize',
        type: 'string',
        default: 'null',
        description: '按钮的大小，支持 \`sm | md | lg\`'
      }
    ]
  }
]
