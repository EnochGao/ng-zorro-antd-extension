/* eslint-disable @angular-eslint/directive-class-suffix */
/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/component-selector */
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { isString, toNumber, toString } from 'ng-zorro-antd-extension/util';

@Component({
  selector: '[nzx-editable]',
  template: `
    <ng-container #detailContainer> </ng-container>

    <ng-template #detailTemplate>
      {{ nzxContent }}
      <button
        *ngIf="nzxShowBtn"
        nz-trans-button
        class="ant-typography-edit"
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
  encapsulation: ViewEncapsulation.None,
  exportAs: 'NzxEditable',
})
export class NzxEditableComponent implements OnChanges, AfterViewInit {
  @Input() nzxContent: string | number = '';
  @Input() nzxShowBtn = true;
  @Output() nzxContentChange = new EventEmitter();

  @HostBinding('class') class = 'nzx-editable-cell';

  @ViewChild('detailTemplate') private detailTemplateRef!: TemplateRef<any>;
  @ViewChild('editTemplate') private editTemplateRef!: TemplateRef<any>;
  @ViewChild('detailContainer', { read: ViewContainerRef })
  private detailContainerRef!: ViewContainerRef;

  private valueType: 'string' | 'number' = 'string';

  @HostListener('dblclick')
  private dblclick() {
    this.edit();
  }

  ngAfterViewInit(): void {
    this.detailContainerRef
      .createEmbeddedView(this.detailTemplateRef)
      .markForCheck();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nzxContent']) {
      const currentValue = changes['nzxContent'].currentValue;
      if (isString(currentValue)) {
        this.valueType = 'string';
      } else {
        this.valueType = 'number';
      }
    }
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
    this.detailContainerRef
      .createEmbeddedView(this.detailTemplateRef)
      .markForCheck();
  }

  valueChange(value: any) {
    let result = value;
    if (this.valueType === 'number') {
      result = toNumber(value);
    } else {
      result = toString(value);
    }
    this.nzxContentChange.emit(result);
  }
}
