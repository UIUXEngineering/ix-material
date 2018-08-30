import { Uint8Array } from './_Uint8Array';

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * Returns the cloned array buffer.
 */
export function cloneArrayBuffer(arrayBuffer: any): any {
  const result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
