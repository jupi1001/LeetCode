/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  //Save beginning length for later
  const initalLength = nums.length;

  //Set to remove duplicates
  let tempSet = new Set(nums);

  //Get it back to an array
  nums = Array.from(tempSet);

  //Result array
  let result = [];

  for (let index = 1; index <= initalLength; index++) {
    if (!tempSet.has(index)) {
      result.push(index);
    }
  }
  return result;
};
