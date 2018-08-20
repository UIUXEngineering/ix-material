import { isObjectLike } from './is-object-like';
import { baseGetTag } from './base-get-tag';

/** `Object#toString` result references. */
const argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 * Returns `true` if `value` is an `arguments` object,
 * @param value The value to check.
 */
export function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) === argsTag;
}
