/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let max = 0;
  for (let index = 0; index < sentences.length; index++) {
    //Check if the number of words is more
    if (sentences[index].trim().split(" ").length > max) {
      //Set new max
      max = sentences[index].trim().split(" ").length;
    }
  }
  return max;
};
