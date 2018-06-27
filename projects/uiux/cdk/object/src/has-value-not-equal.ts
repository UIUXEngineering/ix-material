/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { hasValue } from '@uiux/cdk/value';

export function hasValueNotEqual(targetValue: any, srcValue): boolean {
  if (hasValue(srcValue)) {
    return targetValue !== srcValue;
  } else {
    return false;
  }
}
