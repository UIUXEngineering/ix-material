
import {
  isNumber,
  hasValue,
  getIn,
  setIn,
  isString,
  isArray,
  isLength,
  clone
} from '@uiux/fn/common';
import { keySplitterIntoImmutablePath } from './keyConverter';

function deleteNode(object: any, path: string): any {
  const _path: string[] = keySplitterIntoImmutablePath(path);

  const _lastProp: string = _path.pop();

  // lastProp is a nested prop
  if (isLength(_path.length) && _path.length) {
    // parent object
    const obj = getIn(object, _path);

    if (hasValue(obj)) {
      if (isArray(obj) && isNumber(_lastProp)) {
        obj.splice(Number(_lastProp));
      } else {
        // remove last prop from parent object
        delete obj[_lastProp];
      }

      // place parent object back in tree
      // if obj is not empty after removing target node
      if (hasValue(obj)) {
        setIn(object, _path, obj);
      }
    }
  } else {
    // _lastProp is at the root level of the object,
    // just delete it.
    delete object[_lastProp];
  }

  return object;
}

/**
 * @param object to be mutated
 * @param path must be in dot notation: 'a.b.c' or [ 'a.b.c', 'a.d[0]' ]
 */
export function deleteIn(object: any, path: string | string[]): any {
  if ((path === undefined || path === null)) {
    throw new Error('deleteIn: object path must have a value.');
  }

  if (isArray(path)) {
    return (<string[]>path)
      .reduce((_obj: any, _path: string) => {
        return deleteNode(_obj, _path);
      }, clone(object));
  } else {
    return  deleteNode(clone(object), <string>path);
  }

}
