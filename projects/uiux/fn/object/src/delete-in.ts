import { isNumber } from '@uiux/fn/number';
import { hasValue } from '@uiux/fn/value';
import { getIn } from './get-in';
import { keySplitterIntoImmutablePath } from './key-converter';
import { setIn } from './set-in';

export function deleteIn(object: any, keys: string | string[] | null): any {
  if (keys && hasValue(keys)) {
    if (typeof keys === 'string') {
      keys = keySplitterIntoImmutablePath(keys);
    }

    const _lastProp: string = keys.pop();

    // lastProp is a nested prop
    if (keys.length) {
      // parent object
      const obj = getIn(object, keys);

      if (hasValue(obj)) {
        if (Array.isArray(obj) && isNumber(_lastProp)) {
          obj.splice(Number(_lastProp));
        } else {
          // remove last prop from parent object
          delete obj[_lastProp];
        }

        // place object back parent object
        // if obj is not empty after removing target node
        if (hasValue(obj)) {
          setIn(object, keys, obj);
        }
      }
    } else {
      // _lastProp is at the root level of the object,
      // just delete it.
      delete object[_lastProp];
    }
  }

  return object;
}
