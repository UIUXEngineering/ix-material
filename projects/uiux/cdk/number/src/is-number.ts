/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

export function isNumber(value: any): boolean {
  return !isNaN(value - parseFloat(value));
}
