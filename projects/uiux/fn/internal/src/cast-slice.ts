import { baseSlice } from './base-slice';

/**
 * Casts `array` to a slice if it's needed.
 *
 *
 * @param  array The array to inspect.
 * @param start The start position.
 * @param [end=array.length] The end position.
 * @returns  Returns the cast slice.
 */
export function castSlice(array: any[], start: number, end: number) {
  const length = array.length;
  end = end === undefined ? length : end;
  return !start && end >= length ? array : baseSlice(array, start, end);
}
