/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let wordsArray = s.split(" ");
  let reverseWords = wordsArray.map((word) => word.split("").reverse().join(""));
  return reverseWords.join(" ");
};
