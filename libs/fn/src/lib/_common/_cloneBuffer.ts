import { root } from './_root';

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

/** Detect free variable `exports`. */
const freeExports = typeof exports === 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
const freeModule = freeExports && typeof module === 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
const moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
const Buffer = moduleExports ? root.Buffer : undefined,
  allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @param buffer The buffer to clone.
 * @param isDeep Specify a deep clone.
 * Returns the cloned buffer.
 */
export function cloneBuffer(buffer, isDeep?: boolean): any {
  if (isDeep) {
    return buffer.slice();
  }
  const length = buffer.length,
    result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}
