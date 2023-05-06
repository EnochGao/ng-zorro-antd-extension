export function toNumber(value: any) {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? NaN : parsed;
  }

  if (typeof value === 'boolean') {
    return value ? 1 : 0;
  }

  if (Array.isArray(value)) {
    const parsed = parseFloat(value[0]);
    return isNaN(parsed) ? NaN : parsed;
  }

  return NaN;
}
