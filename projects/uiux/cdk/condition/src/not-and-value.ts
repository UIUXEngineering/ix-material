/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { hasValue } from '@uiux/cdk/object';

export function notAndValue(targetValue: any, srcValue): boolean {
  return !hasValue(targetValue) && hasValue(srcValue);
}
