/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (val === element) {
      nums.splice(index, 1);
      index--;
    }
  }
};
