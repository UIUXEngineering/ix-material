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
    interface C {
      d: string;
      e: string;
    }

    interface A {
      a: string;
      b: string;
      c: C;
    }

    const target = {
      a: 'a',
      b: 'b',
      c: {
        d: 'd',
        e: 'e',
      },
    };

    const setB = (t: A, props: A): A => {
      return {
        ...t,
        ...props,
      };
    };

    const setD = (t: A, props: C): A => {
      return {
        ...t,
        c: {
          ...t.c,
          ...props,
        },
      };
    };

    const result = objectMethodAssign(target).pipe(
      assignMethod<A>(setB, { b: 'foo' }),
      assignMethod<A, C>(setD, { e: 'bar' })
    );

    expect(result.b).toBe('foo');
    expect(result.c.e).toBe('bar');
  });
});
