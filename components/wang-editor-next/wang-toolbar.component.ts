import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  createToolbar,
  DomEditor,
  IDomEditor,
  IToolbarConfig,
  Toolbar,
} from '@wangeditor-next/editor';
import { Mode } from './type';

@Directive({
  selector: 'nzx-wang-toolbar,[nzxWangToolbar]',
  exportAs: 'NzxWangToolbar',
})
export class NzxWangToolbarDirective implements OnInit, OnChanges, OnDestroy {
  @Input() mode: Mode = 'default';
  @Input() editor!: IDomEditor;
  @Input() defaultConfig: Partial<IToolbarConfig> = {};

  @HostBinding('style') display = 'display:block';

  toolbar!: Toolbar;

  constructor(private toolbarRef: ElementRef) {}

  ngOnInit(): void {
    this.initToolbar();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editor'] && !changes['editor'].isFirstChange()) {
      this.initToolbar();
    }
  }

  private initToolbar() {
    if (!this.toolbarRef) return;
    if (!this.editor) return;
    if (DomEditor.getToolbar(this.editor)) return; // 不重复创建
    this.toolbar = createToolbar({
      editor: this.editor,
      selector: this.toolbarRef.nativeElement || '<div></div>',
      mode: this.mode,
      config: this.defaultConfig,
    });
  }

  ngOnDestroy(): void {
    if (this.toolbar) {
      this.toolbar.destroy();
    }
  }
}
