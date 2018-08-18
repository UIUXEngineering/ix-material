/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { AbstractControl, ValidatorFn } from '@angular/forms';

export function limitStringLengthValidator(minLength: number, maxLength: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let isGreaterThanEqualToMinLength = true;
    let isLessThenEqualToMaxLength = true;
    const str = control.value;

    if (str) {
      if (minLength) {
        isGreaterThanEqualToMinLength = str.trim().length >= minLength;
      }

      if (maxLength) {
        isLessThenEqualToMaxLength = str.trim().length <= maxLength;
      }

      const pass = isGreaterThanEqualToMinLength && isLessThenEqualToMaxLength;
      return pass ? null : { limitStringLength: { str } };
    }

    return null;
  };
}
