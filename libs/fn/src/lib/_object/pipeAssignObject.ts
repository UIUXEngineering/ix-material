export type PipeAssignFunction<T> = [(target: T, update: Partial<T>) => T, Partial<T>];

export function pipeAssignObject<T>(target: T, fns: PipeAssignFunction<T>[]): T {
  return fns.reduce((t: T, wrapper: PipeAssignFunction<T>) => {
    return wrapper[0](t, wrapper[1]);
  }, target);
}
