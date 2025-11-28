/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  //Array to split the num into single digits
  let array = num.toString().split("");
  //Sort array by value, ascending
  let sortedArray = array.sort((a, b) => a - b);
  //Return the lowest number + third lowers  +  second lowest + highest
  return Number(sortedArray[0] + sortedArray[2]) + Number(sortedArray[1] + sortedArray[3]);
};
