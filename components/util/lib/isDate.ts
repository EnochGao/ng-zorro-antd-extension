export function isDate(value: any) {
  return Object.prototype.toString.call(value) === '[object Date]';
}
