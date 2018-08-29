import { Symbol } from './_Symbol';
import { Uint8Array } from './_Uint8Array';
import { eq } from './eq';
import { equalArrays } from './_equalArrays';
import { mapToArray } from './_mapToArray';
import { setToArray } from './_setToArray';

/** Used to compose bitmasks for value comparisons. */
const COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
const boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]';

const arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
const symbolProto = Symbol ? Symbol.prototype : undefined,
  symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @param object The object to compare.
 * @param other The other object to compare.
 * @param tag The `toStringTag` of the objects to compare.
 * @param bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param customizer The function to customize comparisons.
 * @param equalFunc The function to determine equivalents of values.
 * @param stack Tracks traversed `object` and `other` objects.
 * Returns `true` if the objects are equivalent, else `false`.
 */
export function equalByTag(
  object: any,
  other: any,
  tag: string,
  bitmask: number,
  customizer: Function,
  equalFunc: Function,
  stack: any
): boolean {
  let convert;

  // tslint:disable:no-switch-case-fall-through
  switch (tag) {
    case dataViewTag:
      if (object.byteLength !== other.byteLength || object.byteOffset !== other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (
        object.byteLength !== other.byteLength ||
        !equalFunc(new Uint8Array(object), new Uint8Array(other))
      ) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name === other.name && object.message === other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object === other + '';

    case mapTag:
      convert = mapToArray;

    case setTag:
      // tslint:disable-next-line:no-bitwise
      const isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert = convert || (convert = setToArray);

      if (object.size !== other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      const stacked = stack.get(object);
      if (stacked) {
        return stacked === other;
      }
      // tslint:disable-next-line:no-bitwise
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      const result = equalArrays(
        convert(object),
        convert(other),
        bitmask,
        customizer,
        equalFunc,
        stack
      );
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) === symbolValueOf.call(other);
      }
  }
  return false;
}
