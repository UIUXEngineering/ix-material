/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { ternaryHasValue } from './ternaryHasValue';

describe('ternaryHasValue', () => {
  // tenary uses `hasValue` for truthy, so not
  // going to test every case of `hasValue`
  it('should return value if defined', () => {
    const _value: any = ternaryHasValue('foo', 'bar');
    expect(_value).toEqual('foo');
  });

  it('should return conditional value', () => {
    // uses `hasValue` evaluation
    const _value: any = ternaryHasValue([], 'bar');
    expect(_value).toEqual('bar');
  });
});
