/** 深克隆 */
export function cloneDeep(obj: any, hash = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (hash.has(obj)) {
    return hash.get(obj);
  }

  let clone;
  const Constructor = obj.constructor;

  switch (Constructor) {
    case RegExp:
      clone = new Constructor(obj);
      break;
    case Date:
      clone = new Constructor(obj.getTime());
      break;
    case Map:
      clone = new Constructor();
      for (const [key, value] of obj) {
        clone.set(cloneDeep(key, hash), cloneDeep(value, hash));
      }
      break;
    case Set:
      clone = new Constructor();
      for (const value of obj) {
        clone.add(cloneDeep(value, hash));
      }
      break;
    default:
      clone = Array.isArray(obj)
        ? []
        : Object.create(Object.getPrototypeOf(obj));
      break;
  }

  hash.set(obj, clone);

  const keys = Object.getOwnPropertyNames(obj).concat(
    Object.getOwnPropertySymbols(obj) as any
  );
  for (const key of keys) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, key);
    if (descriptor) {
      if (descriptor.value && typeof descriptor.value === 'object') {
        descriptor.value = cloneDeep(descriptor.value, hash);
      }
      Object.defineProperty(clone, key, descriptor);
    }
  }
  return clone;
}
