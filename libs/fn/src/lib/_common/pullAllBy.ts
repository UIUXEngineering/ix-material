import { baseIteratee } from './_baseIteratee';
import { basePullAll } from './_basePullAll';

/**
 * This method is like `_.pullAll` except that it accepts `iteratee` which is
 * invoked for each element of `_array` and `values` to generate the criterion
 * by which they're compared. The iteratee is invoked with one argument: (value).
 *
 * **Note:** Unlike `_.differenceBy`, this method mutates `_array`.
 *
 * @param array The _array to modify.
 * @param values The values to remove.
 * @param iteratee [iteratee=_.identity] The iteratee invoked per element.
 * Returns `_array`.
 * @example
 *
 * var _array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 *
 * _.pullAllBy(_array, [{ 'x': 1 }, { 'x': 3 }], 'x');
 * console.log(_array);
 * // => [{ 'x': 2 }]
 */
export function pullAllBy(array: any[], values: any[], iteratee?: Function): any[] {
  return array && array.length && values && values.length
    ? basePullAll(array, values, baseIteratee(iteratee, 2))
    : array;
}
