import { isArray } from './isArray';
import { isSymbol } from './isSymbol';

/** Used to match property names within property paths. */
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * Returns `true` if `value` is a property name, else `false`.
 *
 * @param value value The value to check.
 * @param object [object] The object to query keys on.
 */
export function isKey(value: any, object?: any): boolean {
  if (isArray(value)) {
    return false;
  }
  const type = typeof value;
  if (
    type === 'number' ||
    type === 'symbol' ||
    type === 'boolean' ||
    value == null ||
    isSymbol(value)
  ) {
    return true;
  }
  return (
    reIsPlainProp.test(value) ||
    !reIsDeepProp.test(value) ||
    (object != null && value in Object(object))
  );
}
