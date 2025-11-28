/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  //Result array
  let result = [];
  //Return empty if 0 row numbers
  if (numRows === 0) {
    return result;
  }

  //First row is always the same
  result.push([1]);
  //Row to remember last row
  let lastRow = [];
  //Loop for each row
  while (result.length < numRows) {
    //New row
    let newRow = [];
    //Always has 1 at the leftmost/start position
    newRow[0] = 1;

    //Loop for the cases between the start and end to calculate the middle numbers
    for (let index = 0; index < result.length - 1; index++) {
      //Newrow value is the lastRow + the right value of the last row
      //NewRow[index +1] since it start counting from position 1. Position 0 is always 1. See line 22.
      newRow[index + 1] = lastRow[index] + lastRow[index + 1];
    }

    //Always has 1 at the rightmost/end position
    newRow.push(1);
    //Add row to result array
    result.push(newRow);
    //Set last row new
    lastRow = newRow;
  }
  return result;
};
