/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { allPropsHaveValue } from './all-props-have-value';
import { hasValue } from './has-value';

describe('propsHaveValue', () => {
  beforeEach(() => {});

  afterEach(() => {});

  describe('object with multiple props', () => {
    it('should return false for object with false prop', () => {
      const obj: any = {
        foo: true,
        bar: false,
      };
      expect(allPropsHaveValue(obj)).toBeTruthy();
    });

    it('should return true for object with truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: true,
      };
      expect(allPropsHaveValue(obj)).toBeTruthy();
    });

    it('should return true for object with null prop', () => {
      const obj: any = {
        foo: true,
        bar: null,
      };
      expect(allPropsHaveValue(obj)).toBeFalsy();
    });

    it('should return true for object with undefined prop', () => {
      const obj: any = {
        foo: true,
        bar: undefined,
      };
      expect(allPropsHaveValue(obj)).toBeFalsy();
    });

    it('should return false for object with empty array', () => {
      const obj: any = {
        foo: true,
        bar: [],
      };
      expect(allPropsHaveValue(obj)).toBeFalsy();
    });

    it('should return true for object with filled array and truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: ['asdf'],
      };
      expect(allPropsHaveValue(obj)).toBeTruthy();
    });

    it('should return false for object with empty string', () => {
      const obj: any = {
        foo: true,
        bar: '',
      };
      expect(allPropsHaveValue(obj)).toBeFalsy();
    });

    it('should return false for object with empty array', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
      };
      expect(allPropsHaveValue(obj)).toBeTruthy();
    });

    it('should return true for all props defined and truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: { someKey: 'someValue' },
      };
      expect(allPropsHaveValue(obj)).toBeTruthy();
    });

    it('should return true for all props defined and falsey prop', () => {
      const obj: any = {
        foo: false,
        bar: 'asdf',
        baz: ['foo'],
        bum: { someKey: 'someValue' },
      };
      expect(allPropsHaveValue(obj)).toBeTruthy();
    });

    it('should return false for all props defined with empty string and array', () => {
      const obj: any = {
        foo: true,
        bar: '',
        baz: [],
        bum: { someKey: 'someValue' },
      };
      expect(allPropsHaveValue(obj)).toBeFalsy();
    });

    it('should return false for all props defined and empty object', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: {},
      };
      expect(allPropsHaveValue(obj)).toBeFalsy();
    });

    it('should return false for null prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: null,
      };
      expect(allPropsHaveValue(obj)).toBeFalsy();
    });

    it('should return false for undefined prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: undefined,
      };
      expect(allPropsHaveValue(obj)).toBeFalsy();
    });
  });

  describe('object', () => {
    it('should return false for empty object value', () => {
      expect(allPropsHaveValue({})).toBeFalsy();
    });

    it('should return false for empty object with no keys', () => {
      expect(allPropsHaveValue({})).toBeFalsy();
    });

    it('should return false for empty object with keys', () => {
      expect(allPropsHaveValue({})).toBeFalsy();
    });

    it('should return false for empty object with keys', () => {
      const obj: any = {
        foo: 'foo',
      };
      expect(allPropsHaveValue(obj)).toBeTruthy();
    });

    it('should return false for object with falsey prop', () => {
      const obj: any = {
        foo: false,
      };
      expect(allPropsHaveValue(obj)).toBeTruthy();
    });

    it('should return true for object with truthy prop', () => {
      const obj: any = {
        foo: true,
      };
      expect(allPropsHaveValue(obj)).toBeTruthy();
    });

    it('should return false for object with missing prop', () => {
      const obj: any = {
        foo: true,
      };
      expect(allPropsHaveValue(obj)).toBeTruthy();
    });
  });

  describe('subKey', () => {
    it('should have value for all subkeys', () => {
      const obj: any = {
        a: { x: { y: 'z' } },
        b: { x: ['y'] },
        c: { x: 0 },
        d: { x: true },
        e: { x: false },
        g: { x: 'y' },
        h: {
          x: () => {
            return 'z';
          },
        },
      };

      expect(allPropsHaveValue(obj, 'x')).toBe(true);
    });

    it('should be false for empty object subkeys', () => {
      const obj: any = {
        a: { x: { y: {} } }, // false
        b: { x: { y: ['y'] } },
        c: { x: { Y: 0 } },
        d: { x: { Y: true } },
        e: { x: { y: false } },
        g: { x: { y: 'y' } },
        h: {
          x: {
            y: () => {
              return 'z';
            },
          },
        },
      };

      expect(allPropsHaveValue(obj, 'x.y')).toBe(false);
    });

    it('should be false for empty object subkeys', () => {
      const obj: any = {
        a: { x: { y: { y: 'z' } } },
        b: { x: { y: ['y'] } },
        c: { x: { Y: null } }, // false
        g: { x: { y: 'y' } },
        h: {
          x: {
            y: () => {
              return 'z';
            },
          },
        },
      };

      expect(allPropsHaveValue(obj, 'x.y')).toBe(false);
    });

    it('should be false for empty object subkeys', () => {
      const obj: any = {
        a: { x: { y: { y: 'z' } } },
        b: { x: { y: ['y'] } },
        c: { x: { Y: true } },
        g: { x: { y: '' } }, // false
        h: {
          x: {
            y: () => {
              return 'z';
            },
          },
        },
      };

      expect(allPropsHaveValue(obj, 'x.y')).toBe(false);
    });

    it('should be false for function returning false value', () => {
      const obj: any = {
        a: { x: { y: { y: 'z' } } },
        b: { x: { y: ['y'] } },
        c: { x: { Y: true } },
        g: { x: { y: 'z' } },
        h: {
          x: {
            y: () => {
              return [];
            },
          },
        }, // false
      };

      expect(allPropsHaveValue(obj, 'x.y')).toBe(false);
    });

    it('should be true for function returning true value', () => {
      const obj: any = {
        a: { x: { y: { y: 'z' } } },
        b: { x: { y: ['y'] } },
        c: { x: { Y: true } },
        g: { x: { y: 'z' } },
        h: {
          x: {
            y: () => {
              return [0];
            },
          },
        },
      };

      expect(allPropsHaveValue(obj, 'x.y')).toBe(false);
    });

    it('should be false for empty object subkeys', () => {
      const obj: any = {
        a: { x: { y: { y: 'z' } } },
        b: { x: { y: [] } }, // false
        c: { x: { Y: 0 } },
        d: { x: { Y: true } },
        e: { x: { y: false } },
        g: { x: { y: 'y' } },
        h: {
          x: {
            y: () => {
              return 'z';
            },
          },
        },
      };

      expect(allPropsHaveValue(obj, 'x.y')).toBe(false);
    });
  });

  describe('functions', () => {
    it('should call function to return value subkeys', () => {
      const obj: any = {
        a: {
          x: {
            y: () => {
              return 'z';
            },
          },
        },
        b: {
          x: {
            y: () => {
              return ['z'];
            },
          },
        },
        c: {
          x: {
            y: () => {
              return { Y: 0 };
            },
          },
        },
        d: {
          x: {
            y: () => {
              return { Y: true };
            },
          },
        },
        e: {
          x: {
            y: () => {
              return { Y: false };
            },
          },
        },
        g: {
          x: {
            y: () => {
              return { y: 'y' };
            },
          },
        },
      };

      expect(
        allPropsHaveValue(obj, 'x.y', (val: any) => {
          return hasValue(val.call());
        })
      ).toBe(true);
    });

    it('should call function to return value subkeys', () => {
      const obj: any = {
        a: {
          x: {
            y: () => {
              return 'z';
            },
          },
        },
        b: {
          x: {
            y: () => {
              return [];
            },
          },
        }, // false
        c: {
          x: {
            y: () => {
              return { Y: 0 };
            },
          },
        },
        d: {
          x: {
            y: () => {
              return { Y: true };
            },
          },
        },
        e: {
          x: {
            y: () => {
              return { Y: false };
            },
          },
        },
        g: {
          x: {
            y: () => {
              return { y: 'y' };
            },
          },
        },
      };

      const fn: Function = (val: any) => {
        return hasValue(val.call());
      };

      expect(allPropsHaveValue(obj, 'x.y', fn)).toBe(false);
    });

    it('should call function to return value subkeys', () => {
      const obj: any = {
        a: { x: { y: 'y' } },
      };

      const y = 'y';

      const fn: Function = (val: any) => {
        return val === y;
      };

      expect(allPropsHaveValue(obj, 'x.y', fn)).toBe(true);
    });

    it('should call function to return value subkeys', () => {
      const obj: any = {
        a: { x: { y: 'y' } },
      };

      const y = 'z';

      const fn: Function = (val: any) => {
        return val === y;
      };

      expect(allPropsHaveValue(obj, 'x.y', fn)).toBe(false);
    });
  });

  describe('empty value', () => {
    it('should return false for empty object value', () => {
      expect(allPropsHaveValue({})).toBeFalsy();
    });

    it('should return false for null value', () => {
      expect(allPropsHaveValue(null)).toBeFalsy();
    });

    it('should return false for undefined value', () => {
      expect(allPropsHaveValue(undefined)).toBeFalsy();
    });

    it('should return false for empty string value', () => {
      expect(allPropsHaveValue('')).toBeFalsy();
    });

    it('should return false for empty string value', () => {
      expect(allPropsHaveValue([])).toBeFalsy();
    });
  });
});
