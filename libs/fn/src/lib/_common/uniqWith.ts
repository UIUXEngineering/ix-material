import { baseUniq } from './_baseUniq';

/**
 * This method is like `_.uniq` except that it accepts `comparator` which
 * is invoked to compare elements of `_array`. The order of result values is
 * determined by the order they occur in the _array.The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @category Array
 * @param array The _array to inspect.
 * @param [comparator] The comparator invoked per element.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.uniqWith(objects, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 */
export function uniqWith(array: any[], comparator: Function): any[] {
  comparator = typeof comparator === 'function' ? comparator : undefined;
  return array && array.length ? baseUniq(array, undefined, comparator) : [];
}
