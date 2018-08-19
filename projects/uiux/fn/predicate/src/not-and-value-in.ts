/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { hasValueIn } from '@uiux/fn/object';

export function notAndValueIn(
  targetValue: any,
  targetKeys: string,
  srcValue: any,
  srcKeys: string
): boolean {
  return !hasValueIn(targetValue, targetKeys) && hasValueIn(srcValue, srcKeys);
}
