/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minimum = prices[0];
  let maximum = 0;
  for (let i = 1; i < prices.length; i++) {
    minimum = Math.min(minimum, prices[i]);
    maximum = Math.max(maximum, prices[i] - minimum);
  }
  return maximum;
};
