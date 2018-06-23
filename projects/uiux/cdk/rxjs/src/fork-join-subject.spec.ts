/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { ForkJoinSubject } from './fork-join-subject';

describe('ForkJoinSubject', () => {
  it('should not publish until all propsHaveValue', () => {
    const complete = jasmine.createSpy('complete');

    const i: any = {
      a: null,
      b: null,
      c: null,
    };

    const s: ForkJoinSubject<any> = new ForkJoinSubject<any>(i);

    s.subscribe(
      (r: any) => {
        expect(r).toEqual({
          a: 'foo',
          b: 'bar',
          c: 'baz',
        });
      },
      () => {
        /* noop */
      },
      () => {
        complete();
      }
    );

    s.nextKey('a', 'foo');
    s.nextKey('b', 'bar');
    s.nextKey('c', 'baz');

    expect(complete.calls.count()).toBe(1);
  });

  it('should merge objects', () => {
    const i: any = {
      a: null,
      b: null,
      c: null,
      d: null,
    };

    const s: ForkJoinSubject<any> = new ForkJoinSubject<any>(i);

    s.subscribe((r: any) => {
      expect(r).toEqual({
        a: 'foo',
        b: 'bar',
        c: 'baz',
        d: 'bum',
      });
    });

    s.nextKey('a', 'foo');
    s.nextKey('b', 'bar');
    s.mergeValue({
      c: 'baz',
      d: 'bum',
    });
  });
});
