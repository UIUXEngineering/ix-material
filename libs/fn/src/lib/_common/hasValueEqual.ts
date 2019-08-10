/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { hasValue } from './hasValue';

export function hasValueEqual(targetValue: any, srcValue): boolean {
  if (hasValue(srcValue)) {
    return targetValue === srcValue;
  } else {
    return false;
  }
}
