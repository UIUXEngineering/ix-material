import { overArg } from './_overArg';

/** Built-in value references. */
export const getPrototype: Function = overArg(Object.getPrototypeOf, Object);
