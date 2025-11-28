/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  //Regex to get rid of all the special characters
  var regex = /[.,!?;'"\s]/g;
  //Array out of the input and formatted
  let parray = paragraph.replace(regex, " ").toLowerCase().split(" ");
  //Map for counting words
  let map = new Map();
  //Result array
  let result = [];

  //Loop through the paragraph
  for (let index = 0; index < parray.length; index++) {
    //Increase counter if word already found
    if (map.has(parray[index])) {
      map.set(parray[index], map.get(parray[index]) + 1);
    } else {
      map.set(parray[index], 1);
    }
  }
  //Sort it by descending
  const mapSort1 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  //Loop through map
  mapSort1.forEach((value, key) => {
    //Add to result array if not banned and not a whitespace
    if (key !== " " && key !== "" && !banned.includes(key)) result.push(key);
  });
  //Return the first element
  return result[0];
};
