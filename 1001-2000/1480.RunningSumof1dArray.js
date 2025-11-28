/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let ans = [];
  //Var to remember last value
  let last = 0;
  for (let index = 0; index < nums.length; index++) {
    //Add value + old value
    ans.push(nums[index] + last);
    //Set new old value
    last = ans[index];
  }
  return ans;
};
