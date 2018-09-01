/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { toString } from './to-string';

describe('toString', () => {
  it('should return string object', () => {
    expect(toString({})).toBe('');
  });

  it('should return string number', () => {
    expect(toString(123)).toBe('123');
  });

  it('should return date as empty string', () => {
    expect(toString(new Date()).length).toBeGreaterThan(0);
  });
});
