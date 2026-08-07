/**
 * Markdown 解析器（移植自 NG-ZORRO scripts/site/markdown/index.ts）。
 * 组合 marked-highlight（prismjs 高亮）与自定义 renderer，导出配置好的 marked 实例。
 */
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';

import * as prism from './prism';
import { getRenderer } from './renderer';

const highlight = markedHighlight({
  langPrefix: 'language-',
  highlight(code, lang) {
    const language = prism.languages[lang] || (prism.languages as any).autoit;
    return prism.highlight(code, language, lang);
  }
});

export const marked = new Marked(highlight);

marked.use({ renderer: getRenderer(marked) });

export default marked;
