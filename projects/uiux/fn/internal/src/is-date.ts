import { baseIsDate } from './base-is-date';
import { baseUnary } from './base-unary';
import { nodeUtil } from './node-util';

const nodeIsDate = nodeUtil && nodeUtil.isDate;

/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @param value The value to check.
 * Returns `true` if `value` is a date object, else `false`.
 *
 * isDate(new Date);
 * // => true
 *
 * isDate('Mon April 23 2012');
 * // => false
 */
const isDate: Function = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
export { isDate };
