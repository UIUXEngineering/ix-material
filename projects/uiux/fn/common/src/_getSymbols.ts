import { arrayFilter } from './_arrayFilter';
import { stubArray } from './stubArray';

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Built-in value references. */
const propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @param object The object to query.
 * Returns the array of symbols.
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
