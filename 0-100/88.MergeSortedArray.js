/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  //Individual counters to know at which point we are in the array
  let first = m - 1;
  let second = n - 1;
  //Loop until we are through all counters
  for (i = m + n - 1; i >= 0; i--) {
    if (second < 0) {
      break;
    }
    //Compare arrays
    if (nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      first--;
    } else {
      nums1[i] = nums2[second];
      second--;
    }
  }
  return nums1;
};
