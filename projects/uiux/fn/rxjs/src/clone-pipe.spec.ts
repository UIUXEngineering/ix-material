/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { Subject } from 'rxjs/Subject';
import { clonePipe } from './clone-pipe';

describe('clonePipe', () => {
  it('should clone', () => {
    const object: any = {
      a: {
        b: { c: { d: { e: 'foo' } } },
        f: { g: { h: { i: 'bar' } } },
      },
    };

    const s: Subject<any> = new Subject();

    let r: any;
    s.pipe(clonePipe()).subscribe((_r: any) => {
      r = _r;
    });

    s.next(object);

    expect(object.a.b.c.d.e).toEqual(r.a.b.c.d.e);
  });
});
