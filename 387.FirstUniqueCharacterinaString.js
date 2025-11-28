/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const m = new Map();
  for (let index = 0; index < s.length; index++) {
    if (m.has(s[index])) {
      m.set(s[index], -1);
    } else {
      m.set(s[index], index);
    }
  }
  let firstUniqIndex = -1;
  for (const [key, index] of m) {
    if (index != -1) {
      firstUniqIndex = index;
      break;
    }
  }
  return firstUniqIndex;
};
