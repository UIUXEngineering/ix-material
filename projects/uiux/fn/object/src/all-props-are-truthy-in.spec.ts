/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { allPropsAreTruthyIn } from './all-props-are-truthy-in';

describe('Hoops', () => {
  let object: any | null;
  let object2: any | null;

  beforeEach(() => {
    object = {
      foo: {
        bar: {
          baz: 'test',
          bum: ['foo'],
          boo: true,
          bee: { foo: 'bar' },
        },
        baz: {
          bazNot: '',
          bumNot: [],
          booNot: false,
          beeNot: {},
        },
      },
    };

    object2 = {
      foo: {
        bar: {
          baz1: {
            one: 1,
            bum: 'foo',
          },
          baz2: {
            one: 0,
            bum: 'foo',
          },
          baz3: {
            one: '1',
            bum: 'foo',
          },
          baz4: {
            one: '0',
            bum: 'foo',
          },
        },
      },
    };
  });

  afterEach(() => {
    object = null;
    object2 = null;
  });

  describe('allPropsAreTruthyIn', function() {
    it('returns true', function() {
      expect(allPropsAreTruthyIn(object, 'foo.bar')).toBeTruthy();
    });

    it('returns false', function() {
      expect(allPropsAreTruthyIn(object, 'foo.baz')).toBeFalsy();
    });

    it('returns true with number 1', function() {
      expect(allPropsAreTruthyIn(object2, 'foo.bar.baz1')).toBeTruthy();
    });

    it('returns false with number 0', function() {
      expect(allPropsAreTruthyIn(object2, 'foo.bar.baz2')).toBeFalsy();
    });

    it('returns true with string 1', function() {
      expect(allPropsAreTruthyIn(object2, 'foo.bar.baz3')).toBeTruthy();
    });

    it('returns false with string 0', function() {
      expect(allPropsAreTruthyIn(object2, 'foo.bar.baz4')).toBeFalsy();
    });

    it('returns false for null object', function() {
      const object3: any = null;
      expect(allPropsAreTruthyIn(object3, 'foo.bar')).toEqual(false);
    });

    it('returns false for undefined object', function() {
      const object4: any = undefined;
      expect(allPropsAreTruthyIn(object4, 'foo.bar')).toEqual(false);
    });
  });
});
