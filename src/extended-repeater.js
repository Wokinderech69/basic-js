const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  if (typeof str !== "string") {
    str = String(str);
  }

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  const add = options.addition !== undefined ? String(options.addition) : "";
  const addRepeatTimes = options.additionRepeatTimes || 1;
  const addSeparator = options.additionSeparator || "|";

  let repeatAdd = "";
  if (addRepeatTimes > 0) {
    repeatAdd = new Array(addRepeatTimes).fill(add).join(addSeparator);
  }
  return new Array(repeatTimes).fill(str + repeatAdd).join(separator);
}

module.exports = {
  repeater,
};
