/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  for (let index = 0; index < Math.sqrt(n); index++) {
    if (n === Math.pow(3, index)) {
      return true;
    }
  }
  return false;
};
