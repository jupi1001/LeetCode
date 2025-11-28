/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  //Set so no duplicates are added
  let resultSet = new Set();

  //Determine which array is longer and loop through it
  if (nums1.length > nums2.length) {
    for (let index = 0; index < nums1.length; index++) {
      //Check if it is in the other array
      if (nums1.includes(nums2[index])) {
        resultSet.add(nums2[index]);
      }
    }
  } else {
    for (let index = 0; index < nums2.length; index++) {
      if (nums2.includes(nums1[index])) {
        resultSet.add(nums1[index]);
      }
    }
  }

  return Array.from(resultSet);
};
