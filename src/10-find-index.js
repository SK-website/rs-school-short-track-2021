/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let left = 0;
  let right = array.length;
  let res = false;

  while (!(left === right)) {
    const mid = Math.floor(left + (right - left) / 2);
    if (right === left) break;
    if (array[mid] === value) {
      res = mid;
      break;
    } else if (array[mid] > value) right = mid;
    else if (array[mid] < value) left = mid + 1;
  }
  return res;
}

module.exports = findIndex;
