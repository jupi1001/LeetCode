/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  const minHeight = ops.reduce((acc, cur) => Math.min(acc, cur[0]), m);
  const minWidth = ops.reduce((acc, cur) => Math.min(acc, cur[1]), n);
  return minHeight * minWidth;
};
