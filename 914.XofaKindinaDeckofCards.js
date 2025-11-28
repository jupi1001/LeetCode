/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  if (deck.length === 1) return false;
  let map = new Map();

  //Add entry for new and increase count for existing values
  for (let index = 0; index < deck.length; index++) {
    if (!map.has(deck[index])) {
      map.set(deck[index], 1);
    } else {
      map.set(deck[index], map.get(deck[index]) + 1);
    }
  }
  //Convert to array
  table = [...map.values()];
  //Get max value
  const maxValue = Math.max(...table);

  for (let i = 2; i <= maxValue; i++) {
    if (table.every((el) => el % i === 0)) return true;
  }

  return false;
};
