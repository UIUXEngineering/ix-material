import { isObjectLike } from '../../predicate/src/is-object-like';
import { baseGetTag } from './base-get-tag';

/** `Object#toString` result references. */
const argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
export function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) === argsTag;
}
