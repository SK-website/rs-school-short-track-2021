/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = String(n).split('');
  let int = arr.length;

  while (int > 1) {
    const res = arr.reduce((acc, item) => acc + Number(item), 0);
    if (res < 10) return Number(res);

    arr = String(res).split('');
    int = arr.length;
  }
  return arr[0];
}

module.exports = getSumOfDigits;
