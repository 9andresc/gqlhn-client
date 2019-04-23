export function isBrowser() {
  return typeof window !== 'undefined';
}

export function tuplify<T extends any[]>(...elements: T) {
  return elements;
}
