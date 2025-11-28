/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let map = new Map();

  for (let index = 0; index < 32; index++) {
    map.set(Math.pow(2, index));
  }

  return map.has(n);
};
