import { isObjectLike } from './isObjectLike';
import { baseGetTag } from './_baseGetTag';

/** `Object#toString` result references. */
const argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 * Returns `true` if `value` is an `arguments` _object,
 * @param value The value to check.
 */
export function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) === argsTag;
}
