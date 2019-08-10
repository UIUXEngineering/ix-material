import { Set } from './_Set';
import { setToArray } from './_setToArray';
import { noop } from './noop';

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0;

/**
 * Creates a set _object of `values`.
 *
 * @param values {Array} values The values to add to the set.
 * Returns the new set.
 */
export let createSet: any = !(Set && 1 / setToArray(new Set([, -0]))[1] === INFINITY)
  ? noop
  : function(values: any[]) {
      return new Set(values);
    };
