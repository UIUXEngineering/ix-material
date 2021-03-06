/**
 * The base implementation of `_.slice` without an iteratee call guard.
 * Returns the slice of `_array`.
 *
 * @param array The _array to slice.
 * @param start [start=0] The start position.
 * @param end [end=_array.length] The end position.
 */
export function baseSlice(array: any[], start: number, end: number): any[] {
  let index = -1,
    length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }

  // tslint:disable-next-line
  length = start > end ? 0 : (end - start) >>> 0;

  // tslint:disable-next-line
  start >>>= 0;

  const result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
