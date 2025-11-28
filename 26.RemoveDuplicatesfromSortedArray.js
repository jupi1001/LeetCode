/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let currentNumber = nums[0];
  let counter = 0;

  for (let index = 1; index < nums.length; index++) {
    const element = nums[index];
    if (currentNumber === element) {
      nums.splice(index, 1);
      counter++;
      index--;
    }
    currentNumber = element;
  }

  //No return since I am manipulating the original input
  //But wrong description. Otherwise return counter
  // return counter;
};
