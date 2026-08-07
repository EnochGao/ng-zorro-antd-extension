import { Injectable } from '@angular/core';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-markup';

/**
 * 代码高亮服务（与 markdown 渲染管线共用 prismjs 方案，保证示例源码与文档代码块风格一致）。
 */
@Injectable({ providedIn: 'root' })
export class HighlightService {
  highlight(code: string, language: string): string {
    const lang = language.toLowerCase();
    const grammar = languages[lang] || languages['typescript'] || languages['markup'];
    try {
      return highlight(code, grammar, lang);
    } catch {
      return code;
    }
  }
}
