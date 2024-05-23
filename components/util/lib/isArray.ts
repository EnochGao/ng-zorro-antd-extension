/** 判断是否为数组 */
export function isArray(obj: any) {
  if (Array.isArray(obj)) {
    return true;
  }

  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  const className = Object.prototype.toString.call(obj);
  return (
    className === '[object Array]' ||
    className === '[object HTMLCollection]' ||
    className === '[object NodeList]' ||
    (typeof obj.length === 'number' &&
      obj.item !== undefined &&
      (obj.length === 0 || (obj.length > 0 && obj.length - 1 in obj)))
  );
}
