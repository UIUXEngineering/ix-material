/**
 * Copies the values of `source` to `array`.
 *
 * @param source The array to copy values from.
 * @param array The array to copy values to.
 * Returns `array`.
 */
export function copyArray(source: any[], array?: any[]): any[] {
  let index = -1;
  const length = source.length;
  array = array ? array : Array(length);
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
