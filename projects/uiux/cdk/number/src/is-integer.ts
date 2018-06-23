/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isNumeric } from './is-numeric';
import { convertToNumber } from './_internal';

export function isInteger(value: string | number): boolean {
  const _value: number = convertToNumber(value);

  return isNumeric(_value) && isFinite(_value) && Math.floor(_value) === _value;
}
