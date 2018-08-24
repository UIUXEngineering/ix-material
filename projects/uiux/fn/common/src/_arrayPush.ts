/**
 * Appends the elements of `values` to `array`.
 *
 * @param array The array to modify.
 * @param values The values to append.
 * Returns `array`.
 */
export function arrayPush(array: any[], values: any[]): any[] {
  let index = -1;
  const length = values.length,
    offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
