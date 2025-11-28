/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  const dict = [5, 3, 2];

  for (let i = 0; i < dict.length && n > 1; i++) {
    while (n % dict[i] === 0) n = n / dict[i];
  }
  return n === 1;
};
