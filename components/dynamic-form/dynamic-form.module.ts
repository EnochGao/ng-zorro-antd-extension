import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzxDynamicFormComponent } from './dynamic-form.component';
import { NzxDFBuiltInControlWrapperComponent } from './wrapper/control/built-in-control-wrapper';
import { NzxDFBuiltInItemWrapperComponent } from './wrapper/item/built-in-item-wrapper';
import { NzxDFBuiltInLabelWrapperComponent } from './wrapper/label/built-in-label-wrapper';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzxDFDatePickerControlComponent } from './controls/date-picker.control';
import { NzxDFInputControlComponent } from './controls/input.control';
import { NzxDFRangePickerControlComponent } from './controls/range-picker.control';
import { NzxDFSelectControlComponent } from './controls/select.control';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
  ],
  declarations: [
    NzxDynamicFormComponent,

    NzxDFBuiltInItemWrapperComponent,
    NzxDFBuiltInLabelWrapperComponent,
    NzxDFBuiltInControlWrapperComponent,


    NzxDFDatePickerControlComponent,
    NzxDFInputControlComponent,
    NzxDFRangePickerControlComponent,
    NzxDFSelectControlComponent
  ],
  exports: [NzxDynamicFormComponent],
})
export class NzxDynamicFormModule {
  static forRoot(): ModuleWithProviders<NzxDynamicFormModule> {
    return {
      ngModule: NzxDynamicFormModule,
      providers: [],
    };
  }
}
