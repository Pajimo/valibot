/**
 * Returns the code point count of the input.
 *
 * @param input The input to be measured.
 * @param limit The count limit. Pass `Infinity` to count the entire input.
 *
 * @returns The code point count, or the count at which the limit was reached.
 *
 * @internal
 */
// @__NO_SIDE_EFFECTS__
export function _getCodePointCount(input: string, limit: number): number {
  if (limit <= 0) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < input.length; ) {
    count++;
    if (count >= limit) {
      return count;
    }
    // codePointAt never returns undefined because i is always in bounds
    i += input.codePointAt(i)! > 0xffff ? 2 : 1;
  }
  return count;
}
