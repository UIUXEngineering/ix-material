/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { propTruthyInAllPaths } from './prop-truthy-in-all-paths';

describe('propTruthyInAllPaths', () => {
  it('should return false', () => {
    const o: any = {
      controls: {
        name: {
          dirty: false,
          pristine: true,
        },
        email: {
          dirty: false,
          pristine: true,
        },
        password: {
          dirty: false,
          pristine: true,
        },
        verifyPassword: {
          dirty: false,
          pristine: true,
        },
      },
    };

    expect(propTruthyInAllPaths(o, 'controls', 'dirty')).toBe(false);
  });

  it('should return true', () => {
    const o: any = {
      controls: {
        name: {
          dirty: true,
          pristine: false,
        },
        email: {
          dirty: true,
          pristine: false,
        },
        password: {
          dirty: true,
          pristine: false,
        },
        verifyPassword: {
          dirty: true,
          pristine: false,
        },
      },
    };

    expect(propTruthyInAllPaths(o, 'controls', 'dirty')).toBe(true);
  });

  it('should return false if one value is false', () => {
    const o: any = {
      controls: {
        name: {
          dirty: true,
          pristine: false,
        },
        email: {
          dirty: false,
          pristine: false,
        },
        password: {
          dirty: true,
          pristine: false,
        },
        verifyPassword: {
          dirty: true,
          pristine: false,
        },
      },
    };

    expect(propTruthyInAllPaths(o, 'controls', 'dirty')).toBe(false);
  });
});
