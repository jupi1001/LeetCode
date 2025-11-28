/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  //To string with radix 2 and pad it at the start
  n = n.toString(2).padStart(32, "0");
  let count = 0;
  for (let index = 0; index < n.length; index++) {
    //Count 1
    if (n[index] === "1") {
      count++;
    }
  }
  return count;
};
//Other solution using string manipulation
/** 
var hammingWeight = function(n) {
  return n.toString(2).split('0').join('').length;
};
*/
