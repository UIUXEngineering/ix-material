/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { _throw } from 'rxjs';
import { marbles } from 'rxjs-marbles';
import { timeoutWith } from 'rxjs/operators';
import { defer } from 'rxjs';

import { IPollForValueConfig, pollForValueWithConfig } from './poll-for-value-pipe';

describe('poll-for-value', () => {
  it(
    'should learn to test timeoutWith deferred',
    marbles((m) => {
      const e1 = m.cold('-------a--b--|');
      const e1subs = '^    !        ';
      const expected = '-----#';
      const result = e1.pipe(
        timeoutWith(
          m.time('-----|'),
          defer(() => {
            return _throw(new Error('Custom Error'));
          }),
          m.scheduler
        )
      );

      m.expect(result).toBeObservable(expected, undefined, {
        name: 'Error',
        message: 'Custom Error',
      });
      m.expect(e1).toHaveSubscriptions(e1subs);
    })
  );

  it(
    'should learn to test timeoutWith',
    marbles((m) => {
      const e1 = m.cold('-------a--b--|');
      const e1subs = '^    !        ';
      const e2 = m.cold('x-y-z-|  ');
      const e2subs = '-----^-----!---';
      const expected = '-----x-y-z-|  ';
      const result = e1.pipe(timeoutWith(m.time('-----|'), e2, m.scheduler));
      m.expect(result).toBeObservable(expected);
      m.expect(e1).toHaveSubscriptions(e1subs);
      m.expect(e2).toHaveSubscriptions(e2subs);
    })
  );

  it(
    'should return matched value',
    marbles((m) => {
      const values = {
        a: 1,
        b: 2,
        c: 3,
      };

      const source = m.hot('--a--b--c--|', values);
      const subs = '^-----------';
      const expected = m.cold('--------c---', values);

      const pollConfig: IPollForValueConfig = {
        delay: m.time('--|'),
        interval: m.time('--|'),
        timeout: m.time('--------|'),
        sourceObservable: () => source,

        // find value on global object, or global object itself
        compare: (value: any) => {
          return value > 2;
        },
        errorMsg: 'error',
      };

      const destination = source.pipe(pollForValueWithConfig(pollConfig));

      m.expect(destination).toBeObservable(expected);
      m.expect(source).toHaveSubscriptions(subs);
    })
  );

  it(
    'should return error',
    marbles((m) => {
      const values = {
        a: 1,
        b: 2,
        c: 3,
      };

      const source = m.hot('--a--b--c--------|', values);
      const subs = '^  !        ';
      const expected = '---#';

      const pollConfig: IPollForValueConfig = {
        delay: m.time('--|'),
        interval: m.time('-|'),
        timeout: m.time('-|'),
        sourceObservable: () => source,

        // find value on global object, or global object itself
        compare: (value: any) => {
          return value > 3;
        },
        errorMsg: 'Foo Error',
        schedular: m.scheduler,
      };

      const destination = source.pipe(pollForValueWithConfig(pollConfig));

      m.expect(destination).toBeObservable(expected, undefined, {
        name: 'Error',
        message: 'Foo Error',
      });
      m.expect(source).toHaveSubscriptions(subs);
    })
  );
});
