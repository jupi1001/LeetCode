/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const mappings = {};
  let result = [];

  for (const index in mat) {
    mappings[index] = countOnes(mat[index]);
  }
  const keys = Object.keys(mappings);
  const hierarchy = keys.sort((a, b) => {
    if (mappings[a] < mappings[b]) return -1;
    if (mappings[a] > mappings[b]) return 1;
    return a - b;
  });
  for (let i = 0; i < k; i++) result.push(hierarchy[i]);
  return result;
};

const countOnes = (values) => {
  let count = 0;
  for (const val of values) {
    if (val === 1) count++;
  }
  return count;
};
