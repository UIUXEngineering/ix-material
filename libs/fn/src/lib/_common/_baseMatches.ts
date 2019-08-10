import { baseIsMatch } from './_baseIsMatch';
import { getMatchData } from './_getMatchData';
import { matchesStrictComparable } from './_matchesStrictComparable';

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @param source The _object of property values to match.
 * Returns the new spec function.
 */
export function baseMatches(source: any): Function {
  const matchData = getMatchData(source);
  if (matchData.length === 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
