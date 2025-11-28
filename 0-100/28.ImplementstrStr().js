/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  //Early cases/returns
  if (!needle) return 0;
  if (!haystack) return -1;
  if (haystack.length < needle.length) return -1;
  if (haystack === needle) return 0;

  //Loop through the haystack

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    //check if have a match
    //Make the loop integer outside so we can return it later
    let j = 0;
    for (; j < needle.length; j++) {
      //Index + i to match the comparison of the haystack to the needle string
      // For example if it starts matching at index 2
      // abcdef
      // cdef
      // Haystack needs to start comparing with the needle string at index 2, which is the index from
      //the outer loop. i is still 0 and will move with both strings to compare them
      // If they are not matching anymore stop comparing
      if (needle[j] !== haystack[i + j]) break;
    }
    //Check if the compared letters match the length of the needle

    if (j === needle.length) return i;
  }
  //If not found return -1

  return -1;
  /**
   * Regex solution
   const regex = new RegExp(`${needle}`)
    const str = haystack
    const match = regex.exec(str)
    
    if(!match) return -1
        
    return match.index
   */
};
