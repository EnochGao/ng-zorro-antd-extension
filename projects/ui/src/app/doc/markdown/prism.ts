/**
 * Prism.js 语法高亮封装（对标 NG-ZORRO scripts/site/markdown/prism.ts）。
 * 文档站代码块统一用 prismjs 高亮。使用 any 规避 @types/prismjs 的索引签名限制。
 */
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-less';
import 'prismjs/components/prism-typescript';

// 内置 prismjs 已包含 typescript -> 可高亮 Angular 组件代码；
// 这里不再移植 NG-ZORRO 自定义 bash/angular 正则（避免与 @types/prismjs 类型冲突），
// 保持与官方默认高亮行为一致。
export { highlight, languages };
