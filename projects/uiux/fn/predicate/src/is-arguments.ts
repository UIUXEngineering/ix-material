/** Used for built-in method references. */
import { baseIsArguments } from '@uiux/fn/internal';
import { isObjectLike } from '@uiux/fn/internal';

const objectProto = Object.prototype;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
const propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 *
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 *  value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
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
      return (
        isObjectLike(value) &&
        hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee')
      );
    };
