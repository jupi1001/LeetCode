/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let counter = 0;
  for (let index = 0; index < t.length; index++) {
    if (t[index] == s[counter]) {
      counter++;
    }
  }
  return counter === s.length;
};
