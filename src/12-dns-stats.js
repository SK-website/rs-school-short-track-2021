/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const container = [];
  let str = '';

  function calcStr(s) {
    const foundEl = container.find((el) => el.domain === s);
    if (foundEl) {
      foundEl.counter++;
    } else {
      container.push({ domain: s, counter: 1 });
    }
  }

  for (let i = 0; i < domains.length; i++) {
    const temp = domains[i].split('.');
    str = '';
    while (temp.length) {
      if (str === '') str = `.${temp.pop()}`;
      else str = `${str}.${temp.pop()}`;
      calcStr(str);
    }
  }
  const res = {};
  container.forEach((el) => {
    res[el.domain] = el.counter;
  });
  return res;
}

module.exports = getDNSStats;
