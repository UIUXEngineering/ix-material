/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isTruthyIn } from './is-truthy-in';

describe('Hoops', () => {
  let object: any | null;

  beforeEach(() => {
    object = {
      foo: {
        bar: {
          baz: 'test',
          bazNot: '',
          bum: ['foo'],
          bumNot: [],
          boo: true,
          booNot: false,
          bee: { foo: 'bar' },
          beeNot: {},
        },
      },
    };
  });

  afterEach(() => {
    object = null;
  });

  describe('isTruthyIn', function() {
    it('returns true with true boolean', function() {
      expect(isTruthyIn(object, 'foo.bar.boo')).toBeTruthy();
    });

    it('returns false with false boolean', function() {
      expect(isTruthyIn(object, 'foo.bar.booNot')).toBeFalsy();
    });

    it('returns true with filled string', function() {
      expect(isTruthyIn(object, 'foo.bar.baz')).toBeTruthy();
    });

    it('returns false with empty string', function() {
      expect(isTruthyIn(object, 'foo.bar.bazNot')).toBeFalsy();
    });

    it('returns true with filled array', function() {
      expect(isTruthyIn(object, 'foo.bar.bum')).toBeTruthy();
    });

    it('returns false with empty array', function() {
      expect(isTruthyIn(object, 'foo.bar.bumNot')).toBeFalsy();
    });

    it('returns true with true with object that has props', function() {
      expect(isTruthyIn(object, 'foo.bar.bee')).toBeTruthy();
    });

    it('returns false with false with object with no props', function() {
      expect(isTruthyIn(object, 'foo.bar.beeNot')).toBeFalsy();
    });

    it('returns false for null object', function() {
      const object2: any = null;
      expect(isTruthyIn(object2, 'foo.bar')).toEqual(false);
    });

    it('returns false for undefined object', function() {
      const object2: any = undefined;
      expect(isTruthyIn(object2, 'foo.bar')).toEqual(false);
    });

    it('returns false for undefined object', function() {
      const object2: any = null;
      expect(isTruthyIn(object2, 'foo.bar')).toEqual(false);
    });
  });
});
