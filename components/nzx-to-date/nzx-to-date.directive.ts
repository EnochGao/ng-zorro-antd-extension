import { ChangeDetectorRef, Directive, OnInit, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { parseISO, isDate } from 'date-fns';
import { CompatibleValue } from 'ng-zorro-antd/core/time';
import { CompatibleDate, NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzTimePickerComponent, NzTimePickerPanelComponent } from 'ng-zorro-antd/time-picker';

@Directive({
  selector: '[nzxToDate]'
})
export class NzxToDateDirective implements OnInit {

  constructor(
    @Optional() private ngControl: NgControl,
    private cd: ChangeDetectorRef
  ) {

  }
  ngOnInit(): void {

    let component: NzDatePickerComponent | NzTimePickerPanelComponent = this.ngControl.valueAccessor as any;

    if (this.ngControl) {
      if (this.ngControl.value) {
        this.ngControl.control?.patchValue(this.toDate(this.ngControl.value), {
          emitEvent: false
        });
      }

      this.ngControl.valueAccessor!.writeValue = (value: CompatibleDate) => {

        if (component instanceof NzDatePickerComponent) {
          const newValue: CompatibleValue = component.datePickerService.makeValue(this.toDate(value));
          component.datePickerService.setValue(newValue);
          component.datePickerService.initialValue = newValue;
        }
        console.log('rrrrrr', component);


        if (component instanceof NzTimePickerComponent) {

        }

      };
    }


  }


  toDate(value: any): CompatibleDate | undefined {
    let data: CompatibleDate | undefined = void 0;
    if (value) {
      if (Array.isArray(value)) {
        data = [];
        value.forEach(item => {
          if (isDate(item)) {
            (data as Array<Date>)!.push(item);
          } else {
            (data as Array<Date>)!.push(parseISO(item));
          }
        });

      } else if (!isDate(value)) {
        data = parseISO(value);
      } else {
        data = void 0;
      }
    }

    return data;
  }

}
