/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let count = 0;
  //Double loop to compare the number to the rest of the array
  for (let index = 0; index < nums.length; index++) {
    //Start comparing at the next index
    for (let j = index + 1; j < nums.length; j++) {
      if (nums[index] === nums[j]) count++;
    }
  }
  return count;
};
