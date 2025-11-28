/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //Current sum
  let sum = 0;
  //Highest sum reached
  let maxSum = Number.MIN_SAFE_INTEGER;

  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    //Add current position to current sum
    sum += nums[i];
    //Check if it is better than the higest sum reached
    maxSum = Math.max(maxSum, sum);
    //If sum is negative set it to 0. Otherwise keep it
    sum = sum < 0 ? 0 : sum;
  }
  return maxSum;
};
