/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = [];

  function getNumber(item, i) {
    let n = 0;

    for (let j = 0; j < i; j++) {
      if (names[j] === item) n++;
    }
    return n;
  }

  for (let i = 0; i < names.length; i++) {
    const suf1 = getNumber(names[i], i);
    let fileName = '';
    if (suf1 > 0) {
      fileName = `${names[i]}(${suf1})`;
    } else {
      fileName = names[i];
      const resN = res.filter((el) => el === fileName);
      if (resN.length > 0) {
        fileName = `${fileName}(1)`;
      }
    }
    res.push(fileName);
  }
  return res;
}
module.exports = renameFiles;
