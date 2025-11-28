/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  //Common Prefix
  let r = "";
  //Outer loop to loop through all the strings
  for (let i = 0; i < strs[0].length; i++) {
    //Inner loop to compare the individual letters
    for (let j = 1; j < strs.length; j++) {
      //Compare the letters with each of the i position in all of the strings in the array
      //Compare with string at position 1 first then 2 ...
      //If not same return r
      if (strs[0][i] !== strs[j][i]) return r;
    }
    //Add the letter to the prefix after a full round of comparison of the strings in the array
    r += strs[0][i];
  }
  return r;
};
