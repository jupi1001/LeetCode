/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  let evenArr = [];
  let oddArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      evenArr.push(nums[i]);
    } else {
      oddArr.push(nums[i]);
    }
  }

  evenArr = evenArr.sort((a, b) => a - b);
  oddArr = oddArr.sort((a, b) => b - a);

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result.push(evenArr.shift());
    } else {
      result.push(oddArr.shift());
    }
  }

  return result;
};
