/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 0;
    let end = n - 1;

    // Iterate while start not meets end
    while (start <= end) {
      // Find the mid index
      let mid = Math.floor((start + end) / 2);
      //Get if the middle one is good
      let version = isBadVersion(mid);
      // If element is present at mid, return the position
      if (version !== isBadVersion(mid + 1)) {
        return mid + 1;
      } else if (version === false) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return start;
  };
};
