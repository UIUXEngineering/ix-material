import { constant } from './constant';
import { defineProperty } from './_defineProperty';
import { identity } from './identity';

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @param func The function to modify.
 * @param string The `toString` result.
 * Returns `func`.
 */
export const baseSetToString = !defineProperty
  ? identity
  : function(func: Function, string: Function): Function {
      return defineProperty(func, 'toString', {
        configurable: true,
        enumerable: false,
        value: constant(string),
        writable: true,
      });
    };
