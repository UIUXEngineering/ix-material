/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { BehaviorValueSubject } from './behavior-value-subject';

describe('BehaviorValueSubject', () => {
  it('should not send value unless hasValue', () => {
    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject();

    sub.subscribe((r: any) => {
      expect(r).toBe('foo');
    });

    sub.next(null);
    sub.next(undefined);
    sub.next('');
    sub.next('foo');
  });

  it('can send defined value', () => {
    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject();

    let r: any;
    sub.subscribe((_r: any) => {
      r = _r;
    });

    sub.next(null);
    sub.next(undefined);
    sub.next('');

    expect(r).not.toBeDefined();

    sub.nextDefined('');

    expect(r).toBeDefined();
  });
});
