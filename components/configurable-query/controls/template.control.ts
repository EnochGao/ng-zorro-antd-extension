import { Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';

@Component({
  template: `
    <ng-container
      *ngTemplateOutlet="
        control.templateRef!;
        context: { $implicit: form.get(control.controlName!), formGroup: form }
      "
    >
    </ng-container>
  `,
})
export class NzxTemplateControlComponent extends NzxAbstractControl {}
