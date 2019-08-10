import { baseRandom } from './_baseRandom';

/**
 * A specialized version of `_.shuffle` which mutates and sets the size of `_array`.
 *
 * @param array The _array to shuffle.
 * @param size [size=_array.length] The size of `_array`.
 * Returns `_array`.
 */
export function shuffleSelf(array: any[], size?: number): any[] {
  let index = -1;
  const length = array.length,
    lastIndex = length - 1;

  size = size === undefined ? length : size;
  while (++index < size) {
    const rand = baseRandom(index, lastIndex),
      value = array[rand];

    array[rand] = array[index];
    array[index] = value;
  }
  array.length = size;
  return array;
}
