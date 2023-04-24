import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nzxMap'
})
export class NzxMapPipe implements PipeTransform {

  transform(value: string | number, data?: { [key: string | number]: any; }, separator = ','): any {
    if ((value !== null) && (value !== undefined)) {
      if (Array.isArray(value)) {
        return value.join(separator);
      }
      if (data) {
        return data[value];
      }
    }
    return value;
  }

}
