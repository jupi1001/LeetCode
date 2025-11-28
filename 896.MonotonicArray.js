/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let result = true;
  //Last known number
  let lastNumber = nums[0];
  //If to know if ascending or descending
  if (nums[0] < nums[nums.length - 1]) {
    //Ascending Loop
    for (let index = 1; index < nums.length; index++) {
      //If lastNumber is bigger than current one => Not monotonic
      if (lastNumber > nums[index]) {
        result = false;
      }
      lastNumber = nums[index];
    }
  } else {
    //Descending Loop
    for (let index = 1; index < nums.length; index++) {
      //If lastNumber is smaller than current one => Not monotonic
      if (lastNumber < nums[index]) {
        result = false;
      }
      lastNumber = nums[index];
    }
  }

  return result;
};
