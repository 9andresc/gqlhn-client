export function isBrowser() {
  return typeof window !== 'undefined';
}

/**
 * It allows custom hooks to return the correct inferred types for 2 and only 2
 * returned values in an array.
 *
 * @export
 * @template T
 * @param {...T} elements
 * @returns
 */
export function tuplify<T extends any[]>(...elements: T) {
  return elements;
}
