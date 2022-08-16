module.exports = [
  {
    type: 'component',
    name: 'nzx-checkbox-group',
    description: '按钮组件，支持 alibButton 指令和 alib-button 组件两种形式',
    properties: [
      {
        name: 'alibType',
        type: 'string',
        default: 'primary',
        description: '按钮的类型，支持 \`primary | info | warning | danger\`'
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
