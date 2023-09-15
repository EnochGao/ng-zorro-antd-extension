/* eslint-disable @angular-eslint/directive-class-suffix */
/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/component-selector */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  isNumber,
  isString,
  toNumber,
  toString,
} from 'ng-zorro-antd-extension/util';

@Component({
  selector: '[nzx-editable]',
  template: `
    <ng-container #detailContainer> </ng-container>

    <ng-template #detailTemplate>
      {{ nzxContent }}
      <button
        *ngIf="nzxShowBtn"
        class="ant-typography-edit"
        type="button"
        nz-trans-button
        (click)="edit()"
      >
        <span nz-icon nzType="edit" nzTheme="outline"></span>
      </button>
    </ng-template>

    <ng-template #editTemplate>
      <textarea
        nz-input
        [nzAutosize]="{ minRows: 1, maxRows: 4 }"
        [ngModel]="nzxContent"
        (ngModelChange)="valueChange($event)"
        (blur)="blur()"
      ></textarea>
    </ng-template>
  `,
  styles: [
    `
      .nzx-editable-cell {
        cursor: pointer;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'NzxEditable',
})
export class NzxEditableComponent implements OnInit {
  @Input() nzxContent: string | number | null = '';
  @Input() nzxShowBtn = true;
  @Input() nzxContentType: 'string' | 'number' | undefined;

  @Output() nzxContentChange = new EventEmitter();

  @HostBinding('class') class = 'nzx-editable-cell';

  @ViewChild('detailTemplate', { static: true })
  private detailTemplateRef!: TemplateRef<any>;

  @ViewChild('editTemplate', { static: true })
  private editTemplateRef!: TemplateRef<any>;

  @ViewChild('detailContainer', { static: true, read: ViewContainerRef })
  private detailContainerRef!: ViewContainerRef;
  private _valueType: 'string' | 'number' = 'string';

  @HostListener('dblclick')
  dblclick() {
    this.edit();
  }

  ngOnInit(): void {
    if (this.nzxContentType) {
      this._valueType = this.nzxContentType;
    } else {
      if (isString(this.nzxContent)) {
        this._valueType = 'string';
      }
      if (isNumber(this.nzxContent)) {
        this._valueType = 'number';
      }
    }

    this.detailContainerRef.clear();
    const view = this.detailContainerRef.createEmbeddedView(
      this.detailTemplateRef
    );
    view.markForCheck();
  }

  edit() {
    this.detailContainerRef.clear();
    const view = this.detailContainerRef.createEmbeddedView(
      this.editTemplateRef
    );
    view.markForCheck();
    (view.rootNodes[0] as HTMLTextAreaElement).focus();
  }

  blur() {
    this.detailContainerRef.clear();
    const view = this.detailContainerRef.createEmbeddedView(
      this.detailTemplateRef
    );
    view.markForCheck();
  }

  valueChange(value: any) {
    let result = value;
    if (this._valueType === 'number') {
      result = toNumber(value);
    } else {
      result = toString(value);
    }
    this.nzxContentChange.emit(result);
  }
}
