import { Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nzx-template-control',
  template: `
    <ng-container
      *ngTemplateOutlet="
        control.templateRef!;
        context: { $implicit: form.get(control.controlName!), formGroup: form }
      "
    >
    </ng-container>
  `,
  imports:[CommonModule]
})
export class NzxTemplateControlComponent extends NzxAbstractControl {}
