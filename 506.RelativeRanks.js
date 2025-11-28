/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let sortArray = score.slice();
  sortArray.sort((a, b) => b - a);
  let result = [];

  for (let index = 0; index < sortArray.length; index++) {
    let j = sortArray.indexOf(score[index]);
    if (j === 0) {
      result.push("Gold Medal");
    }
    if (j === 1) {
      result.push("Silver Medal");
    }
    if (j === 2) {
      result.push("Bronze Medal");
    }
    if (j > 2) {
      result.push((j + 1).toString());
    }
  }

  return result;
};
