/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { getIn } from './get-in';
import { hasValueNotEqual } from '@uiux/fn/value';

export function hasValueNotEqualIn(
  targetValue: any,
  targetKeys: string,
  srcValue: any,
  srcKeys: string
): boolean {
  const _target: any = getIn(targetValue, targetKeys);
  const _src: any = getIn(srcValue, srcKeys);
  return hasValueNotEqual(_target, _src);
}
