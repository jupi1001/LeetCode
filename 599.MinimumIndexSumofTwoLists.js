/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const myMap = new Map();
  let result = [];
  let min = null;
  //fill the map
  for (let i = 0; i < list1.length; i++) {
    myMap.set(list1[i], i);
  }

  for (let index = 0; index < list2.length; index++) {
    //if both list have the element
    if (myMap.has(list2[index])) {
      //Difference between indexes
      const diff = index + myMap.get(list2[index]);
      //First time
      if (min === null) {
        min = diff;
        result.push(list2[index]);
        //If the new element has a lower difference
        //New min, clear result list, add new item
      } else if (min > diff) {
        min = diff;
        result = [];
        result.push(list2[index]);
        //If same difference
      } else if (min === diff) {
        result.push(list2[index]);
      }
    }
  }

  return result;
};
