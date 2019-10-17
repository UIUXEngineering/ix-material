/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { getIn } from './get-in';
import { hasValueEqual } from '@uiux/cdk/value';

export function hasValueEqualIn(targetValue: any, targetKeys: string, srcValue: any, srcKeys: string): boolean {
  const _target: any = getIn(targetValue, targetKeys);
  const _src: any = getIn(srcValue, srcKeys);
  return hasValueEqual(_target, _src);
}
