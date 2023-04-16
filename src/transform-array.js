const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError("Not implemented");
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const arrTransform = [];
  let discard = false;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const prev = arr[i - 1];
    const doblePrev = arr[i - 2];
    const next = arr[i + 1];

    if (discard) {
      discard = false;
      continue;
    }

    switch (arr[i]) {
      case "--discard-next":
        discard = true;
        break;
      case "--discard-prev":
        if (arrTransform.length > 0 && doblePrev !== "--discard-next") {
          arrTransform.pop();
        }
        break;
      case "--double-next":
        if (i < arr.length - 1) {
          arrTransform.push(next);
        }
        break;
      case "--double-prev":
        if (i > 0 && doblePrev !== "--discard-next") {
          arrTransform.push(prev);
        }
        break;
      default:
        arrTransform.push(current);
        break;
    }
  }

  return arrTransform;
}

module.exports = {
  transform,
};
