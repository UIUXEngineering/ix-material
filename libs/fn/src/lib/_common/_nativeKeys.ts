import { overArg } from './_overArg';

/* Built-in method references for those with the same name as other methods. */
export const nativeKeys: (arg: any) => any = overArg(Object.keys, Object);
