/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  //The majority element is the element that appears more than ⌊n / 2⌋ times.
  const half = Math.round(nums.length / 2);

  for (let index = 0; index < nums.length; index++) {
    //Increase the count or set it to 1
    map[nums[index]] = map[nums[index]] + 1 || 1;
    //Return if count reaches half
    if (map[nums[index]] === half) {
      return nums[index];
    }
  }
};
