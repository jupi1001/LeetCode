/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  //Second array
  let array2 = [];
  let result = [];

  //Removing integers from the back
  for (let index = 0; index < n; index++) {
    array2.push(nums.pop());
  }

  // Reverse it so the newest element is at the start
  array2.reverse();

  //Add both element
  for (let index = 0; index < n; index++) {
    result.push(nums[index]);
    result.push(array2[index]);
  }

  return result;
};
