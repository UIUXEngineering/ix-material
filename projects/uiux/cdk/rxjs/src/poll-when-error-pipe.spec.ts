/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { marbles } from 'rxjs-marbles';
import { IPollWhenErrorConfig, pollWhenErrorWithConfig } from './poll-when-error-pipe';

describe('poll-when-error', () => {
  it(
    'should not retry when receive data',
    marbles((m) => {
      const source = m.hot('--a--|');
      const subs = '^----!';
      const expected = m.cold('--a--|');

      const pollConfig: IPollWhenErrorConfig = {
        delay: m.time('--|'),
        take: 1,
        errorMsg: 'error',
      };

      const destination = source.pipe(pollWhenErrorWithConfig(pollConfig));

      m.expect(destination).toBeObservable(expected);
      m.expect(source).toHaveSubscriptions(subs);
    })
  );

  // it('should retry when receive error', marbles((m) => {
  //
  //   class MultiObservable extends Observable<any> {
  //     constructor(observables: Observable<any>[]) {
  //       let subscriptionIdx = 0;
  //       super((subscriber: Subscriber<any>) => {
  //         return observables[subscriptionIdx++].subscribe(subscriber);
  //       });
  //     }
  //   }
  //
  //   const testObservable = new MultiObservable([
  //     m.cold('#|'),
  //     m.cold('#|'),
  //     m.cold('a|')
  //   ]);
  //
  //   const expected = m.cold( 'a|');
  //
  //   const pollConfig: IPollWhenErrorConfig = {
  //     delay:  10,
  //     take:  3,
  //     errorMsg: 'error'
  //   };
  //
  //   const destination = testObservable.pipe(
  //     pollWhenErrorWithConfig(pollConfig),
  //   );
  //
  //   m.expect(destination).toBeObservable(expected);
  // }));
});
