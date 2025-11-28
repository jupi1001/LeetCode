/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  if (k === 1) return s;
  const S = s.split("");
  let d = k * 2;
  let j = k,
    res = [];
  for (let i = 0; i < S.length; i += d) {
    const arr = S.slice(i, i + d);
    const firstHalf = arr.slice(0, k);
    firstHalf.reverse();
    res.push(...firstHalf);
    const secondHalf = arr.slice(k);
    res.push(...secondHalf);
  }
  return res.join("");
};
