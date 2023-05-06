export function isNumber(obj: any) {
  if (typeof obj === 'number' && isFinite(obj)) {
    return true;
  }

  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  const className = Object.prototype.toString.call(obj);
  return (
    className === '[object Number]' ||
    (typeof obj === 'object' && obj.valueOf() !== obj.valueOf())
  );
}
