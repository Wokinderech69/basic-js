const { NotImplementedError } = require("../extensions/index.js");

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
  // throw new NotImplementedError('Not implemented');
  let count = 1;
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++; // увеличение стчетчика  при усллови, что текущий и следующий счетчик одинаковые
    } else {
      res += count > 1 ? count + str[i] : str[i]; // добавление счетчика и символа в строку результата
      count = 1; // сбрасывает счетчик
    }
  }
  return res;
}

module.exports = {
  encodeLine,
};
