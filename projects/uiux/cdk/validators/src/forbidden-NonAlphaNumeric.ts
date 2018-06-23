/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { AbstractControl, ValidatorFn } from '@angular/forms';

const validCharacters = /^[0-9a-zA-Z]+$/;

export function forbiddentNonAlphaNumericValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const str = control.value;

    if (str) {
      const isInValid = !isAlphaNumeric(str);
      return isInValid ? { invalidCharacters: { str } } : null;
    }

    return null;
  };
}

export function isAlphaNumeric(str: string) {
  return str.match(validCharacters);
}
