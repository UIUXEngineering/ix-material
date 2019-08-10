/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { AbstractControl, ValidatorFn } from '@angular/forms';
import { startsOrEndsWithWhitespace } from '@uiux/fn';

export function forbiddenWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const str: string = control.value;

    if (str) {
      const no: boolean = startsOrEndsWithWhitespace(str);
      return no ? { forbiddenWhitespace: { str } } : null;
    }

    return null;
  };
}
