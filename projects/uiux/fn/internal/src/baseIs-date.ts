import { isObjectLike } from '../../predicate/src/is-object-like';
import { baseGetTag } from './base-get-tag';

/** `Object#toString` result references. */
const dateTag = '[object Date]';

/**
 * The base implementation of `_.isDate` without Node optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 */
function baseIsDate(value: any): boolean {
  return isObjectLike(value) && baseGetTag(value) === dateTag;
}

export default baseIsDate;
