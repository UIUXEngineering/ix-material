import { baseRandom } from './_baseRandom';

/**
 * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
 *
 * @param array The array to shuffle.
 * @param size [size=array.length] The size of `array`.
 * Returns `array`.
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
