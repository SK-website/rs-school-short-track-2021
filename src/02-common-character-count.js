/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrStr1 = s1.split('');
  const arrStr2 = s2.split('');
  let res = 0;
  const found = [];

  for (let i = 0; i < arrStr1.length; i++) {
    const isFound = Boolean(found.find((el) => arrStr1[i] === el));
    if (!isFound) {
      const n1 = arrStr1.filter((el) => arrStr1[i] === el);
      const n2 = arrStr2.filter((el) => arrStr1[i] === el);
      const minNumber = n1.length > n2.length ? n2.length : n1.length;

      if (minNumber) {
        res += minNumber;
        found.push(arrStr1[i]);
      }
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
