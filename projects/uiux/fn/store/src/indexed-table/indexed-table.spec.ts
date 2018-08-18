/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { IndexedTable } from './indexed-table';
import { IIndexedItem, IIndexedTableItem } from './reducers/interfaces';
import { createTableItem } from './reducers/create-table-item';
import { createIndexItem } from './reducers/create-indexed-item';
import { clone } from '@uiux/fn/object';
import { hasValue } from '@uiux/fn/value';

describe('IndexedTable', () => {
  it('should should notify parent and child when value changes', () => {
    const object: any = {
      a: {
        b: { c: { d: { e: 'foo' } } },
        f: { g: { h: { i: 'bar' } } },
      },
    };

    const t: IndexedTable = new IndexedTable();
    t.create(object);

    let a: any, b: any, c: any, e: any, f: any, i: any;

    // should be notified
    t.getKey('a').subscribe((r) => {
      a = r;
    });
    t.getKey('b').subscribe((r) => {
      b = r;
    });
    t.getKey('c').subscribe((r) => {
      c = r;
    });
    t.getKey('e').subscribe((r) => {
      e = r;
    });

    // not notified
    t.getKey('f').subscribe((r) => {
      f = r;
    });
    t.getKey('i').subscribe((r) => {
      i = r;
    });

    // change e
    t.setKey('e', 'baz');

    expect(a).toEqual({
      b: { c: { d: { e: 'baz' } } },
      f: { g: { h: { i: 'bar' } } },
    });
    expect(b).toEqual({ c: { d: { e: 'baz' } } });
    expect(c).toEqual({ d: { e: 'baz' } });
    expect(e).toEqual('baz');
    expect(f).toEqual({ g: { h: { i: 'bar' } } });
    expect(i).toEqual('bar');
  });

  it('should setKey with a object value with initialized object', () => {
    const t: IndexedTable = new IndexedTable();

    const object: any = { a: { b: { foo: 'bar' } } };
    t.create(object);

    let _result: any;
    t.getKey('foo').subscribe((result) => {
      _result = result;
    });

    const setKeyValue: any = {
      e: { h: 'aych' },
    };

    t.setKey('foo', setKeyValue);

    expect(_result.e.h).toBe('aych');
  });

  it('should setKey with a object value', () => {
    const t: IndexedTable = new IndexedTable();

    let _result: any;
    t.getKey('foo').subscribe((result) => {
      _result = result;
    });

    const setKeyValue: any = {
      e: { h: 'aych' },
    };

    t.setKey('foo', setKeyValue);

    expect(_result.e.h).toBe('aych');
  });

  it('should setKey with a scalar value', () => {
    const t: IndexedTable = new IndexedTable();

    let _result: any;
    t.getKey('foo').subscribe((result) => {
      _result = result;
    });

    t.setKey('foo', 'bar');

    expect(_result).toBe('bar');
  });

  it('should setKey with a scalar value', () => {
    const t: IndexedTable = new IndexedTable();

    let _result: any;
    t.getKey('foo').subscribe((result) => {
      _result = result;
    });

    t.setKey('foo', 'bar');

    expect(_result).toBe('bar');
  });

  it('should setKey with object value', () => {
    const object: any = {
      a: {
        b: {
          c: {
            d: 'foo',
          },
          f: 'bar',
        },
      },
    };
    const t: IndexedTable = new IndexedTable();
    t.create(object);

    const setKeyValue: any = {
      e: { h: 'aych' },
    };

    t.setKey('c', setKeyValue);
  });

  it('should append move node, and update value of node', () => {
    const t: IndexedTable = new IndexedTable();

    let _result: any;
    t.onUpdateObject.subscribe((result) => {
      _result = result;
    });

    const object: any = {
      a: {
        b: {
          c: {
            d: 'foo',
          },
          f: 'bar',
        },
      },
    };

    t.create(object);

    // c has new object
    const object2: any = {
      a: {
        b: {
          c: {
            // <--- c has new object
            g: 'baz',
          },
          d: {
            e: 'foo',
            f: 'bum',
          },
        },
      },
    };

    t.extend(object2);

    const expected: any = {
      a: {
        b: {
          d: {
            // <-- d moved from c to b
            e: 'foo',
            f: 'bum', // <-- f moved from b to d
          },
          c: {
            // <--- c has new object
            g: 'baz',
          },
        },
      },
    };

    expect(_result).toEqual(expected);
  });

  it('should append move node, and update value of node', () => {
    const t: IndexedTable = new IndexedTable();

    let _result: any;
    t.onUpdateObject.subscribe((result) => {
      _result = result;
    });

    const object: any = {
      a: {
        b: {
          c: {
            d: 'foo',
          },
          f: 'bar',
        },
      },
    };

    t.create(object);

    // c has new object
    const object2: any = {
      a: {
        b: {
          c: {
            // <--- c has new object
            g: 'baz',
          },
          d: {
            e: 'foo',
          },
        },
      },
    };

    t.extend(object2);

    const expected: any = {
      a: {
        b: {
          d: {
            // <-- d moved from c to b
            e: 'foo',
          },
          c: {
            // <--- c has new object
            g: 'baz',
          },
          f: 'bar',
        },
      },
    };

    expect(_result).toEqual(expected);
  });

  it('should append table with new structure', (done) => {
    const t: IndexedTable = new IndexedTable();

    const expected: any = {
      a: {
        b: {
          d: {
            // <-- d moved from c to b
            e: 'foo',
          },
          f: 'bar',
        },
      },
    };

    let count = 0;
    function resolve(result) {
      count++;
      if (count === 2) {
        expect(result).toEqual(expected);
        done();
      }
    }

    t.onUpdateObject.subscribe(resolve);

    const object: any = { a: { b: { c: { d: 'foo' }, f: 'bar' } } };

    t.create(object);

    // d _removed from c, c will not have object
    const object2: any = { a: { b: { d: { e: 'foo' } } } };
    t.extend(object2);
  });

  it('should reformat object when setting with different object structure', () => {
    const t: IndexedTable = new IndexedTable();
    let object: any = { a: { b: { c: { d: 'foo' } } } };

    t.onUpdateObject.subscribe((_updatedObject: any) => {
      object = _updatedObject;
    });

    t.create(clone(object));

    // set a new object
    const object2: any = { a: { b: { d: { e: 'foo' } } } };

    t.create(object2);
    expect(object).toEqual(object2);
  });

  it('should update object if update hash is called before object is set', () => {
    const t: IndexedTable = new IndexedTable();

    // Insert a hash item
    t.setKey('z', 'bar');

    expect(Object.keys(t.table).length).toEqual(1);

    // No path assigned yet as not object is set yet
    expect(t.table['z'].path).toBe('_$tmp.z');

    // Set object
    const object: any = { a: { b: { c: { d: 'foo' }, z: null } } };
    t.create(object);

    expect(Object.keys(t.table).length).toEqual(5);
    expect(t.table['z'].path).toBe('a.b.z');
    expect(t.table['z'].subject.getValue()).toBeNull();
  });

  it('should reset object changing items', () => {
    const t: IndexedTable = new IndexedTable();

    const object: any = { a: { b: { c: { d: 'foo' } } } };
    t.create(object);

    expect(Object.keys(t.table).length).toEqual(4);
    expect(t.table['a']).toBeDefined();
    expect(t.table['b']).toBeDefined();
    expect(t.table['c']).toBeDefined();
    expect(t.table['d']).toBeDefined();

    // Note path of d
    expect(t.table['d'].path).toBe('a.b.c.d');

    // set a new object
    const object2: any = { a: { b: { d: { e: 'foo' } } } };
    t.create(object2);

    expect(Object.keys(t.table).length).toEqual(5);
    expect(t.table['a']).toBeDefined();
    expect(t.table['b']).toBeDefined();

    expect(t.table['c']).toBeDefined(); // <-- c was _removed from hash table
    expect(t.table['c']._removed).toBe(true); // <-- c was _removed from hash table
    expect(t.table['c'].subject.getValue()).toBeNull(); // <-- c was _removed from hash table

    expect(t.table['d']).toBeDefined();
    expect(t.table['e']).toBeDefined();

    expect(t.table['d'].path).toBe('a.b.d');
  });

  it('should set object adding items', () => {
    const t: IndexedTable = new IndexedTable();

    const object: any = { a: { b: { c: { d: 'foo' } } } };
    t.create(object);

    expect(Object.keys(t.table).length).toEqual(4);
    expect(t.table['a']).toBeDefined();
    expect(t.table['b']).toBeDefined();
    expect(t.table['c']).toBeDefined();
    expect(t.table['d']).toBeDefined();
  });

  it('should notify all subscribes when tree has changed', () => {
    const t: IndexedTable = new IndexedTable();
    const object: any = { a: { b: { c: { d: 'f' } } }, w: { x: { y: 'z' } } };
    t.create(object);

    let ra: any;
    let ca: any;
    t.getKey('a').subscribe(
      (result) => {
        ra = result;
      },
      () => {},
      () => {
        ca = 'complete';
        // ra = undefined;
      }
    );

    let rb: any;
    let cb: any;
    t.getKey('b').subscribe(
      (result) => {
        rb = result;
      },
      () => {},
      () => {
        cb = 'complete';
        // rb = undefined;
      }
    );

    let rc: any;
    let cc: any;
    t.getKey('c').subscribe(
      (result) => {
        rc = result;
      },
      () => {},
      () => {
        cc = 'complete';
        // rc = undefined;
      }
    );

    let rd: any;
    let cd: any;
    t.getKey('d').subscribe(
      (result) => {
        rd = result;
      },
      () => {},
      () => {
        cd = 'complete';
        // rd = undefined;
      }
    );

    let ry: any;
    let cy: any;
    t.getKey('y').subscribe(
      (result) => {
        ry = result;
      },
      () => {},
      () => {
        cy = 'complete';
        // rd = undefined;
      }
    );

    expect(ra).toEqual({ b: { c: { d: 'f' } } });
    expect(rb).toEqual({ c: { d: 'f' } });
    expect(rc).toEqual({ d: 'f' });
    expect(rd).toBe('f');
    expect(ry).toBe('z');

    t.setKey('c', { f: 'g' });

    expect(ra).toEqual({ b: { c: { f: 'g', d: 'f' } } });
    expect(rb).toEqual({ c: { f: 'g', d: 'f' } });
    expect(rc).toEqual({ f: 'g', d: 'f' });
    expect(rd).toBe('f');
    expect(ry).toBe('z');
  });

  it('should notify all subscribes when tree has changed', () => {
    const t: IndexedTable = new IndexedTable();
    const object: any = { a: { b: { c: { d: 'f' } } }, w: { x: { y: 'z' } } };
    t.create(object);

    let ra: any;
    let ca: any;
    t.getKey('a').subscribe(
      (result) => {
        ra = result;
      },
      () => {},
      () => {
        ca = 'complete';
        // ra = undefined;
      }
    );

    let rb: any;
    let cb: any;
    t.getKey('b').subscribe(
      (result) => {
        rb = result;
      },
      () => {},
      () => {
        cb = 'complete';
        // rb = undefined;
      }
    );

    let rc: any;
    let cc: any;
    t.getKey('c').subscribe(
      (result) => {
        rc = result;
      },
      () => {},
      () => {
        cc = 'complete';
        // rc = undefined;
      }
    );

    let rd: any;
    let cd: any;
    t.getKey('d').subscribe(
      (result) => {
        rd = result;
      },
      () => {},
      () => {
        cd = 'complete';
        // rd = undefined;
      }
    );

    let ry: any;
    let cy: any;
    t.getKey('y').subscribe(
      (result) => {
        ry = result;
      },
      () => {},
      () => {
        cy = 'complete';
        // rd = undefined;
      }
    );

    expect(ra).toEqual({ b: { c: { d: 'f' } } });
    expect(rb).toEqual({ c: { d: 'f' } });
    expect(rc).toEqual({ d: 'f' });
    expect(rd).toBe('f');
    expect(ry).toBe('z');

    t.setKey('c', 'bum');

    expect(ra).toEqual({ b: { c: 'bum' } });
    expect(rb).toEqual({ c: 'bum' });
    expect(rc).toEqual('bum');
    expect(rd).toBeNull();
    expect(ry).toBe('z');
  });

  // prettier-ignore
  it('should _removeFromTable item and it\'s children', () => {
    const t: IndexedTable = new IndexedTable();
    const item1 = createIndexItem('a');
    item1.path = 'a';
    t.addItemToTable(createTableItem(t.table, item1));

    const item2 = createIndexItem('b');
    item2.path = 'a.b';
    item2.parent = {
      hashKey: 'a',
      path: 'a',
    };
    t.addItemToTable(createTableItem(t.table, item2));

    const item3 = createIndexItem('c');
    item3.path = 'a.b.c';
    item3.parent = {
      hashKey: 'a.b',
      path: 'a.b',
    };
    t.addItemToTable(createTableItem(t.table, item3));

    const item4 = createIndexItem('d');
    item4.path = 'a.b.c.d';
    item4._isScalar = true;
    item4.parent = {
      hashKey: 'a.b.c',
      path: 'a.b.c',
    };
    t.addItemToTable(createTableItem(t.table, item4));

    let ra: any;
    const sa = t.getKey('a').subscribe((result) => {
      ra = result;
    });

    let rb: any;
    const sb = t.getKey('b').subscribe((result) => {
      rb = result;
    });

    let rc: any;
    const sc = t.getKey('c').subscribe((result) => {
      rc = result;
    });

    let rd: any;
    const sd = t.getKey('d').subscribe((result) => {
      rd = result;
    });

    // If an object is provided as a object
    // A data structure should be created
    t.setKey('a', { b: { c: { d: 'f1' } } });
    // t.setKey('b', 'f1');
    // t.setKey('c', 'f1');
    // t.setKey('d', 'f1');

    expect(ra).toEqual({ b: { c: { d: 'f1' } } });
    expect(rb).toEqual({ c: { d: 'f1' } });
    expect(rc).toEqual({ d: 'f1' });
    expect(rd).toBe('f1');

    sa.unsubscribe();
    sb.unsubscribe();
    sc.unsubscribe();
    sd.unsubscribe();
  });

  // prettier-ignore
  it('should _removeFromTable item and it\'s children', () => {
    const object: any = {
      a: {
        b: { e: { d: { e: 'foo' } } },
      },
    };

    const t: IndexedTable = new IndexedTable();
    t.create(object);

    const object2: any = { a: { b: { c: { d: 'f1' } } } };
    t.create(object2);

    t.getKey('a').subscribe((result) => {
      expect(result).toEqual({ b: { c: { d: 'f1' } } });
    });

    t.getKey('b').subscribe((result) => {
      expect(result).toEqual({ c: { d: 'f1' } });
    });

    t.getKey('c').subscribe((result) => {
      expect(result).toEqual({ d: 'f1' });
    });

    t.getKey('d').subscribe((result) => {
      expect(result).toEqual('f1');
    });
  });

  it('should update item', () => {
    const t: IndexedTable = new IndexedTable();

    t.setKey('z', 'foo');

    let _resultValue: any;
    t.getKey('z').subscribe((result) => {
      _resultValue = result;
    });

    expect(_resultValue).toBe('foo');

    t.setKey('z', 'bar');

    expect(_resultValue).toBe('bar');
    expect(t.table['z'].subject.getValue()).toBe('bar');
  });

  it('should get object from async after before is created', () => {
    const t: IndexedTable = new IndexedTable();

    t.setKey('z', 'foo');

    let _resultValue: any;
    t.getKey('z').subscribe((result) => {
      _resultValue = result;
    });

    expect(_resultValue).toBe('foo');
  });

  it('should get object from async after item is created', () => {
    const t: IndexedTable = new IndexedTable();

    let _resultValue: any;
    t.getKey('z').subscribe((result) => {
      _resultValue = result;
    });

    expect(_resultValue).toBeNull();

    t.setKey('z', 'foo');
    expect(_resultValue).toBe('foo');
  });

  it('should create item', () => {
    const t: IndexedTable = new IndexedTable();

    const indexed1: IIndexedItem = createIndexItem('z');
    indexed1._isScalar = true;
    const item: IIndexedTableItem = createTableItem(t.table, indexed1);

    t.addItemToTable(item);
    expect(hasValue(t.table)).toBeTruthy();
  });

  it('should be null', () => {
    const t: IndexedTable = new IndexedTable();
    expect(hasValue(t.table)).toBeFalsy();
  });

  it('should map properties when create', () => {
    const object: any = {
      a: {
        b: { e: { d: { e: 'foo' } } },
        f: { g: { d: { i: 'bar' } } },
      },
    };

    const map: any = {
      'a.b.e': 'q',
      'a.f.g.d': 'z',
    };

    const t: IndexedTable = new IndexedTable();
    t.create(object, map);

    expect(t.table['q'].subject.getValue()).toEqual({ d: { e: 'foo' } });
    expect(t.table['q'].path).toEqual('a.b.q');
    expect(t.table['z'].subject.getValue()).toEqual({ i: 'bar' });
    expect(t.table['z'].path).toEqual('a.f.g.z');
  });

  it('should map properties when extend', () => {
    const object: any = {
      a: {
        b: { e: { d: { e: 'foo' } } },
        f: { g: { d: { i: 'bar' } } },
      },
    };

    const map: any = {
      'a.b.e': 'q',
      'a.f.g.d': 'z',
    };

    const t: IndexedTable = new IndexedTable();
    t.extend(object, '', map);

    expect(t.table['q'].subject.getValue()).toEqual({ d: { e: 'foo' } });
    expect(t.table['q'].path).toEqual('a.b.q');
    expect(t.table['z'].subject.getValue()).toEqual({ i: 'bar' });
    expect(t.table['z'].path).toEqual('a.f.g.z');
  });

  it('should reset', () => {
    const object: any = {
      a: {
        b: { e: 'foo' },
        f: { g: [1, 2, 3] },
        h: false,
        i: 0,
      },
    };

    const t: IndexedTable = new IndexedTable();
    t.create(object);
    t.reset();

    expect(t.table['e'].subject.getValue()).toEqual('');
    expect(t.table['f'].subject.getValue()).toEqual({ g: [] });
    expect(t.table['g'].subject.getValue()).toEqual([]);
    expect(t.table['h'].subject.getValue()).toEqual(null);
    expect(t.table['i'].subject.getValue()).toEqual(null);
  });

  it('should destroy', () => {
    const object: any = {
      a: {
        b: { e: 'foo' },
        f: { g: [1, 2, 3] },
        h: false,
        i: 0,
      },
    };

    const t: IndexedTable = new IndexedTable();
    t.create(object);
    t.destroy();

    expect(t.table['e'].subject.getValue()).toEqual(null);
    expect(t.table['f'].subject.getValue()).toEqual(null);
    expect(t.table['g'].subject.getValue()).toEqual(null);
    expect(t.table['h'].subject.getValue()).toEqual(null);
    expect(t.table['i'].subject.getValue()).toEqual(null);
  });

  it('should send values if all table values have legit value', () => {
    const object: any = {
      a: {
        b: { e: 'foo' },
        f: { g: [1, 2, 3] },
        h: false,
        i: 0,
      },
    };

    const t: IndexedTable = new IndexedTable();
    t.create(object);

    t.getKey('g').subscribe((val: any) => {
      expect(val).toEqual([1, 2, 3]);
    });

    t.onUpdateObject.subscribe((val: any) => {
      expect(val).toEqual(object);
    });
  });

  it('should not send values unless all table values have value', () => {
    const object: any = {
      a: {
        b: { e: 'foo' },
        f: { g: [1, 2, 3] },
        h: null, // no object
        i: 0,
      },
    };

    const t: IndexedTable = new IndexedTable({
      allPropsHaveValue: true,
    });

    let g: any;
    t.getKey('g').subscribe((val: any) => {
      g = val;
    });

    let o: any;
    t.onUpdateObject.subscribe((val: any) => {
      o = val;
    });

    t.create(object);

    expect(g).toBeUndefined();
    expect(o).toBeUndefined();
  });

  it('should allPropsHaveValue', () => {
    const object: any = {
      a: {
        b: { e: 'foo' },
        f: { g: [1, 2, 3] },
        h: null, // no object
        i: 0,
      },
    };

    const t: IndexedTable = new IndexedTable();

    t.create(object);

    expect(t.allPropsHaveValue()).toBe(false);
  });
});
