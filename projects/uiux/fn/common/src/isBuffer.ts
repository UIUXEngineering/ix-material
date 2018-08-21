import { root } from './_root';

/** Detect free variable `exports`. */
import { stubFalse } from './stubFalse';

declare const exports: {
  nodeType: any;
  process: any;
};

declare const module: {
  nodeType: any;
  exports: any;
  process: () => any;
  require: (arg: string) => { types: any };
};

const freeExports = typeof exports === 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
const freeModule =
  freeExports && typeof module === 'object' && module && !module['nodeType'] && module;

/** Detect the popular CommonJS extension `module.exports`. */
const moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
const Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other methods. */
const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @param value The value to check.
 * Returns `true` if `value` is a buffer, else `false`.
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
export const isBuffer = nativeIsBuffer || stubFalse;
