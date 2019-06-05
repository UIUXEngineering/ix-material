// This import does not have any type definitions.
import { parallel } from 'gulp';

/** Create a task that's a sequence of other tasks. */
export function sequenceTask(...args: any[]) {
  return (done: any) => {
    parallel(
      ...args,
      done
    );
  };
}
