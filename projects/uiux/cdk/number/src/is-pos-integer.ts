/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { isInteger } from './is-integer';
import { convertToNumber } from './_internal';

export function isPostiveInteger(value: any) {
  const _value: number = convertToNumber(value);
  return isInteger(_value) && _value > 0;
}
