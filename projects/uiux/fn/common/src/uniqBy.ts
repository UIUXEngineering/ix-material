import { baseIteratee } from './_baseIteratee';
import { baseUniq } from './_baseUniq';

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @category Array
 * @param array The array to inspect.
 * @param [iteratee=_.identity] The iteratee invoked per element.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
export function uniqBy(array: any[], iteratee: any): any[] {
  return array && array.length ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}
