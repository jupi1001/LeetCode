/** 
Splite the magazine string into an array
Loop through each character in the ransomNote string
If the current ransomNote character can't be found in the array, break the loop and return false
If the current ransomNote character is found in the array, splice that character out of the array for future checks
If the loop completes, return true
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  var magazineArray = magazine.split("");
  for (let index = 0; index < ransomNote.length; index++) {
    if (magazineArray.indexOf(ransomNote[index]) === -1) {
      return false;
    } else {
      magazineArray.splice(magazineArray.indexOf(ransomNote[index]), 1);
    }
  }
  return true;
};
