export function isString(obj: any) {
  if (typeof obj === 'string' || obj instanceof String) {
    return true;
  }

  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  const className = Object.prototype.toString.call(obj);
  return className === '[object String]' || className === '[object DOMString]';
}
