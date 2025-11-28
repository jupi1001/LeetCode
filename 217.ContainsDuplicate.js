/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let result = false;
  let map = new Map();

  for (let index = 0; index < nums.length; index++) {
    if (map.has(nums[index])) {
      result = true;
      break;
    }
    map.set(nums[index], 1);
  }

  return result;
};
