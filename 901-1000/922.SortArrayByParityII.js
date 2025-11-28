/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let even = [];
  let odd = [];
  let result = [];

  nums.forEach((number) => {
    if (number % 2 === 0) {
      even.push(number);
    } else {
      odd.push(number);
    }
  });

  for (let index = 0; index < nums.length; index++) {
    if (index % 2 === 0) {
      result.push(even.pop());
    } else {
      result.push(odd.pop());
    }
  }
  return result;
};
