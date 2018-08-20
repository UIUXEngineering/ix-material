import { baseIsTypedArray } from '@uiux/fn/internal';
import { baseUnary } from '@uiux/fn/internal';

/* Node.js helper references. */
import { nodeUtil } from '@uiux/fn/internal';

const nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 *
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 *  value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
export const isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
