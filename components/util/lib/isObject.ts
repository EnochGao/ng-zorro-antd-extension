export function isObject(obj: any) {
  if (typeof obj === 'object' && obj !== null) {
    return true;
  }

  if (typeof obj === 'function' && typeof obj.nodeType === 'number') {
    return true;
  }

  return false;
}
