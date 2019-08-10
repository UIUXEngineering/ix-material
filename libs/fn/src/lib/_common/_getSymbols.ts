import { arrayFilter } from './_arrayFilter';
import { stubArray } from './stubArray';

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Built-in value references. */
const propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an _array of the own enumerable symbols of `_object`.
 *
 * @param _object The _object to query.
 * Returns the _array of symbols.
 */
export const getSymbols = !nativeGetSymbols
  ? stubArray
  : function(object: any): any[] {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
