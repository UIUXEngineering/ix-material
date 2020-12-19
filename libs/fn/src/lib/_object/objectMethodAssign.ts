export type AssignMethod<T> = (source: T) => T;

export type PipeAssignFunction<T> = (
  method: (target: T, update: Partial<T>) => T,
  update: Partial<T>
) => AssignMethod<T>;

export function assignMethod<T>(method: (target: T, update: Partial<T>) => T, update: Partial<T>): AssignMethod<T> {
  return function (source: T) {
    return method(source, update);
  };
}

export interface ObjectMethodAssign<T> {
  pipe: (...args: AssignMethod<T>[]) => T;
}

export function objectMethodAssign<T>(target: T): ObjectMethodAssign<T> {
  return {
    pipe: function (...methods: AssignMethod<T>[]): T {
      return methods.reduce((a, method) => {
        return method(a);
      }, target);
    },
  };
}
