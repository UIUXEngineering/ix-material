/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { DistinctSubject } from './distinct-subject';

describe('DistinctSubject', () => {
  it('should dirty check true with provided previous value and key', () => {
    const prev: any = { a: { b: { c: 'foo' } } };
    const s: DistinctSubject<any> = new DistinctSubject(prev, 'a.b.c');
    expect(s.next({ a: { b: { c: 'bar' } } })).toBe(true);
  });

  it('should dirty check false with provided previous value and key', () => {
    const prev: any = { a: { b: { c: 'foo' } } };
    const s: DistinctSubject<any> = new DistinctSubject(prev, 'a.b.c');
    expect(s.next({ a: { b: { c: 'foo' } } })).toBe(false);
  });

  it('should dirty check false with provided null previous value and key', () => {
    const s: DistinctSubject<any> = new DistinctSubject(null, 'a.b.c');
    expect(s.next({ a: { b: { c: 'baz' } } })).toBe(true);
  });

  it('should dirty check true with provided previous value and null key', () => {
    const prev: any = { a: { b: { c: 'foo' } } };
    const s: DistinctSubject<any> = new DistinctSubject(prev, null);
    expect(s.next({ a: { b: { c: 'baz' } } })).toBe(true);
  });

  it('should dirty check false with provided previous value', () => {
    const prev: any = { a: { b: { c: 'foo' } } };
    const s: DistinctSubject<any> = new DistinctSubject(prev, null);
    expect(s.next({ a: { b: { c: 'foo' } } })).toBe(false);
  });

  it('should dirty check true with provided previous value and key', () => {
    const prev: any = { a: { b: { c: 'foo' } } };
    const s: DistinctSubject<any> = new DistinctSubject(prev, 'a.b.c');
    expect(s.isDistinct({ a: { b: { c: 'bar' } } })).toBe(true);
  });

  it('should dirty check false with provided previous value and key', () => {
    const prev: any = { a: { b: { c: 'foo' } } };
    const s: DistinctSubject<any> = new DistinctSubject(prev, 'a.b.c');
    expect(s.isDistinct({ a: { b: { c: 'foo' } } })).toBe(false);
  });

  it('should dirty check false with provided null previous value and key', () => {
    const s: DistinctSubject<any> = new DistinctSubject(null, 'a.b.c');
    expect(s.isDistinct({ a: { b: { c: 'baz' } } })).toBe(true);
  });

  it('should dirty check true with provided previous value and null key', () => {
    const prev: any = { a: { b: { c: 'foo' } } };
    const s: DistinctSubject<any> = new DistinctSubject(prev, null);
    expect(s.isDistinct({ a: { b: { c: 'baz' } } })).toBe(true);
  });

  it('should dirty check false with provided previous value', () => {
    const prev: any = { a: { b: { c: 'foo' } } };
    const s: DistinctSubject<any> = new DistinctSubject(prev, null);
    expect(s.isDistinct({ a: { b: { c: 'foo' } } })).toBe(false);
  });
});
