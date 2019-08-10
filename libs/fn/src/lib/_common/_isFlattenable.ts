import { Symbol } from './_Symbol';
import { isArguments } from './isArguments';
import { isArray } from './isArray';

/** Built-in value references. */
const spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` _object or _array.
 *

 * @param value The value to check.
 */
export function isFlattenable(value: any): boolean {
  return (
    isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol])
  );
}
