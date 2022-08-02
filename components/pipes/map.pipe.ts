import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nzxMap'
})
export class MapPipe implements PipeTransform {

  transform(value: string | number, data: { [key: string | number]: any; }, separator = ','): any {
    if ((value !== null) && (value !== undefined) && data) {
      if (Array.isArray(value)) {
        return value.join(separator);
      }
      return data[value];
    }
    return value;
  }

}
