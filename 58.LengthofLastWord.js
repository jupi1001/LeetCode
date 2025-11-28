/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  //remove whitespaces at the end
  let cleanString = s.trimEnd();
  //Split the string into each word
  let arr = cleanString.split(" ");
  //Return the length of the last one
  return arr.pop().length;
};

//Other solution
/**
 
 var lengthOfLastWord = function(s) {
	// Will count the length of the word
    let count = 0;
    
	// We start from the back is we mostly care about the last word
    for (let i = s.length - 1; i >= 0; i--) {
		// Check if its empty and count is great than 0. If count is greater, then we already saw a word
        if (s[i] === " " && count > 0) return count;
		// If it's an empty string at the start of the back. We want to just conitnue down instead of adding it as a letter
        if (s[i] === " ") continue;
		// If it isn't an empty string, it means we are on the final word. Add it to the count and move on to the next index
        count++;
    }
   
    // return the length of the last word  
    return count;
};
 */
