import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import {
  ComponentRef,
  Injectable,
  Type,
  ViewContainerRef,
  inject,
} from '@angular/core';

/**
 * 示例静态清单。
 * 每个示例对应 components/<lib>/examples/<dir>/<dir>.component.ts 导出的组件类。
 * key 与 navigations.json 中 examples 数组的值一致（nzx-<lib>-<dir>-example）。
 * 这里采用 NG-ZORRO 的思路：构建期无法预知，故显式声明静态 import（esbuild 要求字面量路径）。
 */
type ExampleEntry = {
  /** 组件类（动态导入） */
  load: () => Promise<Type<unknown>>;
  /** 源码相对运行时路径（dev-server assets 暴露的 /site-src/components/...） */
  sources: { ts: string; html?: string };
};

function resolveComponent(module: Record<string, unknown>): Type<unknown> {
  // 用 Angular 注入到组件类上的 ɵcmp 静态属性识别组件类型，
  // 避免生产构建对类名做 minify 后基于名字正则匹配失败。
  const found = Object.values(module).find(
    (v): v is Type<unknown> =>
      typeof v === 'function' && !!(v as { ɵcmp?: unknown }).ɵcmp
  );
  if (!found) {
    throw new Error('示例模块中未找到 ExampleComponent');
  }
  return found;
}

@Injectable({ providedIn: 'root' })
export class ExampleLoaderService {
  private readonly http = inject(HttpClient);

  private readonly manifest: Record<string, ExampleEntry> = {
    'nzx-acl-acl-example': {
      load: () =>
        import('../../../../../components/acl/examples/acl/acl.component').then(
          (m) => resolveComponent(m)
        ),
      sources: { ts: 'acl/examples/acl/acl.component.ts' },
    },
    'nzx-blank-field-blank-field-example': {
      load: () =>
        import(
          '../../../../../components/blank-field/examples/blank-field/blank-field.component'
        ).then((m) => resolveComponent(m)),
      sources: { ts: 'blank-field/examples/blank-field/blank-field.component.ts' },
    },
    'nzx-checkbox-checkbox-group-example': {
      load: () =>
        import(
          '../../../../../components/checkbox/examples/checkbox-group/checkbox-group.component'
        ).then((m) => resolveComponent(m)),
      sources: {
        ts: 'checkbox/examples/checkbox-group/checkbox-group.component.ts',
        html: 'checkbox/examples/checkbox-group/checkbox-group.component.html',
      },
    },
    'nzx-configurable-query-configurable-query-example': {
      load: () =>
        import(
          '../../../../../components/configurable-query/examples/configurable-query/configurable-query.component'
        ).then((m) => resolveComponent(m)),
      sources: {
        ts: 'configurable-query/examples/configurable-query/configurable-query.component.ts',
        html: 'configurable-query/examples/configurable-query/configurable-query.component.html',
      },
    },
    'nzx-dynamic-form-dynamic-form-example': {
      load: () =>
        import(
          '../../../../../components/dynamic-form/examples/dynamic-form/dynamic-form.component'
        ).then((m) => resolveComponent(m)),
      sources: {
        ts: 'dynamic-form/examples/dynamic-form/dynamic-form.component.ts',
      },
    },
    'nzx-editable-editable-example': {
      load: () =>
        import(
          '../../../../../components/editable/examples/editable/editable.component'
        ).then((m) => resolveComponent(m)),
      sources: { ts: 'editable/examples/editable/editable.component.ts' },
    },
    'nzx-jigsaw-jigsaw-example': {
      load: () =>
        import(
          '../../../../../components/jigsaw/examples/jigsaw/jigsaw.component'
        ).then((m) => resolveComponent(m)),
      sources: { ts: 'jigsaw/examples/jigsaw/jigsaw.component.ts' },
    },
    'nzx-pipes-pipes-example': {
      load: () =>
        import(
          '../../../../../components/pipes/examples/pipes/pipes.component'
        ).then((m) => resolveComponent(m)),
      sources: { ts: 'pipes/examples/pipes/pipes.component.ts' },
    },
    'nzx-print-print-example': {
      load: () =>
        import(
          '../../../../../components/print/examples/print/print.component'
        ).then((m) => resolveComponent(m)),
      sources: {
        ts: 'print/examples/print/print.component.ts',
        html: 'print/examples/print/print.component.html',
      },
    },
    'nzx-simple-table-simple-table-example': {
      load: () =>
        import(
          '../../../../../components/simple-table/examples/simple-table/simple-table.component'
        ).then((m) => resolveComponent(m)),
      sources: {
        ts: 'simple-table/examples/simple-table/simple-table.component.ts',
        html: 'simple-table/examples/simple-table/simple-table.component.html',
      },
    },
    'nzx-table-adaptor-table-adaptor-example': {
      load: () =>
        import(
          '../../../../../components/table-adaptor/examples/table-adaptor/table-adaptor.component'
        ).then((m) => resolveComponent(m)),
      sources: {
        ts: 'table-adaptor/examples/table-adaptor/table-adaptor.component.ts',
        html: 'table-adaptor/examples/table-adaptor/table-adaptor.component.html',
      },
    },
    'nzx-table-adaptor-page-table-basic-example': {
      load: () =>
        import(
          '../../../../../components/table-adaptor/examples/page-table-basic/page-table-basic.component'
        ).then((m) => resolveComponent(m)),
      sources: {
        ts: 'table-adaptor/examples/page-table-basic/page-table-basic.component.ts',
        html: 'table-adaptor/examples/page-table-basic/page-table-basic.component.html',
      },
    },
    'nzx-table-form-table-form-example': {
      load: () =>
        import(
          '../../../../../components/table-form/examples/table-form/table-form.component'
        ).then((m) => resolveComponent(m)),
      sources: {
        ts: 'table-form/examples/table-form/table-form.component.ts',
        html: 'table-form/examples/table-form/table-form.component.html',
      },
    },
    'nzx-table-select-table-select-example': {
      load: () =>
        import(
          '../../../../../components/table-select/examples/table-select/table-select.component'
        ).then((m) => resolveComponent(m)),
      sources: {
        ts: 'table-select/examples/table-select/table-select.component.ts',
        html: 'table-select/examples/table-select/table-select.component.html',
      },
    },
    'nzx-table-select-page-table-select-example': {
      load: () =>
        import(
          '../../../../../components/table-select/examples/page-table-select/page-table-select.component'
        ).then((m) => resolveComponent(m)),
      sources: {
        ts: 'table-select/examples/page-table-select/page-table-select.component.ts',
        html: 'table-select/examples/page-table-select/page-table-select.component.html',
      },
    },
    'nzx-timer-button-timer-button-example': {
      load: () =>
        import(
          '../../../../../components/timer-button/examples/timer-button/timer-button.component'
        ).then((m) => resolveComponent(m)),
      sources: {
        ts: 'timer-button/examples/timer-button/timer-button.component.ts',
      },
    },
    'nzx-trim-trim-example': {
      load: () =>
        import(
          '../../../../../components/trim/examples/trim/trim.component'
        ).then((m) => resolveComponent(m)),
      sources: { ts: 'trim/examples/trim/trim.component.ts' },
    },
    'nzx-util-util-example': {
      load: () =>
        import(
          '../../../../../components/util/examples/util/util.component'
        ).then((m) => resolveComponent(m)),
      sources: {
        ts: 'util/examples/util/util.component.ts',
        html: 'util/examples/util/util.component.html',
      },
    },
    'nzx-wang-editor-editor-example': {
      load: () =>
        import(
          '../../../../../components/wang-editor/examples/editor/editor.component'
        ).then((m) => resolveComponent(m)),
      sources: {
        ts: 'wang-editor/examples/editor/editor.component.ts',
        html: 'wang-editor/examples/editor/editor.component.html',
      },
    },
    'nzx-wang-editor-next-editor-example': {
      load: () =>
        import(
          '../../../../../components/wang-editor-next/examples/editor/editor.component'
        ).then((m) => resolveComponent(m)),
      sources: {
        ts: 'wang-editor-next/examples/editor/editor.component.ts',
        html: 'wang-editor-next/examples/editor/editor.component.html',
      },
    },
  };

