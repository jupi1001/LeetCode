/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map.has(num)) {
      const j = map.get(num);
      if (i - j <= k) return true;
    }

    map.set(num, i);
  }

  return false;
};
