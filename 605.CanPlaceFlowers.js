/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  //Loop through array
  for (let i = 0; i < flowerbed.length; i++) {
    //If n = 0 no more looping. Return
    if (n === 0) return true;
    //Flower conditions
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      //Plant flower and reduce flowers to plant
      flowerbed[i] = 1;
      n--;
    }
  }
  //Check if n is 0 and return if all flowers were planted
  return n === 0;
};
