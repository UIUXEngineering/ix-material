/**
 * This method returns a new empty array.
 *
 * Returns the new empty array.
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
export function stubArray(): any[] {
  return [];
}
