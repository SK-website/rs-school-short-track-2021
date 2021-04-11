/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let number;
  const res = [];
  const arrString = str.split('');

  function repeatNumber(item, i) {
    const j = i + 1;
    if (arrString[j] !== item) return;

    number += 1;
    repeatNumber(arrString[j], j);
  }

  for (let i = 0; i < arrString.length;) {
    number = 1;
    repeatNumber(arrString[i], i);
    if (number > 1) {
      res.push(`${number}${arrString[i]}`);
      i += number;
    } else {
      res.push(arrString[i]);
      i += 1;
    }
  }

  return res.join('');
}

module.exports = encodeLine;
