import { baseSlice } from './_baseSlice';

/**
 * Casts `array` to a slice if it's needed.
 *  Returns the cast slice.
 *
 * @param array The array to inspect.
 * @param start The start position.
 * @param end [end=array.length] The end position.
 */
export function castSlice(array: any[], start: number, end: number) {
  const length = array.length;
  end = end === undefined ? length : end;
  return !start && end >= length ? array : baseSlice(array, start, end);
}
