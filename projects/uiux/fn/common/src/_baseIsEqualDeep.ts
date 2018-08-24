import { Stack } from './_Stack';
import { equalArrays } from './_equalArrays';
import { equalByTag } from './_equalByTag';
import { equalObjects } from './_equalObjects';
import { getTag } from './_getTag';
import { isArray } from './isArray';
import { isBuffer } from './isBuffer';
import { isTypedArray } from './isTypedArray';

/** Used to compose bitmasks for value comparisons. */
const COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
const argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  objectTag = '[object Object]';

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @param object The object to compare.
 * @param other The other object to compare.
 * @param bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param customizer The function to customize comparisons.
 * @param equalFunc The function to determine equivalents of values.
 * @param stack Tracks traversed `object` and `other` objects.
 * Returns `true` if the objects are equivalent, else `false`.
 */
export function baseIsEqualDeep(
  object,
  other: any,
  bitmask: any,
  customizer: Function,
  equalFunc: Function,
  stack: any
): boolean {
  let objIsArr = isArray(object);
  const othIsArr = isArray(other);
  let objTag = objIsArr ? arrayTag : getTag(object),
    othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag === argsTag ? objectTag : objTag;
  othTag = othTag === argsTag ? objectTag : othTag;

  let objIsObj = objTag === objectTag;
  const othIsObj = othTag === objectTag,
    isSameTag = objTag === othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack = stack || (stack = new Stack());
    return objIsArr || isTypedArray(object)
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  // tslint:disable-next-line:no-bitwise
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    const objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
      othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      const objUnwrapped = objIsWrapped ? object.value() : object,
        othUnwrapped = othIsWrapped ? other.value() : other;
      stack = stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack = stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
