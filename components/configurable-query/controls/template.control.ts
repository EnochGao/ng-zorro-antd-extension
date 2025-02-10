import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';

@Component({
  template: `
    <ng-container
      *ngTemplateOutlet="
        control.templateRef!;
        context: { $implicit: formControl, formGroup: form }
      "
    >
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxTemplateControlComponent extends NzxAbstractControl {}
