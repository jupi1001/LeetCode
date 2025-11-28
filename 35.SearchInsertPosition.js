//Basic Binary Search and returning the index
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return the position
    if (nums[mid] === target) return mid;
    // Else look in left or right half accordingly
    else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  //If not found in the number[] return the position where the search ends => Postion where it would
  //Be insertered
  return start;
};
