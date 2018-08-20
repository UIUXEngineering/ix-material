import overArg from './over-arg';

/* Built-in method references for those with the same name as other `lodash` methods. */
export const nativeKeys: (arg: any) => any = overArg(Object.keys, Object);
