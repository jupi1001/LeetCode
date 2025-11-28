/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i += 1) {
        const gain = prices[i] - prices[i - 1];
        if (gain > 0) profit += gain;
    }

    return profit;
};