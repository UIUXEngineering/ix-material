/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { inject, TestBed } from '@angular/core/testing';
import { IxLocalStorageService } from './ix-localstorage.service';

describe('IxLocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IxLocalStorageService],
    });
  });

  it('should be created', inject([IxLocalStorageService], (service: IxLocalStorageService) => {
    expect(service).toBeTruthy();
  }));

  it('should setItem', inject([IxLocalStorageService], (service: IxLocalStorageService) => {
    service.reset();
    service.setItem('testSetItem', 'fooSetItem');
    expect(window.localStorage.getItem('testSetItem')).toBe('fooSetItem');
  }));

  it('should setItem via local-storage directly and update cache', (done) => {
    const s: IxLocalStorageService = new IxLocalStorageService();

    s.reset();

    s.storage.subscribe((r: any) => {
      if (Object.keys(r).length) {
        expect(r).toEqual({
          test2SetItem: 'test2SetItem',
        });
        done();
      }
    });

    s.setItem('test2SetItem', 'test2SetItem');
  });

  it('should clearMemory and reload', (done) => {
    const s: IxLocalStorageService = new IxLocalStorageService();

    s.reset();

    s.setItemWithPrefix('foo', 'foo1', 'value1');
    s.setItemWithPrefix('foo', 'foo2', 'value2');
    s.setItemWithPrefix('foo', 'foo3', 'value3');
    s.setItemWithPrefix('bar', 'bar1', 'value4');
    s.setItemWithPrefix('bar', 'bar2', 'value5');
    s.setItemWithPrefix('bar', 'bar3', 'value6');

    s.clearMemory();

    s.storage.subscribe((r: any) => {
      if (Object.keys(r).length) {
        expect(r).toEqual({
          'bar.bar1': 'value4',
          'bar.bar2': 'value5',
          'bar.bar3': 'value6',
          'foo.foo1': 'value1',
          'foo.foo2': 'value2',
          'foo.foo3': 'value3',
        });
        done();
      }
    });
  });

  it('should getItem', inject([IxLocalStorageService], (service: IxLocalStorageService) => {
    service.reset();
    service.setItem('testSetItem', 'fooSetItem');
    expect(service.getItem('testSetItem')).toBe('fooSetItem');
  }));

  it('should removeItem', inject([IxLocalStorageService], (service: IxLocalStorageService) => {
    service.reset();
    service.setItem('testSetItem', 'fooSetItem');
    service.removeItem('testSetItem');
    expect(service.getItem('testSetItem')).toBeNull();
  }));

  it('should clear', inject([IxLocalStorageService], (service: IxLocalStorageService) => {
    service.reset();
    service.setItem('testSetItem', 'fooSetItem');
    service.clear();
    expect(service.getItem('testSetItem')).toBeNull();
  }));

  it('should setItemWithPrefix', inject(
    [IxLocalStorageService],
    (service: IxLocalStorageService) => {
      service.reset();
      service.setItemWithPrefix('myPrefix', 'testSetItem', 'prefixValue');

      expect(service.getItem('myPrefix.testSetItem')).toBe('prefixValue');
    }
  ));

  it('should getItemsByPrefix', inject(
    [IxLocalStorageService],
    (service: IxLocalStorageService) => {
      service.reset();
      service.setItemWithPrefix('foo', 'foo1', 'value1');
      service.setItemWithPrefix('foo', 'foo2', 'value2');
      service.setItemWithPrefix('foo', 'foo3', 'value3');
      service.setItemWithPrefix('bar', 'bar1', 'value4');
      service.setItemWithPrefix('bar', 'bar2', 'value5');
      service.setItemWithPrefix('bar', 'bar3', 'value6');

      const value: any = service.getItemsByPrefix('foo');

      expect(value).toEqual({
        'foo.foo1': 'value1',
        'foo.foo2': 'value2',
        'foo.foo3': 'value3',
      });
    }
  ));

  it('should removeItemsByPrefix', inject(
    [IxLocalStorageService],
    (service: IxLocalStorageService) => {
      service.reset();
      service.setItemWithPrefix('foo', 'foo1', 'value1');
      service.setItemWithPrefix('foo', 'foo2', 'value2');
      service.setItemWithPrefix('foo', 'foo3', 'value3');
      service.setItemWithPrefix('bar', 'bar1', 'value4');
      service.setItemWithPrefix('bar', 'bar2', 'value5');
      service.setItemWithPrefix('bar', 'bar3', 'value6');

      service.removeItemsByPrefix('foo');
      const value: any = service.getValue();

      expect(value).toEqual({
        'bar.bar1': 'value4',
        'bar.bar2': 'value5',
        'bar.bar3': 'value6',
      });

      expect(value['foo.foo1']).toBeUndefined();
    }
  ));

  it('should removeAllItemsByPrefixArray', inject(
    [IxLocalStorageService],
    (service: IxLocalStorageService) => {
      service.reset();
      service.setItemWithPrefix('foo', 'foo1', 'value1');
      service.setItemWithPrefix('foo', 'foo2', 'value2');
      service.setItemWithPrefix('foo', 'foo3', 'value3');
      service.setItemWithPrefix('bar', 'bar1', 'value4');
      service.setItemWithPrefix('bar', 'bar2', 'value5');
      service.setItemWithPrefix('bar', 'bar3', 'value6');
      service.setItemWithPrefix('baz', 'baz1', 'value7');
      service.setItemWithPrefix('baz', 'baz2', 'value8');
      service.setItemWithPrefix('baz', 'baz3', 'value9');

      service.removeAllItemsByPrefixArray(['foo', 'bar']);
      const value: any = service.getValue();

      expect(value).toEqual({
        'baz.baz1': 'value7',
        'baz.baz2': 'value8',
        'baz.baz3': 'value9',
      });

      expect(value['foo.foo1']).toBeUndefined();
    }
  ));

  it('should getKeysByPrefix', inject([IxLocalStorageService], (service: IxLocalStorageService) => {
    service.reset();
    service.setItemWithPrefix('foo', 'foo1', 'value1');
    service.setItemWithPrefix('foo', 'foo2', 'value2');
    service.setItemWithPrefix('foo', 'foo3', 'value3');
    service.setItemWithPrefix('bar', 'bar1', 'value4');
    service.setItemWithPrefix('bar', 'bar2', 'value5');
    service.setItemWithPrefix('bar', 'bar3', 'value6');

    const value: string[] = service.getKeysByPrefix('foo');

    expect(value).toEqual(jasmine.arrayContaining(['foo.foo1', 'foo.foo2', 'foo.foo3']));
  }));

  it('should getKeysWithSearchString', inject(
    [IxLocalStorageService],
    (service: IxLocalStorageService) => {
      service.reset();
      service.setItem('foo1', 'prefixValue');
      service.setItem('foo2', 'prefixValue');
      service.setItem('foo3', 'prefixValue');
      service.setItem('bar1', 'prefixValue');
      service.setItem('bar2', 'prefixValue');
      service.setItem('bar2', 'prefixValue');
      service.setItem('bar3', 'prefixValue');

      const keys: string[] = service.getKeysWithSearchString('foo');

      expect(keys).toEqual(jasmine.arrayContaining(['foo1', 'foo2', 'foo3']));
    }
  ));

  it('should removeItemsBySearchString', inject(
    [IxLocalStorageService],
    (service: IxLocalStorageService) => {
      service.reset();
      service.setItemWithPrefix('foo', 'afoo1', 'value1');
      service.setItemWithPrefix('foo', 'afoo2', 'value2');
      service.setItemWithPrefix('foo', 'foo3', 'value3');
      service.setItemWithPrefix('bar', 'abar1', 'value4');
      service.setItemWithPrefix('bar', 'abar2', 'value5');
      service.setItemWithPrefix('bar', 'bar3', 'value6');

      service.removeItemsBySearchString('.a');
      const value: any = service.getValue();

      expect(value).toEqual({
        'foo.foo3': 'value3',
        'bar.bar3': 'value6',
      });

      expect(value['foo.foo1']).toBeUndefined();
    }
  ));

  it('should removeAllItemsBySearchArray', inject(
    [IxLocalStorageService],
    (service: IxLocalStorageService) => {
      service.reset();
      service.setItemWithPrefix('foo', 'afoo1', 'value1');
      service.setItemWithPrefix('foo', 'afoo2', 'value2');
      service.setItemWithPrefix('foo', 'foo3', 'value3');
      service.setItemWithPrefix('bar', 'cbar1', 'value4');
      service.setItemWithPrefix('bar', 'cbar2', 'value5');
      service.setItemWithPrefix('bar', 'bar3', 'value6');

      service.removeAllItemsBySearchArray(['.a', '.c']);
      const value: any = service.getValue();

      expect(value).toEqual({
        'foo.foo3': 'value3',
        'bar.bar3': 'value6',
      });

      expect(value['foo.foo1']).toBeUndefined();
    }
  ));

  it('should getItemsWithPartialKey', inject(
    [IxLocalStorageService],
    (service: IxLocalStorageService) => {
      service.reset();
      service.setItem('foo1', 'value1');
      service.setItem('foo2', 'value2');
      service.setItem('foo3', 'value3');
      service.setItem('bar1', 'value4');
      service.setItem('bar2', 'value5');
      service.setItem('bar3', 'value6');

      const value: any = service.getItemsWithPartialKey('foo');

      expect(value).toEqual({
        foo1: 'value1',
        foo2: 'value2',
        foo3: 'value3',
      });
    }
  ));

  it('should onstorageKey', inject([IxLocalStorageService], (service: IxLocalStorageService) => {
    service.reset();
    service.setItem('foo1', 'value1');
    service.setItem('foo2', 'value2');

    service.onstorageKey('foo3').subscribe((r: any) => {
      if (r) {
        expect(r).toBe('value3');
      }
    });

    service.setItem('foo3', 'value3');
  }));

  it('storage', inject([IxLocalStorageService], (service: IxLocalStorageService) => {
    service.reset();
    service.setItem('foo1', 'value1');
    service.setItem('foo2', 'value2');

    let r: any;
    service.storage.subscribe((_r: any) => {
      if (_r) {
        r = _r;
      }
    });

    expect(r).toEqual({
      foo1: 'value1',
      foo2: 'value2',
    });
  }));

  it('onstorage', inject([IxLocalStorageService], (service: IxLocalStorageService) => {
    service.reset();
    service.setItem('foo1', 'value1');
    service.setItem('foo2', 'value2');

    let r: any;
    service.onstorage.subscribe((_r: any) => {
      if (_r) {
        r = _r;
      }
    });

    expect(r).toEqual({
      foo1: 'value1',
      foo2: 'value2',
    });
  }));
});
