import { baseIndexOf } from './_baseIndexOf';

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * Returns the index of the first unmatched string symbol.
 *
 * @param strSymbols The string symbols to inspect.
 * @param chrSymbols The character symbols to find.
 */
export function charsStartIndex(strSymbols: any[], chrSymbols: any[]): number {
  let index = -1;
  const length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}
