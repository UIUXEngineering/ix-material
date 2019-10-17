/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { getIn } from './get-in';
import { hasValue } from '@uiux/cdk/value';
import { default as _isMatch } from 'lodash-es/isMatch';
import { default as _isObject } from 'lodash-es/isObject';
import { isScalar } from '@uiux/cdk/value';

export function isMatch(src, mapCompare): boolean {
  let _isMatchTest = _isObject(src) && _isObject(mapCompare);

  if (_isMatchTest) {
    for (const prop in mapCompare) {
      if (mapCompare.hasOwnProperty(prop)) {
        const srcValue: any = getIn(src, prop);
        const cmpValue: any = mapCompare[prop];

        // bool values does not work with lodash isMatch

        if (isScalar(srcValue) && isScalar(cmpValue)) {
          if (!(_isMatchTest && srcValue === cmpValue)) {
            _isMatchTest = false;
            break;
          }
        } else if (!(_isMatchTest && hasValue(srcValue) && hasValue(cmpValue) && _isMatch(srcValue, cmpValue))) {
          _isMatchTest = false;
          break;
        }
      }
    }
  }

  return _isMatchTest;
}
