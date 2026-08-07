import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NzxDFAbstractControl } from './abstract.control';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.Eager,
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
export class NzxDFTemplateControlComponent extends NzxDFAbstractControl {}
