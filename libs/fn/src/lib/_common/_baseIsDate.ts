import { isObjectLike } from './isObjectLike';
import { baseGetTag } from './_baseGetTag';

/** `Object#toString` result references. */
const dateTag = '[object Date]';

/**
 * The base implementation of `_.isDate` without Node optimizations.
 * @param value The value to check.
 */
export function baseIsDate(value: any): boolean {
  return isObjectLike(value) && baseGetTag(value) === dateTag;
}
