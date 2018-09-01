/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { AbstractControl } from '@angular/forms';

import { limitStringLengthValidator } from './limit-string-length';

describe('limitStringLengthValidator', () => {
  it('string longer than allowance should be invalid', () => {
    const validatorFn = limitStringLengthValidator(0, 5);
    const control = { value: 'string_longer_than_5_chars' };
    const result = validatorFn(control as AbstractControl);
    expect(result !== null).toBe(true);
  });

  it('string shorter than allowance should be invalid', () => {
    const validatorFn = limitStringLengthValidator(100, 200);
    const control = { value: 'string_shorter_than_100_chars' };
    const result = validatorFn(control as AbstractControl);
    expect(result !== null).toBe(true);
  });

  it('string not longer or shorter than allowance should be valid', () => {
    const validatorFn = limitStringLengthValidator(3, 200);
    const control = { value: 'this_is_a_valid_string' };
    const result = validatorFn(control as AbstractControl);
    expect(result).toBe(null);
  });
});
