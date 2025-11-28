/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  //Sort array
  nums.sort((a, b) => a - b);
  //Answer array
  let answer = [0, 0];
  //Index  for running in the array
  let index = 0;
  //If only 1 element
  if (nums.length === 1) return [0, 1];

  while (index < nums.length) {
    //If 2 of the same number are next to each other
    if (nums[index] === nums[index + 1]) {
      //Increase found pairs
      answer[0]++;
      //Increase index since we are skipping the next number. With the increment at the end => +2
      index++;
    } else {
      //If not two of the same numbers increase elements lefts
      answer[1]++;
    }
    //Iterate index
    index++;
  }
  return answer;
};
