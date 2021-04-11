/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const xLength = matrix[0].length;
  const yLength = matrix.length;

  const resFinal = [];

  function isValidCoord(x, y) {
    if (x < 0 || x > matrix[0].length - 1) return false;
    if (y < 0 || y > matrix.length - 1) return false;
    return true;
  }
  function isBomb(x, y) {
    return matrix[y][x];
  }

  for (let i = 0; i < yLength; i++) {
    const stringRes = [];

    for (let j = 0; j < xLength; j++) {
      let res = 0;
      if (isValidCoord(i - 1, j - 1) && isBomb(i - 1, j - 1)) res++;
      if (isValidCoord(i - 1, j) && isBomb(i - 1, j)) res++;
      if (isValidCoord(i - 1, j + 1) && isBomb(i - 1, j + 1)) res++;

      if (isValidCoord(i + 1, j - 1) && isBomb(i + 1, j - 1)) res++;
      if (isValidCoord(i + 1, j) && isBomb(i + 1, j)) res++;
      if (isValidCoord(i + 1, j + 1) && isBomb(i + 1, j + 1)) res++;

      if (isValidCoord(i, j - 1) && isBomb(i, j - 1)) res++;
      if (isValidCoord(i, j + 1) && isBomb(i, j + 1)) res++;
      stringRes.push(res);
    }

    resFinal.push(stringRes);
  }

  return resFinal;
}

module.exports = minesweeper;
