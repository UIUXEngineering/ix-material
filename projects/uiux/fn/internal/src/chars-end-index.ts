import { baseIndexOf } from './base-index-of';

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 * Returns the index of the last unmatched string symbol.
 *
 * @param strSymbols The string symbols to inspect.
 * @param chrSymbols The character symbols to find.
 */
export function charsEndIndex(strSymbols: any[], chrSymbols: any[]): number {
  let index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}
