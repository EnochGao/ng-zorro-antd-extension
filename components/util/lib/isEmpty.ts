/**判断一个值是否为空，包括undefined、null、空字符串、空数组、空对象等情况 */
export function isEmpty(value: any) {
  if (value == null) {
    return true;
  }

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
