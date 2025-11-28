/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  //Lowercase array
  let tArray = title.toLowerCase().split(" ");

  for (let index = 0; index < tArray.length; index++) {
    //If the word is longer than 2 letters make the first letter uppercase
    if (tArray[index].length > 2) {
      //Set the new word with the first letter uppercase + sliced the rest to it
      tArray[index] = tArray[index][0].toUpperCase() + tArray[index].slice(1);
    }
  }
  return tArray.join(" ");
};
