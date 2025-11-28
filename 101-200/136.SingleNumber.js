/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //Set to compare
  let compareSet = new Set();
  //Loop through the nums array
  for (let index = 0; index < nums.length; index++) {
    //Check if set already has that number
    if (compareSet.has(nums[index])) {
      //If yes remove it
      compareSet.delete(nums[index]);
    } else {
      //Add it to the set if it is the only one currently
      compareSet.add(nums[index]);
    }
  }
  //Last number in the set didn't get removed and does not have a second pair
  return compareSet.values().next().value;
};
