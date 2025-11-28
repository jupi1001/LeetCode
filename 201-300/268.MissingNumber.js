/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  //Loop through the nums array
  for (let index = 0; index < nums.length; index++) {
    //Check if the array has the current index. Meaning the numbers 0,1,2,...
    if (!nums.includes(index)) {
      //If not then return and say that number is missing
      return index;
    }
  }
  //If no missing number is found then the numbers lenght is the "missing" Number
  return nums.length;
};
