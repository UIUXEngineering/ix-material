/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { ternaryHasValueIn } from './ternaryHasValueIn';

describe('ternaryHasValueIn', () => {
  let test: any;
  beforeEach(() => {
    test = {
      a: {
        b: [
          {
            c: 'foo',
          },
        ],
        d: null,
      },
    };
  });

  afterEach(() => {
    test = null;
  });

  // tenary uses `hasValue` for truthy, so not
  // going to test every case of `hasValue`
  it('should return value if defined', () => {
    const _value: any = ternaryHasValueIn(test, 'a.b[0].c', 'bar');
    expect(_value).toEqual('foo');
  });

  it('should return conditional value for !hasValue key as null', () => {
    // uses `hasValue` evaluation
    const _value: any = ternaryHasValueIn(test, 'a.d', 'bar');
    expect(_value).toEqual('bar');
  });

  it('should return conditional value for !hasValue key as no exist', () => {
    // uses `hasValue` evaluation
    const _value: any = ternaryHasValueIn(test, 'a.z', 'bar');
    expect(_value).toEqual('bar');
  });
});
