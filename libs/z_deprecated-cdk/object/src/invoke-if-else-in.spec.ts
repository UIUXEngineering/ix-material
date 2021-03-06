/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { invokeIfElseIn } from './invoke-if-else-in';

describe('invokeIfIn', () => {
  let test: any;

  beforeEach(() => {
    test = {
      a: {
        b: {
          c: 'foo',
          d: [],
        },
      },
    };
  });

  afterEach(() => {
    test = null;
  });

  it('should invoke function if value is valid with hasValue', () => {
    let _value: any;

    const invokee: Function = function(_result: any) {
      _value = _result;
    };

    invokeIfElseIn(test, 'a.b.c', 'bar', invokee);

    expect(_value).toEqual('foo');
  });

  it('should  invoke function with else value if value is not valid with hasValue', () => {
    let _value: any;

    const invokee: Function = function(_result: any) {
      _value = _result;
    };

    invokeIfElseIn(test, 'a.b.e', 'bar', invokee);

    expect(_value).toEqual('bar');
  });

  it('should  invoke function with else value if value is not valid with hasValue', () => {
    let _value: any;

    const invokee: Function = function(_result: any) {
      _value = _result;
    };

    invokeIfElseIn(test, 'a.b.d', 'bar', invokee);

    expect(_value).toEqual('bar');
  });

  it('should invoke inside of class with valid value', () => {
    class TestInvoke {
      value: any;

      constructor(testInject: any) {
        // 'this' is required to pass context of class
        invokeIfElseIn(testInject, 'a.b.c', 'bar', this.invokee, this);
      }

      invokee(_result): void {
        this.setValue(_result);
      }

      // testing context of method calls
      setValue(_value): void {
        this.value = _value;
      }
    }

    const testObject = new TestInvoke(test);

    expect(testObject.value).toEqual('foo');
  });

  it('should not invoke inside of class with valid value', () => {
    class TestInvoke {
      value: any;

      constructor(testInject: any) {
        // 'this' is required to pass context of class
        invokeIfElseIn(testInject, 'a.b.d', 'bar', this.invokee, this);
      }

      invokee(_result): void {
        this.setValue(_result);
      }

      // testing context of method calls
      setValue(_value): void {
        this.value = _value;
      }
    }

    const testObject = new TestInvoke(test);

    expect(testObject.value).toEqual('bar');
  });
});
