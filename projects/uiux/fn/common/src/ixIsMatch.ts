/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { getIn } from './getIn';
import { hasValue } from './hasValue';
import { isMatch } from './isMatch';
import { isObject } from './isObject';
import { isScalar } from './isScalar';

export function ixIsMatch(src: any, mapCompare: any): boolean {
  let _isMatchTest = isObject(src) && isObject(mapCompare);

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
        } else if (
          !(_isMatchTest && hasValue(srcValue) && hasValue(cmpValue) && isMatch(srcValue, cmpValue))
        ) {
          _isMatchTest = false;
          break;
        }
      }
    }
  }

  return _isMatchTest;
}
