import { pipeAssignObject } from './pipeAssignObject';

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

    const result = pipeAssignObject(target, [[setB, { b: 'foo' }]]);

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

    const result = pipeAssignObject(target, [
      [setB, { b: 'foo' }],
      [setD, { e: 'bar' }],
    ]);

    expect(result.b).toBe('foo');
    expect(result.c.e).toBe('bar');
  });
});
