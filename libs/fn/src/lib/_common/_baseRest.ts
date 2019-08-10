import { identity } from './identity';
import { overRest } from './_overRest';
import { setToString } from './_setToString';

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @param func The function to apply a rest parameter to.
 * @param start [start=func.length-1] The start position of the rest parameter.
 * Returns the new function.
 */
export function baseRest(func: Function, start?: number): Function {
  return setToString(overRest(func, start, identity), func + '');
}
