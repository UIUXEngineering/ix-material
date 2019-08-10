/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { toString } from './toString';

describe('toString', () => {
  it('should return _string _object', () => {
    expect(toString({})).toBe('');
  });

  it('should return _string _number', () => {
    expect(toString(123)).toBe('123');
  });

  it('should return _date as empty _string', () => {
    expect(toString(new Date()).length).toBeGreaterThan(0);
  });
});
