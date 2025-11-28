/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  //Check if all lowercase
  if (word === word.toLowerCase()) {
    return true;
  }
  //Check if all uppercase
  if (word === word.toUpperCase()) {
    return true;
  }
  //Check if only the first letter is uppercase
  if (word[0] === word[0].toUpperCase()) {
    for (let index = 1; index < word.length; index++) {
      if (word[index] === word[index].toUpperCase()) {
        return false;
      }
    }
    return true;
  }
  return false;
};
