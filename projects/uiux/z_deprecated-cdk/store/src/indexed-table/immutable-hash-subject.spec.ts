/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { fromJS } from 'immutable';
import { ImmutableHashSubject } from './immutable-hash-subject';

describe('ImmutableHashSubject', () => {
  it('should work in wrapper', () => {
    let data: any = fromJS({ x: { y: { z: 'wrapped' } } });

    class Wrapper {
      data: any;
      private test: ImmutableHashSubject<any>;

      constructor() {}

      create(_data: any) {
        this.data = _data;
        this.test = new ImmutableHashSubject('x.y', () => {
          return this.data;
        });
      }

      get(): any {
        return this.test;
      }

      update(object: any): void {
        this.data = object;
        this.test.update();
      }
    }

    const w = new Wrapper();
    w.create(data);

    let r: any;
    w.get().subscribe((result) => {
      if (result.toJS) {
        r = result.toJS();
      } else {
        r = result;
      }
    });

    data = data.setIn(['x', 'y'], 'wrapped changed');
    w.update(data);

    expect(r).toBe('wrapped changed');
  });

  it('should create change data', () => {
    let data: any = fromJS({ x: { y: { z: 1234 } } });

    const IS: ImmutableHashSubject<any> = new ImmutableHashSubject('x.y', () => {
      return data;
    });

    let r: any;
    IS.subscribe((result: any) => {
      r = result;
    });

    expect(r).toEqual({ z: 1234 });

    data = data.setIn(['x', 'y'], 'foo');

    IS.update();

    expect(r).toEqual('foo');
  });

  it('should create default data', () => {
    const data = fromJS({ x: { y: { z: 123 } } });

    const IS: ImmutableHashSubject<any> = new ImmutableHashSubject('x.y', () => {
      return data;
    });

    IS.subscribe((result: any) => {
      expect(result).toEqual({ z: 123 });
    });
  });

  it('should create default data', () => {
    const data = fromJS({ x: { y: { z: 123 } } });

    const IS: ImmutableHashSubject<any> = new ImmutableHashSubject('x.y');
    IS.getExternalData(() => {
      return data;
    });

    IS.subscribe((result: any) => {
      expect(result).toEqual({ z: 123 });
    });
  });
});
