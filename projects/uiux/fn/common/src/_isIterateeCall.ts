import { eq } from './eq';
import { isArrayLike } from './isArrayLike';
import { isIndex } from './_isIndex';
import { isObject } from './isObject';

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @param value The potential iteratee value argument.
 * @param index The potential iteratee index or key argument.
 * @param object The potential iteratee object argument.
 * Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
export function isIterateeCall(value: any, index: any, object: any): boolean {
  if (!isObject(object)) {
    return false;
  }
  const type = typeof index;
  if (
    type === 'number'
      ? isArrayLike(object) && isIndex(index, object.length)
      : type === 'string' && index in object
  ) {
    return eq(object[index], value);
  }
  return false;
}
