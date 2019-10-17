import { assignMergeValue } from './_assignMergeValue';
import { cloneBuffer } from './_cloneBuffer';
import { cloneTypedArray } from './_cloneTypedArray';
import { copyArray } from './_copyArray';
import { initCloneObject } from './_initCloneObject';
import { isArguments } from './isArguments';
import { isArray } from './isArray';
import { isArrayLikeObject } from './isArrayLikeObject';
import { isBuffer } from './isBuffer';
import { isFunction } from './isFunction';
import { isObject } from './isObject';
import { isPlainObject } from './isPlainObject';
import { isTypedArray } from './isTypedArray';
import { safeGet } from './_safeGet';
import { toPlainObject } from './toPlainObject';

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @param object The destination _object.
 * @param source The source _object.
 * @param key The key of the value to merge.
 * @param srcIndex The index of `source`.
 * @param mergeFunc The function to merge values.
 * @param customizer The function to customize assigned values.
 * @param stack Tracks traversed source values and their merged
 *  counterparts.
 */
export function baseMergeDeep(
  object: any,
  source: any,
  key: string,
  srcIndex: number,
  mergeFunc: Function,
  customizer?: Function,
  stack?: any
): void {
  const objValue = safeGet(object, key),
    srcValue = safeGet(source, key),
    stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  let newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;

  let isCommon = newValue === undefined;

  if (isCommon) {
    const isArr = isArray(srcValue),
      isBuff = !isArr && isBuffer(srcValue),
      isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
