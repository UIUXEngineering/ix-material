/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { hasValue } from '@uiux/fn/value';

export function notAndValue(targetValue: any, srcValue): boolean {
  return !hasValue(targetValue) && hasValue(srcValue);
}
