const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError("Not implemented");
  // проверка: строка или число;
  if (typeof sampleActivity !== "string" || isNaN(parseFloat(sampleActivity))) {
    return false;
  }
  // конвертация в число с плавающей точкой;
  const activ = parseFloat(sampleActivity);
  // проверка activ: меньше или равно 0, или больше или равно MODERN_ACTIVITY;
  if (activ <= 0 || activ >= MODERN_ACTIVITY) {
    return false;
  }
  // определение количества периодов полураспалда;
  const calc = 0.693 / HALF_LIFE_PERIOD;
  const time = Math.log(MODERN_ACTIVITY / activ) / calc;

  return Math.ceil(time); // возвращает возрасто с округлением до ближайшего целого числа;
}

module.exports = {
  dateSample,
};
