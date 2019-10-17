/** Used for built-in method references. */
import { baseIsArguments } from './_baseIsArguments';
import { isObjectLike } from './isObjectLike';

const objectProto = Object.prototype;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
const propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` _object.
 *
 * Returns `true` if `value` is an `arguments` _object,
 *  else `false`.
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
export const isArguments = baseIsArguments(
  (function() {
    return arguments;
  })()
)
  ? baseIsArguments
  : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
    };
