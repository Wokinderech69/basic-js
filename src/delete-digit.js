const { NotImplementedError } = require("../extensions/index.js");

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
  // throw new NotImplementedError("Not implemented");
  const strNum = n.toString();
  let maxNum = 0;
  for (let i = 0; i < strNum.length; i++) {
    const num = Number(strNum.slice(0, i) + strNum.slice(i + 1));
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit,
};
