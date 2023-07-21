import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { isString, toNumber, toString } from 'ng-zorro-antd-extension/util';
import { NzxEditableDetailDirective } from './editable-detail.directive';

@Component({
  selector: 'nzx-editable',
  template: `
    <div nz-row nzAlign="middle">
      <div nz-col [nzSpan]="22">
        <ng-container *ngIf="!editable">
          <ng-container
            *ngTemplateOutlet="editableDetailTemplate"
          ></ng-container>
        </ng-container>

        <input
          *ngIf="editable"
          nz-input
          placeholder="请输入"
          [ngModel]="nzxDetail"
          (ngModelChange)="valueChange($event)"
          (blur)="editable = false"
        />
      </div>

      <div nz-col [nzSpan]="2" [ngStyle]="{ 'text-align': 'right' }">
        <button
          nz-button
          nzType="primary"
          nzShape="circle"
          nzSize="small"
          (click)="editable = true"
        >
          <span nz-icon nzType="edit" nzTheme="outline"></span>
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxEditableComponent implements OnChanges {
  @Input() nzxDetail: string | number = '';
  @Output() nzxDetailChange = new EventEmitter();

  editable = false;

  @ContentChild(NzxEditableDetailDirective, { read: TemplateRef })
  editableDetailTemplate!: TemplateRef<any>;

  private valueType: 'string' | 'number' = 'string';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nzxDetail']) {
      const currentValue = changes['nzxDetail'].currentValue;
      if (isString(currentValue)) {
        this.valueType = 'string';
      } else {
        this.valueType = 'number';
      }
    }
  }

  valueChange(value: any) {
    let result = value;
    if (this.valueType === 'number') {
      result = toNumber(value);
    } else {
      result = toString(value);
    }
    this.nzxDetailChange.emit(result);
  }
}
