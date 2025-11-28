/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  var count = 0;
  for (var i = 1; i < timeSeries.length; i++) {
    //If duration is bigger than the difference between the attacks
    if (timeSeries[i] - timeSeries[i - 1] > duration) {
      //If difference is bigger. The poison will run out. Add the full duration
      count += duration;
    } else {
      //If difference is smaller add just the difference between the seconds
      count += timeSeries[i] - timeSeries[i - 1];
    }
  }
  return count + duration;
};
