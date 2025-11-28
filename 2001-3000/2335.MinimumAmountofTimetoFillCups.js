/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  //Sort by descending
  amount.sort((a, b) => b - a);
  let count = 0;
  //As long as the cups are not empty
  while (amount[0] != 0 || amount[1] != 0 || amount[2] != 0) {
    //Counter to check if not twice removed
    let twice = 0;
    //Increase count
    count++;
    if (amount[0] != 0) {
      amount[0]--;
      twice++;
    }
    if (amount[1] != 0) {
      amount[1]--;
      twice++;
    }
    if (amount[2] != 0 && twice != 2) {
      amount[2]--;
    }
    //Sort again after decreasing
    amount.sort((a, b) => b - a);
  }
  return count;
};
