/** Used to compose unicode character classes. */
const rsAstralRange = '\\ud800-\\udfff',
  rsComboMarksRange = '\\u0300-\\u036f',
  reComboHalfMarksRange = '\\ufe20-\\ufe2f',
  rsComboSymbolsRange = '\\u20d0-\\u20ff',
  rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
  rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
const rsAstral = '[' + rsAstralRange + ']',
  rsCombo = '[' + rsComboRange + ']',
  rsFitz = '\\ud83c[\\udffb-\\udfff]',
  rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
  rsNonAstral = '[^' + rsAstralRange + ']',
  rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
  rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
  rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
const reOptMod = rsModifier + '?',
  rsOptVar = '[' + rsVarRange + ']?',
  rsOptJoin =
    '(?:' +
    rsZWJ +
    '(?:' +
    [rsNonAstral, rsRegional, rsSurrPair].join('|') +
    ')' +
    rsOptVar +
    reOptMod +
    ')*',
  rsSeq = rsOptVar + reOptMod + rsOptJoin,
  rsSymbol =
    '(?:' +
    [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') +
    ')';

/** Used to match [_string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
const reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `_string` to an _array.
 *
 * Returns the converted _array.
 *
 * @param string The _string to convert.
 */
export function unicodeToArray(string: string): any[] {
  return string.match(reUnicode) || [];
}
