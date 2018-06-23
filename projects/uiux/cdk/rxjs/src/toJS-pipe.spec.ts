/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { fromJS } from 'immutable';
import { Subject } from 'rxjs/Subject';
import { toJSPipe } from './toJS-pipe';

describe('toJSPipe', () => {
  it('should de-immutify', () => {
    const object: any = {
      a: {
        b: { c: { d: { e: 'foo' } } },
        f: { g: { h: { i: 'bar' } } },
      },
    };

    const i: any = fromJS(object);
    const s: Subject<any> = new Subject();

    let r: any;
    s.pipe(toJSPipe()).subscribe((_r: any) => {
      r = _r;
    });

    s.next(i);

    expect(r).not.toEqual(i);
    expect(r).toEqual(object);
  });
});
