import { isFunction } from '@uiux/fn/common';
import { IxD3Margin, IxD3MarginFn } from './_interfaces';
import { ixD3Margin, ixD3MarginFn } from './margin';

describe('ixD3Margin', () => {
  it('should create margin object', () => {
    const result: IxD3Margin = ixD3Margin(30);
    expect(result).toEqual({ top: 30, right: 30, bottom: 30, left: 30 });
  });

  it('should return function identity', () => {
    const fn: IxD3MarginFn = ixD3MarginFn(40);
    expect(isFunction(fn)).toBe(true);
    expect(fn()).toEqual({ top: 40, right: 40, bottom: 40, left: 40 });
  });
});
