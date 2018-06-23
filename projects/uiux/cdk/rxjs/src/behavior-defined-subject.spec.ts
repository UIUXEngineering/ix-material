/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { BehaviorDefinedSubject } from './behavior-defined-subject';

describe('BehaviorDefinedSubject', () => {
  it('should not send value unless isDefined', () => {
    const sub: BehaviorDefinedSubject<any> = new BehaviorDefinedSubject();

    sub.subscribe((r: any) => {
      expect(r).toBe('');
    });

    sub.next(null);
    sub.next(undefined);
    sub.next('');
  });
});
