/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { hasValue } from '@uiux/cdk/value';

/**
 * if a value `hasValue` then return that value,
 * else return a conditional value.
 */
export function ternary(ifHasValue: any, elseValue): any {
  return hasValue(ifHasValue) ? ifHasValue : elseValue;
}
