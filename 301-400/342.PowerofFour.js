/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  for (let index = 0; index < Math.sqrt(n); index++) {
    if (n === Math.pow(4, index)) {
      return true;
    }
  }
  return false;
};
