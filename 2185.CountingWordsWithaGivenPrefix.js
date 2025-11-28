/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let count = 0;
  for (let index = 0; index < words.length; index++) {
    if (words[index].startsWith(pref)) count++;
  }
  return count;
};
