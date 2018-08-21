import { getIn, isDefined, isEmpty, isFunction, isPlainObject, isString } from '@uiux/fn/common';
import { predicateFn } from './_interfaces';

export function allValuesDefined(
  object: any,
  keyOrFn?: string | Function,
  fn?: predicateFn,
  context?: any
): boolean {
  if (isPlainObject(object)) {
    if (!isEmpty(object)) {
      const _keyOrFnIsString = isString(keyOrFn);
      const _keyOrFnIsFunction = isFunction(keyOrFn);
      const _fnIsFn = isFunction(fn);

      return Object.keys(object).reduce((_allValuesDefined: boolean, _key: string) => {
        if (!_allValuesDefined) {
          return _allValuesDefined;
        }

        const _value: any = object[_key];
        if (_keyOrFnIsString && _fnIsFn) {
          const _tmpValue: any = getIn(_value, <string>keyOrFn);
          // comparator function
          _allValuesDefined = fn.call(context || null, _tmpValue);
        } else if (_keyOrFnIsString) {
          const _tmpValue: any = getIn(_value, <string>keyOrFn);
          _allValuesDefined = isDefined(_tmpValue);
        } else if (_keyOrFnIsFunction) {
          const _tmpValue: any = (<Function>keyOrFn).call(context || null, _value);
          _allValuesDefined = isDefined(_tmpValue);
        } else {
          _allValuesDefined = isDefined(_value);
        }
        return _allValuesDefined;
      }, true);
    } else {
      // object is empty
      return false;
    }
  } else {
    // not isPlainObject
    return false;
  }
}
