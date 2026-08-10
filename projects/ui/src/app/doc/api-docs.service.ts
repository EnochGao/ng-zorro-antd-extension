import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiExtractorService } from './api-extractor.service';

interface ApiProperty {
  name: string;
  type: string;
  default?: string;
  description?: string;
}

interface ApiEntry {
  type: string;
  name: string;
  description?: string;
  properties?: ApiProperty[];
}

/**
 * 渲染 API 文档区块。数据源优先级：
 * 1. components/<lib>/api/<locale>.js —— 与源码同目录的 CommonJS 源（最贴近源码、随版本更新），
 *    仅 zh-cn 有，en-us 回退到 2。
 * 2. assets/content/api-docs/<lib>/<locale>.json —— 官方风格预生成 JSON（双语）。
 * 3. ApiExtractorService 运行时从源码正则提取 —— 兜底（质量较低）。
 */
@Injectable({ providedIn: 'root' })
export class ApiDocsService {
  private readonly http = inject(HttpClient);
  private readonly extractor = inject(ApiExtractorService);

  async render(lib: string, locale: string): Promise<string> {
    const localeFile = locale === 'zh-cn' ? 'zh-cn' : 'en-us';
    let entries: ApiEntry[] = [];

    // 1. 优先加载 components/<lib>/api/<locale>.js（CommonJS），浏览器内执行取数组
    if (locale === 'zh-cn') {
      entries = await this.loadJsApi(lib, localeFile);
    }

    // 2. 回退到预生成的 api-docs JSON（双语）
    if (!entries || entries.length === 0) {
      entries = await this.loadJsonApi(lib, localeFile);
    }

    // 3. 兜底：运行时从源码正则提取
    if (!entries || entries.length === 0) {
      return this.extractor.extract(lib, locale);
    }

    return this.entriesToMarkdown(entries, locale);
  }

  /** 加载 components/<lib>/api/<locale>.js 并执行 CommonJS 得到 ApiEntry[] */
  private async loadJsApi(lib: string, localeFile: string): Promise<ApiEntry[]> {
    const url = `site-src/components/${lib}/api/${localeFile}.js`;
    try {
      const code = await firstValueFrom(
        this.http.get(url, { responseType: 'text' })
      );
      if (!code) {
        return [];
      }
      // 在浏览器内以 CommonJS 方式执行（module.exports = [...]）
      const moduleObj: { exports: ApiEntry[] } = { exports: [] };
      // eslint-disable-next-line no-new-func
      const fn = new Function('module', 'exports', code);
      fn(moduleObj, moduleObj.exports);
      const data = moduleObj.exports;
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }

  /** 加载 assets/content/api-docs/<lib>/<locale>.json */
  private async loadJsonApi(lib: string, localeFile: string): Promise<ApiEntry[]> {
    const url = `assets/content/api-docs/${lib}/${localeFile}.json`;
    try {
      const data = await firstValueFrom(
        this.http.get<ApiEntry[]>(url)
      );
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }

  /** 将 ApiEntry[] 转换成与 NG-ZORRO 一致的 markdown 表格 */
  private entriesToMarkdown(entries: ApiEntry[], locale: string): string {
    const isZh = locale === 'zh-cn';
    const h = isZh
      ? { api: 'API', params: '参数', desc: '说明', type: '类型', default: '默认值' }
      : { api: 'API', params: 'Properties', desc: 'Description', type: 'Type', default: 'Default' };

    // 纯文本转义（用于说明列等普通文本，需转义尖括号防止被当 HTML）
    const esc = (s: string): string =>
      (s ?? '')
        .replace(/\|/g, '\\|')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    // 代码单元格：用反引号包裹。只需转义管道符（防止拆列），
    // 尖括号交给 marked 自动安全转义，浏览器渲染即显示成 '<' / '>'，
    // 不可在此处手动转义，否则会双重转义显示成 &lt;。
    const code = (s: string): string => '`' + (s ?? '').replace(/\|/g, '\\|') + '`';

    const blocks: string[] = [`## ${h.api}`, ''];
    for (const e of entries) {
      const kindMap: Record<string, { label: string; cls: string }> = {
        component: { label: '组件', cls: 'component' },
        directive: { label: '指令', cls: 'directive' },
        pipe: { label: '管道', cls: 'pipe' },
        service: { label: '服务', cls: 'service' },
        interface: { label: '接口', cls: 'interface' },
        class: { label: '类', cls: 'class' },
      };
      const kind = kindMap[e.type] ?? { label: e.type, cls: 'component' };
      // 对齐官方：子标题后用彩色类型标签（component/directive/service...）
      blocks.push(`### ${e.name} <label class="api-type-label ${kind.cls}">${kind.label}</label>`);
      const desc = (e.description ?? '').replace(/<[^>]+>/g, '').trim();
      if (desc) {
        blocks.push('', desc, '');
      }
      if (e.properties && e.properties.length > 0) {
        blocks.push(`| ${h.params} | ${h.desc} | ${h.type} | ${h.default} |`);
        blocks.push(`| --- | --- | --- | --- |`);
        for (const p of e.properties) {
          const pdesc = (p.description ?? '').replace(/<[^>]+>/g, '').trim() || '-';
          // 参数名 / 类型 / 默认值 均为代码样式（与官方 API 表格一致，可高亮）
          blocks.push(
            `| ${code(p.name)} | ${esc(pdesc)} | ${code(p.type)} | ${p.default ? code(p.default) : '—'} |`
          );
        }
        blocks.push('');
      }
    }
    return blocks.join('\n');
  }
}
