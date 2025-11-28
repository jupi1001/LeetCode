/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i != -1; i--) {
    //Check if it is a 9
    if (digits[i] != 9) {
      //Plus one the last digit and return
      digits[i] += 1;
      return digits;
    }
    //It is a 9 then make it a 0
    digits[i] = 0;
  }
  //Getting here means everything was a 9, so it's now all 0's, meaning we should add a 1 in front.
  digits.unshift(1);
  return digits;
};
