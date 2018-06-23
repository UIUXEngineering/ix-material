/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { propHasValueInAllPaths } from './prop-has-value-in-all-paths';

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

    expect(propHasValueInAllPaths(o, 'controls', 'dirty')).toBe(true);
  });

  it('should return true', () => {
    const o: any = {
      controls: {
        name: {
          dirty: true,
          pristine: false,
        },
        email: {
          dirty: null, // <-- no value
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

    expect(propHasValueInAllPaths(o, 'controls', 'dirty')).toBe(false);
  });
});
