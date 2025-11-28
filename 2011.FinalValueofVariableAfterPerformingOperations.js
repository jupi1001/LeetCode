/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let result = 0;
  for (let index = 0; index < operations.length; index++) {
    //Char at since we know it is always at position 1
    //Includes and checking for a + would also work
    if (operations[index].charAt(1) === "+") {
      result++;
    } else {
      result--;
    }
  }
  return result;
};
