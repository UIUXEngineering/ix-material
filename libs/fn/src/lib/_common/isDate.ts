import { baseIsDate } from './_baseIsDate';
import { baseUnary } from './_baseUnary';
import { nodeUtil } from './_nodeUtil';

const nodeIsDate = nodeUtil && nodeUtil.isDate;

/**
 * Checks if `value` is classified as a `Date` _object.
 *
 * @param value The value to check.
 * Returns `true` if `value` is a _date _object, else `false`.
 *
 * isDate(new Date);
 * // => true
 *
 * isDate('Mon April 23 2012');
 * // => false
 */
const isDate: Function = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
export { isDate };
