/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  createEditor,
  IDomEditor,
  IEditorConfig,
  SlateDescendant,
  SlateEditor,
  SlateTransforms,
} from '@wangeditor/editor';
import { Mode } from './type';

@Directive({
  selector: 'nzx-wang-editor,[nzxWangEditor]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzxWangEditorDirective),
      multi: true,
    },
  ],
  exportAs: 'NzxWangEditor',
})
export class NzxWangEditorDirective
  implements OnInit, ControlValueAccessor, OnDestroy, OnChanges
{
  @Input() mode: Mode = 'default';
  @Input() defaultContent: SlateDescendant[] = [];
  @Input() defaultHtml = '';
  @Input() defaultConfig: Partial<IEditorConfig> = {};
  @Input() height = '350px';

  @Output() onCreated = new EventEmitter();
  @Output() onDestroyed = new EventEmitter();
  @Output() onMaxLength = new EventEmitter();
  @Output() onFocus = new EventEmitter();
  @Output() onBlur = new EventEmitter();
  @Output() customAlert = new EventEmitter();
  @Output() customPaste = new EventEmitter();
  @Output() onChange = new EventEmitter();

  @HostBinding('style') display = 'display:block';

  editor!: IDomEditor;
  currentValue = '';

  private propagateChange = (_: any) => {};

  constructor(private editorRef: ElementRef, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['defaultConfig'] && !changes['defaultConfig'].isFirstChange()) {
      this.init();
    }
  }

  private init() {
    if (this.editor) {
      this.editor.destroy();
    }
    const that = this;

    createEditor({
      selector: this.editorRef.nativeElement,
      mode: this.mode,
      content: this.defaultContent || [],
      html: this.defaultHtml || '',
      config: {
        ...this.defaultConfig,
        onCreated(editor) {
          that.editor = editor; // 记录 editor 实例
          that.onCreated.emit(editor);
          that.cd.markForCheck();
          if (that.defaultConfig.onCreated) {
            const info = that.genErrorInfo('onCreated');
            throw new Error(info);
          }
        },
        onChange(editor) {
          const editorHtml = editor.getHtml();
          that.currentValue = editorHtml; // 记录当前内容
          that.onChange.emit(editor);
          that.propagateChange(editorHtml);
          that.cd.markForCheck();

          if (that.defaultConfig.onChange) {
            const info = that.genErrorInfo('ngModelChange');
            throw new Error(info);
          }
        },
        onDestroyed(editor) {
          that.onDestroyed.emit(editor);
          if (that.defaultConfig.onDestroyed) {
            const info = that.genErrorInfo('onDestroyed');
            throw new Error(info);
          }
        },
        onMaxLength(editor) {
          that.onMaxLength.emit(editor);
          if (that.defaultConfig.onMaxLength) {
            const info = that.genErrorInfo('onMaxLength');
            throw new Error(info);
          }
        },
        onFocus(editor) {
          that.onFocus.emit(editor);
          if (that.defaultConfig.onFocus) {
            const info = that.genErrorInfo('onFocus');
            throw new Error(info);
          }
        },
        onBlur(editor) {
          that.onBlur.emit(editor);
          if (that.defaultConfig.onBlur) {
            const info = that.genErrorInfo('onBlur');
            throw new Error(info);
          }
        },
        customAlert(info: string, type) {
          that.customAlert.emit({ info, type });
          if (that.defaultConfig.customAlert) {
            const info = that.genErrorInfo('customAlert');
            throw new Error(info);
          }
        },
        customPaste: (editor, event): any => {
          if (that.defaultConfig.customPaste) {
            const info = that.genErrorInfo('customPaste');
            throw new Error(info);
          }
          let res;
          that.customPaste.emit({
            editor,
            event,
            callback: (val: boolean) => {
              res = val;
            },
          });
          return res;
        },
      },
    });
  }

  writeValue(obj: any): void {
    setTimeout(() => {
      if (obj === this.currentValue) return; // 和当前内容一样，则忽略
      this.setHtml(obj);
    }, 0);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    setTimeout(() => {
      if (isDisabled) {
        this.editor?.disable();
      } else {
        this.editor?.enable();
      }
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }
  }

  private genErrorInfo(fnName: string): string {
    let info = `请使用 '(${fnName})=' 事件!`;
    info += `\nPlease use '(${fnName})' event!`;
    return info;
  }

  private setHtml(newHtml: string) {
    const editor = this.editor;
    if (editor == null) return;

    // 记录编辑器当前状态
    const isEditorDisabled = editor.isDisabled();
    const isEditorFocused = editor.isFocused();
    const editorSelectionStr = JSON.stringify(editor.selection);

    // 删除并重新设置 HTML
    editor.enable();
    editor.focus();
    editor.select([]);
    editor.deleteFragment();
    SlateTransforms.setNodes(editor, { type: 'paragraph' } as any, {
      mode: 'highest',
    });
    editor.dangerouslyInsertHtml(newHtml);

    // 恢复编辑器状态
    if (!isEditorFocused) {
      editor.deselect();
      editor.blur();
    }
    if (isEditorDisabled) {
      editor.deselect();
      editor.disable();
    }
    if (editor.isFocused()) {
      try {
        editor.select(JSON.parse(editorSelectionStr)); // 选中原来的位置
      } catch (ex) {
        editor.select(SlateEditor.start(editor, [])); // 选中开始
      }
    }
  }
}
