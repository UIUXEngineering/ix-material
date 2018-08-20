import { DataView } from './data-view';
import { Map } from './map';
import { Promise } from './promise';
import { Set } from './set';
import { WeakMap } from './weak-map';
import { baseGetTag } from './base-get-tag';
import { toSource } from './to-source';

/** `Object#toString` result references. */
const mapTag = '[object Map]',
  objectTag = '[object Object]',
  promiseTag = '[object Promise]',
  setTag = '[object Set]',
  weakMapTag = '[object WeakMap]';

const dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
const dataViewCtorString = toSource(DataView),
  mapCtorString = toSource(Map),
  promiseCtorString = toSource(Promise),
  setCtorString = toSource(Set),
  weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
let getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node < 6.
if (
  (DataView && getTag(new DataView(new ArrayBuffer(1))) !== dataViewTag) ||
  (Map && getTag(new Map()) !== mapTag) ||
  (Promise && getTag(Promise.resolve()) !== promiseTag) ||
  (Set && getTag(new Set()) !== setTag) ||
  (WeakMap && getTag(new WeakMap()) !== weakMapTag)
) {
  getTag = function(value) {
    const result = baseGetTag(value),
      Ctor = result === objectTag ? value.constructor : undefined,
      ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

export { getTag };
