/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let result = true;

  let consecutiveDays = 0;
  let absentDays = 0;
  let threeDays = false;

  const sArray = s.split("");

  sArray.forEach((letter) => {
    if (letter === "P") {
      consecutiveDays = 0;
      //console.log("Case: P");
    }
    if (letter === "A") {
      absentDays++;
      consecutiveDays = 0;
      //console.log("Case: A");
    }
    if (letter === "L") {
      consecutiveDays++;
      //console.log("Case: L");
      //Special case for three days in a row and later are less than 3 days again in the same string.
      //This would otherwise reset the streak
      if (consecutiveDays === 3) {
        threeDays = true;
      }
    }
    console.log(letter + ":Status Absent: " + absentDays + "Status:" + consecutiveDays);
  });

  if (absentDays >= 2 || consecutiveDays >= 3 || threeDays == true) {
    result = false;
  }
  return result;
};
