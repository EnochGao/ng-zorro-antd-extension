/**
 * Markdown 自定义渲染器（移植自 NG-ZORRO scripts/site/markdown/renderer.ts）。
 * - heading：生成带 slugify id 的锚点标题，并给 nz- 开头的组件标题加 component/directive/service 徽章
 * - link：绝对路径外链在新窗口打开
 */
import { Marked, RendererObject } from 'marked';
import slugify from 'slugify';

const DIRECTIVE_REGEX = /^\\[[a-zA-Z-]+]/;
const SERVICE_REGEX = /^Nz[a-zA-Z]+Service$/;

function createLabel(label: 'component' | 'directive' | 'service'): string {
  return `<span class="nz-label nz-label-${label}">${label}</span>`;
}

export function getRenderer(marked: Marked): RendererObject {
  const originLinkHandler = marked.defaults.renderer!.link;
  return {
    link(params) {
      const { href } = params;
      const str = originLinkHandler.call(this, params);
      const doc = new DOMParser().parseFromString(str, 'text/html');
      const a = doc.body.firstElementChild as HTMLAnchorElement | null;
      if (a && a.nodeName === 'A') {
        // 非相对路径（绝对路径 / 外站）在新窗口打开
        if (!/^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/).*/.test(href)) {
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener');
        }
        return a.outerHTML;
      }
      return str;
    },
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      const title = marked.parseInline(text) as string;
      // slugify 使用去标签后的纯文本，保证锚点稳定
      const plain = text.replace(/<[^>]+>/g, '');
      const id = slugify(plain, {
        remove: /[*+~.()'"!:@\\\[\]]/g,
        replacement: '_',
        lower: true
      });
      const isMarkedLabel = title.indexOf('nz-') === 0;
      const isDirective = DIRECTIVE_REGEX.test(title);
      const isComponent = isMarkedLabel && !isDirective;
      const isService = SERVICE_REGEX.test(title);
      let head = `<h${depth} id="${id}">${title}`;
      const anchor = `<a class="anchor" href="#${id}" aria-hidden="true">#</a>`;
      if (isComponent) {
        head += createLabel('component');
      } else if (isDirective) {
        head += createLabel('directive');
      } else if (isService) {
        head += createLabel('service');
      }
      return head + anchor + `</h${depth}>`;
    }
  };
}
