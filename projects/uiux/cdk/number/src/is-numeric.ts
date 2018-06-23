/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

export function isNumeric(value: any): boolean {
  return !isNaN(value - parseFloat(value));
}
