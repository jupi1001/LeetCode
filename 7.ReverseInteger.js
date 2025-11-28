/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = x < 0;
  let xString = Math.abs(x).toString().split("").reverse().join("");
  const num = Number(xString);
  //Assume the environment does not allow you to store 64-bit
  //Math.pow(2,31) => 64 bit integer
  if (isNegative && num > Math.pow(2, 31)) {
    return 0;
  }
  if (!isNegative && num > Math.pow(2, 31) - 1) {
    return 0;
  }
  return isNegative ? -num : num;
};
