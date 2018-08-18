/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { upSetInIfSrc } from './upset-in-if-src';

describe('upSetInIfSrc', () => {
  let src: any = {};

  beforeEach(() => {
    src = {
      a: {
        b: [
          {
            c: {},
          },
        ],
      },
    };
  });

  afterEach(() => {
    src = null;
  });

  it('should not set value if source does not have value', () => {
    const target: any = {
      x: {
        y: null,
      },
    };

    expect(target.x.y).toBeNull();

    upSetInIfSrc(src, 'a.b[0].c', target, 'x.y');

    expect(target.x.y).toBeNull();
  });

  it('should set value with default value if source does not have value', () => {
    const target: any = {
      x: {
        y: null,
      },
    };

    expect(target.x.y).toBeNull();

    // source does not exist
    upSetInIfSrc(src, 'a.b[0].c', target, 'x.y', 'foo');

    expect(target.x.y).toEqual('foo');
  });
});
