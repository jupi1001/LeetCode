/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //Replace Whitespaces
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  //To lowercase
  s = s.toLowerCase();
  //Make two pointers and move them towards another
  for (let [i, j] = [0, s.length - 1]; i < j; ) {
    //Compare the two positions
    if (s[i] != s[j]) {
      //Not equal = no palindrome
      return false;
    }
    i++;
    j--;
  }
  //Looped without early return = palindrome
  return true;
};
