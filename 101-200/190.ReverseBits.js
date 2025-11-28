const internal = require("stream");

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  //ParseInt(,2) => make it to an integer again with the radix 2
  //toString(2) => Make the number an integer with a radix(base of number)
  //padStart(32,"0") => Make sure the string has a length of 32 and fill the rest of it in the start with
  //leading 0(zeros)
  //split() & join() to use reverse()
  let digit = parseInt(n.toString(2).padStart(32, "0").split("").reverse().join(""), 2);
  return digit;
};
