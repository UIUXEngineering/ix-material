import { getAllKeys } from './_getAllKeys';

/** Used to compose bitmasks for value comparisons. */
const COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @param object The _object to compare.
 * @param other The other _object to compare.
 * @param bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param customizer The function to customize comparisons.
 * @param equalFunc The function to determine equivalents of values.
 * @param stack Tracks traversed `_object` and `other` objects.
 * Returns `true` if the objects are equivalent, else `false`.
 */
export function equalObjects(
  object: any,
  other: any,
  bitmask: number,
  customizer: Function,
  equalFunc: Function,
  stack: any
): boolean {
  // tslint:disable-next-line:no-bitwise
  const isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    objProps = getAllKeys(object),
    objLength = objProps.length,
    othProps = getAllKeys(other),
    othLength = othProps.length;

  if (objLength !== othLength && !isPartial) {
    return false;
  }
  let index = objLength;
  while (index--) {
    const key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  const stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked === other;
  }
  let result = true;
  stack.set(object, other);
  stack.set(other, object);

  let skipCtor: boolean | number = isPartial;
  while (++index < objLength) {
    const key = objProps[index];
    const objValue = object[key],
      othValue = other[key];

    let compared;
    if (customizer) {
      compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (
      !(compared === undefined
        ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack)
        : compared)
    ) {
      result = false;
      break;
    }
    skipCtor = skipCtor || (skipCtor = key === 'constructor');
  }
  if (result && !skipCtor) {
    const objCtor = object.constructor,
      othCtor = other.constructor;

    // Non `Object` _object instances with different constructors are not equal.
    if (
      objCtor !== othCtor &&
      ('constructor' in object && 'constructor' in other) &&
      !(
        typeof objCtor === 'function' &&
        objCtor instanceof objCtor &&
        typeof othCtor === 'function' &&
        othCtor instanceof othCtor
      )
    ) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}
