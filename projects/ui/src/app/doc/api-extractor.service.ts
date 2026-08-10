import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

/**
 * 从组件源码自动提取 API（对标 NG-ZORRO 官方 ng doc 自动生成的 api 表格）。
 * 读取 components/<lib>/public-api.ts 找到所有导出源文件，
 * 正则提取 @Component/@Directive/@Pipe/@Injectable 的 selector、
 * @Input / @Output 及上方 JSDoc 注释，生成官方风格的 API markdown 表格。
 */
@Injectable({ providedIn: 'root' })
export class ApiExtractorService {
  private readonly http = inject(HttpClient);

  /** 生成 API markdown（lib 为导航 path，如 'acl'；locale 用于切换中英文表头） */
  async extract(lib: string, locale: string): Promise<string> {
    const base = `site-src/components/${lib}`;
    let apiText: string;
    try {
      apiText = await this.fetchText(`${base}/public-api.ts`);
    } catch {
      return '';
    }
    const rels = [...apiText.matchAll(/export\s+\*\s+from\s+['"]([^'"]+)['"]/g)].map(
      (m) => m[1]
    );
    const parts: string[] = [];
    for (const rel of rels) {
      const file = rel.replace(/^\.\//, '').replace(/\.ts$/, '') + '.ts';
      try {
        const code = await this.fetchText(`${base}/${file}`);
        const md = this.parseFile(code, locale);
        if (md) {
          parts.push(md);
        }
      } catch {
        // 跳过无法读取的文件
      }
    }
    return parts.join('\n\n');
  }

  private fetchText(url: string): Promise<string> {
    return firstValueFrom(
      this.http.get(url, { responseType: 'text' })
    ) as Promise<string>;
  }

  /** 解析单个源文件，生成该类的 API markdown；没有可导出 API 时返回空串 */
  private parseFile(code: string, locale: string): string {
    // 提取类装饰器（带 selector）与类名
    const classRe =
      /@(Component|Directive|Pipe|Injectable)\(\{([\s\S]*?)\}\)\s+export class (\w+)/g;
    const blocks: { type: string; selector?: string; name: string; body: string }[] =
      [];
    let m: RegExpExecArray | null;
    while ((m = classRe.exec(code))) {
      const [, type, decoBody, className] = m;
      const selMatch = decoBody.match(/selector\s*:\s*['"]([^'"]+)['"]/);
      blocks.push({
        type,
        selector: selMatch?.[1],
        name: className,
        body: code.slice(m.index),
      });
    }
    if (blocks.length === 0) {
      return '';
    }

    const isZh = locale === 'zh-cn';
    const headers = isZh
      ? { api: 'API', params: '参数', desc: '说明', type: '类型', default: '默认值', events: '事件', method: '方法' }
      : { api: 'API', params: 'Properties', desc: 'Description', type: 'Type', default: 'Default', events: 'Events', method: 'Methods' };

    const out: string[] = [];
    for (const b of blocks) {
      const inputs = this.extractInputs(b.body);
      const outputs = this.extractOutputs(b.body);
      if (inputs.length === 0 && outputs.length === 0) {
        continue;
      }
      const kind =
        b.type === 'Directive' ? (isZh ? '指令' : 'Directive')
        : b.type === 'Component' ? (isZh ? '组件' : 'Component')
        : b.type === 'Pipe' ? (isZh ? '管道' : 'Pipe')
        : (isZh ? '服务' : 'Service');
      const title = b.selector
        ? `${b.name} ${kind}（\`${b.selector}\`）`
        : `${b.name} ${kind}`;
      out.push(`### ${title}`);

      if (inputs.length > 0) {
        out.push(`**${headers.params}**`, '');
        out.push(`| ${headers.params} | ${headers.desc} | ${headers.type} | ${headers.default} |`);
        out.push(`| --- | --- | --- | --- |`);
        for (const i of inputs) {
          out.push(
            `| ${i.name} | ${i.desc || '-'} | ${i.type || '—'} | ${i.default || '—'} |`
          );
        }
        out.push('');
      }
      if (outputs.length > 0) {
        out.push(`**${headers.events}**`, '');
        out.push(`| ${headers.events} | ${headers.desc} | ${headers.type} |`);
        out.push(`| --- | --- | --- |`);
        for (const o of outputs) {
          out.push(`| ${o.name} | ${o.desc || '-'} | ${o.type || '—'} |`);
        }
        out.push('');
      }
    }
    if (out.length === 0) {
      return '';
    }
    return `## ${headers.api}\n\n${out.join('\n').trim()}`;
  }

  private extractInputs(body: string): { name: string; type: string; default: string; desc: string }[] {
    // 先定位 @Input 装饰器与属性名（不含 type/default 的嵌套可选组，避免 g 模式下的引擎怪异行为）
    const re = /@Input(?:\((['"][^'"]+['"])\))?\s+([\w$]+)/g;
    const res: { name: string; type: string; default: string; desc: string }[] = [];
    let m: RegExpExecArray | null;
    while ((m = re.exec(body))) {
      const alias = m[1]?.replace(/['"]/g, '');
      const name = alias || m[2];
      // 取 @Input 之后到行尾 ';' 之间的声明片段，再解析类型与默认值
      const end = body.indexOf(';', m.index);
      const decl = end > m.index ? body.slice(m.index + m[0].length, end) : '';
      const typeMatch = decl.match(/:\s*([\w<>\[\]|, ?]+)/);
      const defMatch = decl.match(/=\s*([^;]+)/);
      const type = typeMatch ? typeMatch[1].trim() : '';
      const def = defMatch ? defMatch[1].trim() : '';
      res.push({ name, type, default: def, desc: this.pickDesc(body, m.index) });
    }
    return res;
  }

  private extractOutputs(body: string): { name: string; type: string; desc: string }[] {
    const re = /@Output(?:\((['"][^'"]+['"])\))?\s+([\w$]+)\s*=\s*new\s+EventEmitter<([\w<>\[\]|, ?]+)>/g;
    const res: { name: string; type: string; desc: string }[] = [];
    let m: RegExpExecArray | null;
    while ((m = re.exec(body))) {
      const alias = m[1]?.replace(/['"]/g, '');
      const name = alias || m[2];
      const type = `EventEmitter<${m[3].trim()}>`;
      res.push({ name, type, desc: this.pickDesc(body, m.index) });
    }
    return res;
  }

  /** 取装饰器前最近的一段 JSDoc 注释作为描述 */
  private pickDesc(body: string, index: number): string {
    const before = body.slice(0, index);
    const m = before.match(/\/\*\*([\s\S]*?)\*\/\s*$/);
    if (!m) {
      return '';
    }
    return m[1]
      .split('\n')
      .map((l) => l.replace(/^\s*\*\s?/, '').trim())
      .filter((l) => l && !l.startsWith('@'))
      .join(' ');
  }
}
