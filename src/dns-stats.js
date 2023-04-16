const { NotImplementedError } = require("../extensions/index.js");

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
  // throw new NotImplementedError('Not implemented');
  let resObj = {};
  domains.forEach((item) => {
    let arr = item.split(".").reverse();
    let subDomain = "";
    arr.forEach((item) => {
      subDomain = subDomain + "." + item;
      resObj.hasOwnProperty(subDomain)
        ? resObj[subDomain]++
        : (resObj[subDomain] = 1);
    });
  });
  return resObj;
}

module.exports = {
  getDNSStats,
};
