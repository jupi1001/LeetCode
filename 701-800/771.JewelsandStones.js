/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  //Loop
  for (let index = 0; index < stones.length; index++) {
    //Compare if the stone is in the jewels array
    if (jewels.includes(stones[index])) {
      count++;
    }
  }
  return count;
};
