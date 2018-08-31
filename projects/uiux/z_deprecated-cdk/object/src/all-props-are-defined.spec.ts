/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { allPropsAreDefined } from './all-props-are-defined';

describe('allPropsAreDefined', () => {
  function isDefined(val: any): boolean {
    return val !== null && val !== undefined;
  }

  describe('object with multiple props', () => {
    it('should return false for object with false prop', () => {
      const obj: any = {
        foo: true,
        bar: false,
      };
      expect(allPropsAreDefined(obj)).toBeTruthy();
    });

    it('should be defined', () => {
      expect(isDefined('foo')).toBe(true);
    });

    it('should be undefined', () => {
      expect(isDefined(null)).toBe(false);
    });

    it('should be undefined', () => {
      const foo: any = undefined;
      expect(isDefined(foo)).toBe(false);
    });

    it('should return true for object with truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: true,
      };
      expect(allPropsAreDefined(obj)).toBeTruthy();
    });

    it('should return false for object with null prop', () => {
      const obj: any = {
        foo: true,
        bar: null,
      };
      expect(allPropsAreDefined(obj)).toBeFalsy();
    });

    it('should return false for object with undefined prop', () => {
      const obj: any = {
        foo: true,
        bar: undefined,
      };
      expect(allPropsAreDefined(obj)).toBeFalsy();
    });

    it('should return false for object with empty array', () => {
      const obj: any = {
        foo: true,
        bar: [],
      };
      expect(allPropsAreDefined(obj)).toBeTruthy();
    });

    it('should return true for object with filled array and truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: ['asdf'],
      };
      expect(allPropsAreDefined(obj)).toBeTruthy();
    });

    it('should return false for object with empty string', () => {
      const obj: any = {
        foo: true,
        bar: '',
      };
      expect(allPropsAreDefined(obj)).toBeTruthy();
    });

    it('should return false for object with empty array', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
      };
      expect(allPropsAreDefined(obj)).toBeTruthy();
    });

    it('should return true for all props defined and truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: { someKey: 'someValue' },
      };
      expect(allPropsAreDefined(obj)).toBeTruthy();
    });

    it('should return true for all props defined and falsey prop', () => {
      const obj: any = {
        foo: false,
        bar: 'asdf',
        baz: ['foo'],
        bum: { someKey: 'someValue' },
      };
      expect(allPropsAreDefined(obj)).toBeTruthy();
    });

    it('should return false for all props defined with empty string and array', () => {
      const obj: any = {
        foo: true,
        bar: '',
        baz: [],
        bum: { someKey: 'someValue' },
      };
      expect(allPropsAreDefined(obj)).toBeTruthy();
    });

    it('should return false for all props defined and empty object', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: {},
      };
      expect(allPropsAreDefined(obj)).toBeTruthy();
    });

    it('should return false for null prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: null,
      };
      expect(allPropsAreDefined(obj)).toBeFalsy();
    });

    it('should return false for undefined prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: undefined,
      };
      expect(allPropsAreDefined(obj)).toBeFalsy();
    });
  });

  describe('object', () => {
    it('should return false for empty object value', () => {
      expect(allPropsAreDefined({})).toBeFalsy();
    });

    it('should return false for empty object with no keys', () => {
      expect(allPropsAreDefined({})).toBeFalsy();
    });

    it('should return false for empty object with keys', () => {
      expect(allPropsAreDefined({})).toBeFalsy();
    });

    it('should return false for empty object with keys', () => {
      const obj: any = {
        foo: 'foo',
      };
      expect(allPropsAreDefined(obj)).toBeTruthy();
    });

    it('should return false for object with falsey prop', () => {
      const obj: any = {
        foo: false,
      };
      expect(allPropsAreDefined(obj)).toBeTruthy();
    });

    it('should return true for object with truthy prop', () => {
      const obj: any = {
        foo: true,
      };
      expect(allPropsAreDefined(obj)).toBeTruthy();
    });

    it('should return false for object with missing prop', () => {
      const obj: any = {
        foo: true,
      };
      expect(allPropsAreDefined(obj)).toBeTruthy();
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

      expect(allPropsAreDefined(obj, 'x')).toBe(true);
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

      expect(allPropsAreDefined(obj, 'x.y')).toBe(false);
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

      expect(allPropsAreDefined(obj, 'x.y')).toBe(false);
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

      expect(allPropsAreDefined(obj, 'x.y')).toBe(false);
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

      expect(allPropsAreDefined(obj, 'x.y')).toBe(false);
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

      expect(allPropsAreDefined(obj, 'x.y')).toBe(false);
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

      expect(allPropsAreDefined(obj, 'x.y')).toBe(false);
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
        allPropsAreDefined(obj, 'x.y', (val: any) => {
          return isDefined(val.call());
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
        return isDefined(val.call());
      };

      expect(allPropsAreDefined(obj, 'x.y', fn)).toBe(true);
    });

    it('should call function to return value subkeys', () => {
      const obj: any = {
        a: { x: { y: 'y' } },
      };

      const y = 'y';

      const fn: Function = (val: any) => {
        return val === y;
      };

      expect(allPropsAreDefined(obj, 'x.y', fn, this)).toBe(true);
    });

    it('should call function to return value subkeys', () => {
      const obj: any = {
        a: { x: { y: 'y' } },
      };

      const y = 'z';

      const fn: Function = (val: any) => {
        return val === y;
      };

      expect(allPropsAreDefined(obj, 'x.y', fn)).toBe(false);
    });

    it('should return false for multiple null values', () => {
      const obj: any = {
        currentSubProjects: null,
        desc: null,
        guid: 'project-b11bd37f-5954-43c2-865d-60e83041108d',
        name: null,
        subProjects: null,
        teamMembers: null,
        todo: null,
      };

      expect(allPropsAreDefined(obj)).toBe(false);
    });
  });

  describe('empty value', () => {
    it('should return false for empty object value', () => {
      expect(allPropsAreDefined({})).toBeFalsy();
    });

    it('should return false for null value', () => {
      expect(allPropsAreDefined(null)).toBeFalsy();
    });

    it('should return false for undefined value', () => {
      expect(allPropsAreDefined(undefined)).toBeFalsy();
    });

    it('should return false for empty string value', () => {
      expect(allPropsAreDefined('')).toBeFalsy();
    });

    it('should return false for empty string value', () => {
      expect(allPropsAreDefined([])).toBeFalsy();
    });
  });
});
