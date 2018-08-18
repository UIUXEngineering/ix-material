/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { notAndValue } from './not-and-value';

describe('notAndValue', () => {
  it('should be true for src false, target true', () => {
    const src: any = null;
    const tar: any = 'foo';
    expect(notAndValue(src, tar)).toBe(true);
  });

  it('should be false for src true, target true', () => {
    const src: any = 'foo';
    const tar: any = 'foo';
    expect(notAndValue(src, tar)).toBe(false);
  });

  it('should be false for src true, target false', () => {
    const src: any = 'foo';
    const tar: any = null;
    expect(notAndValue(src, tar)).toBe(false);
  });

  it('should be false for src false, target false', () => {
    const src: any = null;
    const tar: any = null;
    expect(notAndValue(src, tar)).toBe(false);
  });
});
