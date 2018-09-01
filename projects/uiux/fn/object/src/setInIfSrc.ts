/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { setIn, hasValue, ternaryIn } from '@uiux/fn/common';

/**
 * Sets the nested key to the provided value only if the property exists.
 *
 * If you have for example:
 * if (target && target.prop && target.prop.prop2 {
 *    target.prop.prop2 = someValue;
 * }
 *
 * Then you can use:
 * setInIfSrc(target, 'prop.prop2', someValue);
 *
 */
export function setInIfSrc(
  srcObject: any,
  srcKeys: string | string[],
  targetObject: any,
  targetKeys: string | string[],
  defaultValue?: any
): void {
  const _value: any = ternaryIn(srcObject, srcKeys, defaultValue);

  // if defaultValue is used, validate it
  if (hasValue(_value)) {
    setIn(targetObject, targetKeys, _value);
  }
}
