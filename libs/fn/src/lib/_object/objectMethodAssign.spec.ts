import { objectMethodAssign, assignMethod } from './objectMethodAssign';

describe('pipeAssignObject', () => {
  it('should mutate object one level', () => {
    const target = {
      a: 'a',
      b: 'b',
      c: {
        d: 'd',
        e: 'e',
      },
    };

    const setB = (t: any, props: any) => {
      return {
        ...t,
        ...props,
      };
    };

    const result = objectMethodAssign(target).pipe(assignMethod(setB, { b: 'foo' }));

    expect(result.b).toBe('foo');
  });

  it('should mutate object multi level', () => {
    const target = {
      a: 'a',
      b: 'b',
      c: {
        d: 'd',
        e: 'e',
      },
    };

    const setB = (t: any, props: any) => {
      return {
        ...t,
        ...props,
      };
    };

    const setD = (t: any, props: any) => {
      return {
        ...t,
        c: {
          ...t.c,
          ...props,
        },
      };
    };

    const result = objectMethodAssign(target).pipe(assignMethod(setB, { b: 'foo' }), assignMethod(setD, { e: 'bar' }));

    expect(result.b).toBe('foo');
    expect(result.c.e).toBe('bar');
  });
});
