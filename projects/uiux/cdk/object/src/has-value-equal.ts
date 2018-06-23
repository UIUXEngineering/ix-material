/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { hasValue } from './has-value';

export function hasValueEqual(targetValue: any, srcValue): boolean {
  if (hasValue(srcValue)) {
    return targetValue === srcValue;
  } else {
    return false;
  }
}
