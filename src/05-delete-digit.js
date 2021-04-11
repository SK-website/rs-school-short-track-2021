/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    const swap = arr[i];

    arr.splice(i, 1);
    const num = arr.join('');
    arr.splice(i, 0, swap);
    if (num > res) res = num;
  }
  return Number(res);
}

module.exports = deleteDigit;
