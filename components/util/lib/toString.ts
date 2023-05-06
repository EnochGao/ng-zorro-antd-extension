export function toString(value: any): string {
  if (value == null) {
    return '';
  }

  if (typeof value === 'string') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(toString).join(',');
  }

  if (typeof value === 'object') {
    return JSON.stringify(value);
  }

  return String(value);
}
