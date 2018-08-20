
import { baseIsTypedArray } from './base-is-typed-array';
import { baseUnary } from './base-unary';

/* Node.js helper references. */
import { nodeUtil } from './node-util';

const nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @param value The value to check.
 * Returns `true` if `value` is a typed array, else `false`.
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
export const isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
