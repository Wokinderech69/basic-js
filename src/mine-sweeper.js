const { NotImplementedError } = require("../extensions/index.js");

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
  // throw new NotImplementedError('Not implemented');
  const output = [];
  const rows = matrix.length;
  const colums = matrix[0].length;

  for (let row = 0; row < rows; row++) {
    output.push([]);
    for (let colum = 0; colum < colums; colum++) {
      let count = 0;
      for (
        let x = Math.max(0, row - 1);
        x <= Math.min(row + 1, rows - 1);
        x++
      ) {
        for (
          let y = Math.max(0, colum - 1);
          y <= Math.min(colum + 1, colums - 1);
          y++
        ) {
          if (x === row && y === colum) continue;
          if (matrix[x][y]) count++;
        }
      }
      output[row].push(count);
    }
  }
  return output;
}

module.exports = {
  minesweeper,
};
