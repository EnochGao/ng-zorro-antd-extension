
// module.exports = [
//   {
//     type: 'interface',
//     name: 'NzxSimpleTableConfig',
//     description: 'nzx-simple-table 组件配置格式',
//     properties: [
//       {
//         name: 'header',
//         type: `string`,
//         default: 'null',
//         description: '表头名'
//       },
//       {
//         name: 'key',
//         type: `string`,
//         default: 'null',
//         description: '字段key值'
//       },
//       {
//         name: 'width',
//         type: `string`,
//         default: 'null',
//         description: 'td宽度'
//       },
//       {
//         name: 'format',
//         type: `(data: T) => any`,
//         default: 'null',
//         description: '数据格式化函数'
//       },
//       {
//         name: 'template',
//         type: `TemplateRef<any>`,
//         default: 'null',
//         description: '自定义模板'
//       },
//     ]
//   },
//   {
//     type: 'component',
//     name: 'nzx-simple-table',
//     description: '简单table通过配置项快速生成一个table，支持自定义template，初衷只是为了数据展示方便，不支持服务端分页',
//     properties: [
//       {
//         name: 'nzxAlign',
//         type: `'left' | 'right' | 'center' | null`,
//         default: 'center',
//         description: 'th td 布局方式'
//       },
//       {
//         name: 'nzxTitle',
//         type: ' string | TemplateRef<void>',
//         default: 'undefined',
//         description: 'table 标题'
//       },
//       {
//         name: 'nzxFooter',
//         type: 'string | TemplateRef<void>',
//         default: 'undefined',
//         description: 'table 页脚'
//       },
//       {
//         name: 'nzxExpand',
//         type: 'boolean',
//         default: 'false',
//         description: '支持展开'
//       },
//       {
//         name: 'nzxBordered',
//         type: 'boolean',
//         default: 'true',
//         description: '启用边框'
//       },
//       {
//         name: 'nzxSize',
//         type: 'NzTableSize',
//         default: 'default',
//         description: 'table大小'
//       },
//       {
//         name: 'nzxData',
//         type: 'Array<T>',
//         default: '[]',
//         description: 'table数据集合'
//       },
//       {
//         name: 'nzxConfig',
//         type: 'Array<NzxSimpleTableConfig<T>>',
//         default: '[]',
//         description: 'table 配置项'
//       },
//     ]
//   },
//   {
//     type: 'directive',
//     name: 'nzxExpandTr',
//     description: '用来做展开行',
//     properties: [
//       {
//         name: 'templateRef',
//         type: 'TemplateRef<unknown>',
//         default: 'undefined',
//         description: '`<ng-template></ng-template>`上使用'
//       },
//     ]
//   },
//   {
//     type: 'directive',
//     name: 'nzxTh',
//     description: '用来自定义th',
//     properties: [
//       {
//         name: 'width',
//         type: 'string | null',
//         default: 'null',
//         description: 'th的宽度'
//       },
//       {
//         name: 'templateRef',
//         type: 'TemplateRef<unknown>',
//         default: 'undefined',
//         description: '`<ng-template></ng-template>`上使用'
//       },
//     ]
//   },
//   {
//     type: 'directive',
//     name: 'nzxTd',
//     description: '用来自定义td',
//     properties: [
//       {
//         name: 'key',
//         type: 'any',
//         default: 'null',
//         description: '`可选`与config中key保持一致则会替换这个td'
//       },
//       {
//         name: 'templateRef',
//         type: 'TemplateRef<unknown>',
//         default: 'undefined',
//         description: '`<ng-template></ng-template>`上使用'
//       },
//     ]
//   }
// ]
