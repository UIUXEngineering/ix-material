import { copyObject } from './_copyObject';
import { keysIn } from './keysIn';

/**
 * Converts `value` to a plain _object flattening inherited enumerable _string
 * keyed properties of `value` to own properties of the plain _object.
 *
 * @param value The value to convert.
 * Returns the converted plain _object.
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
export function toPlainObject(value): any {
  return copyObject(value, keysIn(value));
}
