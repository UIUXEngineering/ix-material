/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { AbstractControl } from '@angular/forms';

import { forbiddenWhitespaceValidator } from './forbidden-whitespace';

describe('forbiddenWhitespaceValidator', () => {
  const validatorFn = forbiddenWhitespaceValidator();

  it('spaces only are invalid', () => {
    const control = { value: '    ' };
    const result = validatorFn(control as AbstractControl);
    expect(result !== null).toBe(true);
  });

  it('should return true for trailing whitespace', () => {
    const control = { value: '123454 ' };
    const result = validatorFn(control as AbstractControl);
    expect(result !== null).toBe(true);
  });

  it('should return false with not trailing or leading whitespace', () => {
    const control = { value: '123454' };
    const result = validatorFn(control as AbstractControl);
    expect(result !== null).toBe(false);
  });

  it('should return false with whitespace in middle', () => {
    const control = { value: '123 454' };
    const result = validatorFn(control as AbstractControl);
    expect(result !== null).toBe(false);
  });

  it('should return true for leading whitespace', () => {
    const control = { value: ' 123454' };
    const result = validatorFn(control as AbstractControl);
    expect(result !== null).toBe(true);
  });

  it('should return true for leading and trailing whitespace', () => {
    const control = { value: ' 123454 ' };
    const result = validatorFn(control as AbstractControl);
    expect(result !== null).toBe(true);
  });

  it('should return true for trailing whitespace', () => {
    const control = { value: '123454 ' };
    const result = validatorFn(control as AbstractControl);
    expect(result !== null).toBe(true);
  });
});
