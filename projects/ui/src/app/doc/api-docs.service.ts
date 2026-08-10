import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiExtractorService } from './api-extractor.service';

interface ApiProperty {
  name: string;
  type: string;
  default: string;
  description: string;
}

interface ApiEntry {
  type: string;
  name: string;
  description: string;
  properties: ApiProperty[];
}

/**
 * 消费官方风格预生成的 API 文档 JSON（assets/content/api-docs/<lib>/<locale>.json），
 * 转换成与 NG-ZORRO 一致的 markdown 表格。
 * 该 JSON 由 ng-zorro-antd scripts/site 的 api-extractor 预先生成，
 * 比运行时正则提取更完整（含 interface、HTML 描述、多 class 拆分）。
 * 若对应 lib 没有预生成数据，则回退到 ApiExtractorService 的运行时源码提取。
 */
@Injectable({ providedIn: 'root' })
export class ApiDocsService {
  private readonly http = inject(HttpClient);
  private readonly extractor = inject(ApiExtractorService);

  async render(lib: string, locale: string): Promise<string> {
    const localeFile = locale === 'zh-cn' ? 'zh-cn' : 'en-us';
    const url = `assets/content/api-docs/${lib}/${localeFile}.json`;
    let entries: ApiEntry[];
    try {
      entries = await firstValueFrom(
        this.http.get<ApiEntry[]>(url)
      );
    } catch {
      entries = [];
    }

    if (!entries || entries.length === 0) {
      // 没有预生成数据：回退到运行时从源码提取
      const fallback = await this.extractor.extract(lib, locale);
      return fallback;
    }

    const isZh = locale === 'zh-cn';
    const h = isZh
      ? { api: 'API', params: '参数', desc: '说明', type: '类型', default: '默认值' }
      : { api: 'API', params: 'Properties', desc: 'Description', type: 'Type', default: 'Default' };

    const esc = (s: string): string => (s ?? '').replace(/\|/g, '\\|').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const blocks: string[] = [`## ${h.api}`, ''];
    for (const e of entries) {
      const kindMap: Record<string, { zh: string; en: string }> = {
        component: { zh: '组件', en: 'Component' },
        directive: { zh: '指令', en: 'Directive' },
        pipe: { zh: '管道', en: 'Pipe' },
        service: { zh: '服务', en: 'Service' },
        interface: { zh: '接口', en: 'Interface' },
        class: { zh: '类', en: 'Class' },
      };
      const kind = kindMap[e.type]?.[isZh ? 'zh' : 'en'] ?? e.type;
      blocks.push(`### ${e.name} ${kind}`);
      const desc = (e.description ?? '').replace(/<[^>]+>/g, '').trim();
      if (desc) {
        blocks.push('', desc, '');
      }
      if (e.properties && e.properties.length > 0) {
        blocks.push(`| ${h.params} | ${h.desc} | ${h.type} | ${h.default} |`);
        blocks.push(`| --- | --- | --- | --- |`);
        for (const p of e.properties) {
          const pdesc = (p.description ?? '').replace(/<[^>]+>/g, '').trim() || '-';
          blocks.push(
            `| ${esc(p.name)} | ${esc(pdesc)} | ${esc(p.type)} | ${esc(p.default) || '—'} |`
          );
        }
        blocks.push('');
      }
    }
    return blocks.join('\n');
  }
}
