/** trim去空Object*/
export function trimObject(ob: any) {
  const result: any = {};
  for (const key in ob) {
    if (Object.prototype.hasOwnProperty.call(ob, key)) {
      const el = ob[key];
      if (el !== null && el !== undefined && el !== '') {
        result[key] = el;
      }
    }
  }
  return result;
}
