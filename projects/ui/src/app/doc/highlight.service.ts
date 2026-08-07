import { Injectable } from '@angular/core';
import hljs from 'highlight.js';

/**
 * 代码高亮服务（对标 NG-ZORRO 的 marked-highlight + prismjs 方案）。
 * 我们用 highlight.js 在运行时对示例源码做高亮。
 */
@Injectable({ providedIn: 'root' })
export class HighlightService {
  highlight(code: string, language: string): string {
    try {
      if (hljs.getLanguage(language)) {
        return hljs.highlight(code, { language }).value;
      }
      return hljs.highlightAuto(code).value;
    } catch {
      return code;
    }
  }
}
