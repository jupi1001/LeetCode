/**
 * Explanation: We need to give each child at least 1 candy. Then we need to check the left and right neighbors to see if we need to give more candies.
 * We need to check the left neighbor because if the current child has a higher rating than the left neighbor, we need to give more candies to the current child.
 * We need to check the right neighbor because if the current child has a higher rating than the right neighbor, we need to give more candies to the current child.
 * We need to check both neighbors because we need to make sure that the current child has more candies than the left and right neighbors.
 * We need to return the total number of candies given to the children.
 * 
 * Input: ratings = [1,0,2]
 * Output: 5
 * Explanation: We give the child with rating 1 2 candies, the child with rating 0 1 candy, and the child with rating 2 2 candies.
 * The total number of candies given is 5.
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length;
  const candies = new Array(n).fill(1);
  let hasChanges = true;

  while (hasChanges) {
    hasChanges = false;

    for (let i = 0; i < n; i++) {
      // Check left neighbor
      if (i > 0 && ratings[i] > ratings[i - 1] && candies[i] <= candies[i - 1]) {
        candies[i] = candies[i - 1] + 1;
        hasChanges = true;
      }

      // Check right neighbor
      if (i < n - 1 && ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
        candies[i] = candies[i + 1] + 1;
        hasChanges = true;
      }
    }
  }

  return candies.reduce((sum, val) => sum + val, 0);
};

/**
 * Improved version: Two-pass approach
 * Time Complexity: O(n) - single pass left-to-right, single pass right-to-left
 * Space Complexity: O(n) - for the candies array
 * 
 * Approach:
 * 1. First pass (left to right): Ensure each child has more candy than their left neighbor
 *    if they have a higher rating
 * 2. Second pass (right to left): Ensure each child has more candy than their right neighbor
 *    if they have a higher rating, taking the maximum of current value and required value
 * 
 * This guarantees all constraints are satisfied in just 2 passes instead of potentially
 * many iterations.
 */
var candyImproved = function (ratings) {
  const n = ratings.length;
  const candies = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  return candies.reduce((sum, val) => sum + val, 0);
};