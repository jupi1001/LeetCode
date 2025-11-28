/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  //Array for shift and push operations
  let sArray = s.split("");
  //Loop
  for (let index = 0; index < sArray.length; index++) {
    //If the same => done
    if (sArray.join("") === goal) return true;
    //Remove first element and add it to the end
    let temp = sArray.shift();
    sArray.push(temp);
  }
  //Compare again
  return sArray.join("") === goal;
};