  /** 动态加载示例组件类 */
  async loadComponent(key: string): Promise<Type<unknown> | null> {
    const entry = this.manifest[key];
    if (!entry) {
      console.warn(`[ExampleLoader] 未找到示例: ${key}`);
      return null;
    }
    return entry.load();
  }

  /** 在指定容器创建示例组件实例 */
  async createComponent(
    key: string,
    container: ViewContainerRef
  ): Promise<ComponentRef<unknown> | null> {
    const comp = await this.loadComponent(key);
    if (!comp) {
      return null;
    }
    container.clear();
    return container.createComponent(comp);
  }

  /** 读取示例源码（运行时从产物 assets 获取） */
  async loadSources(key: string): Promise<Record<string, string>> {
    const entry = this.manifest[key];
    if (!entry) {
      return {};
    }
    const base = 'site-src/components/';
    const result: Record<string, string> = {};
    const tasks: Promise<void>[] = [];
    if (entry.sources.ts) {
      tasks.push(
        firstValueFrom(
          this.http.get(base + entry.sources.ts, { responseType: 'text' })
        ).then((c) => {
          result['TS'] = c ?? '';
        })
      );
    }
    if (entry.sources.html) {
      tasks.push(
        firstValueFrom(
          this.http.get(base + entry.sources.html, { responseType: 'text' })
        ).then((c) => {
          result['HTML'] = c ?? '';
        })
      );
    }
    await Promise.all(tasks);
    return result;
  }
}
