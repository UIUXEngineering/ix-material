import { memoizeCapped } from './_memoizeCapped';

/** Used to match property names within property paths. */
// tslint:disable-next-line
const rePropName: RegExp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
const reEscapeChar: RegExp = /\\(\\)?/g;

/**
 * Converts `_string` to a property path _array.
 *
 *
 * @param _string The _string to convert.
 * Returns the property path _array.
 */
export const stringToPath: (string: string) => string[] = memoizeCapped(function(string) {
  const result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
