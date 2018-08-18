/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { IndexedTable } from './indexed-table';
import { Observable } from 'rxjs/Observable';
import { CON } from './constants';

describe('IndexedTable', () => {
  describe('getKey', () => {
    it('should get subject without hash table or node created', () => {
      const t: IndexedTable = new IndexedTable();
      const s: Observable<any> = t.getKey('foo');

      s.subscribe((r: any) => {
        expect(r).toBeNull();
      });

      expect(t.object.getIn([CON.NO_PATH, 'foo'])).toBeDefined();
    });
  });

  describe('setKey', () => {
    it('should set value hash table or node created', () => {
      const t: IndexedTable = new IndexedTable();
      t.setKey('foo', 'bar');

      expect(t.object.getIn([CON.NO_PATH, 'foo'])).toEqual('bar');
    });
  });

  describe('setKey / getKey async', () => {
    it('should setKey value before getKey is subscribed', () => {
      const t: IndexedTable = new IndexedTable();
      t.setKey('foo', 'bar');

      let r: any;
      t.getKey('foo').subscribe((_r: any) => {
        r = _r;
      });

      expect(r).toEqual('bar');
      expect(t.object.getIn([CON.NO_PATH, 'foo'])).toEqual('bar');
    });

    it('should setKey value after getKey is subscribed', () => {
      const t: IndexedTable = new IndexedTable();

      let r: any;
      t.getKey('foo').subscribe((_r: any) => {
        r = _r;
      });

      t.setKey('foo', 'bar');

      expect(r).toEqual('bar');
      expect(t.object.getIn([CON.NO_PATH, 'foo'])).toEqual('bar');
    });
  });
});
