/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isNumeric } from './is-numeric';

describe('isNumeric', () => {
  it('should return true when passing correct numeric string', () => {
    expect(isNumeric('2')).toBe(true);
  });

  it('should return true when passing correct double string', () => {
    expect(isNumeric('1.123')).toBe(true);
  });

  it('should return true when passing correct negative string', () => {
    expect(isNumeric('-2')).toBe(true);
  });

  it('should return true when passing correct scientific notation string', () => {
    expect(isNumeric('1e5')).toBe(true);
  });

  it('should return false when passing incorrect numeric', () => {
    expect(isNumeric('a')).toBe(false);
  });

  it('should return false when passing parseable but non numeric', () => {
    expect(isNumeric('2a')).toBe(false);
  });

  it('should return false when passing parseable but non ocatal', () => {
    expect(isNumeric('0x12345')).toBe(true);
  });
});
