import { Stack } from './_Stack';
import { assignMergeValue } from './_assignMergeValue';
import { baseFor } from './_baseFor';
import { baseMergeDeep } from './_baseMergeDeep';
import { isObject } from './isObject';
import { keysIn } from './keysIn';
import { safeGet } from './_safeGet';

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @param object The destination object.
 * @param source The source object.
 * @param srcIndex The index of `source`.
 * @param customizer The function to customize merged values.
 * @param stack Tracks traversed source values and their merged
 *  counterparts.
 */
export function baseMerge(
  object: any,
  source: any,
  srcIndex: number,
  customizer?: Function,
  stack: any = new Stack()
): void {
  if (object === source) {
    return;
  }
  baseFor(
    source,
    function(srcValue, key) {
      if (isObject(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        let newValue = customizer
          ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack)
          : undefined;

        if (newValue === undefined) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    },
    keysIn
  );
}
