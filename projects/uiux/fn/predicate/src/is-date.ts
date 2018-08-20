import { baseIsDate, baseUnary, nodeUtil } from '@uiux/fn/internal';

const nodeIsDate = nodeUtil && nodeUtil.isDate;

/**
 * Checks if `value` is classified as a `Date` object.
 *
 *
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 *  value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * isDate(new Date);
 * // => true
 *
 * isDate('Mon April 23 2012');
 * // => false
 */
const isDate: Function = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
export { isDate };
