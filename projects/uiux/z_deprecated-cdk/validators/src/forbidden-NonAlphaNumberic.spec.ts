/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { AbstractControl } from '@angular/forms';

import { forbiddentNonAlphaNumericValidator } from './forbidden-NonAlphaNumeric';

describe('forbiddentNonAlphaNumericValidator', () => {
  const validatorFn = forbiddentNonAlphaNumericValidator();

  it('special characters are invalid', () => {
    const control = { value: '12-34*' };
    const result = validatorFn(control as AbstractControl);
    expect(result !== null).toBe(true);
  });

  it('number and letter are considered valid', () => {
    const control = { value: 'abc123AHU835' };
    const result = validatorFn(control as AbstractControl);
    expect(result).toBe(null);
  });
});
