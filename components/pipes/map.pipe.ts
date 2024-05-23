import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nzxMap',
})
export class NzxMapPipe implements PipeTransform {
  transform(
    value: string | number | any[],
    data?: { [key: string | number]: any } | null,
    separator = ','
  ): any {
    if (value !== null && value !== void 0) {
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
