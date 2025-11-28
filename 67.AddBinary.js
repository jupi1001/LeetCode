/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = [];

  while (i >= 0 || j >= 0 || carry > 0) {
    const bitA = i >= 0 ? a[i] - '0' : 0;
    const bitB = j >= 0 ? b[j] - '0' : 0;

    const sum = bitA + bitB + carry;

    result.push(sum % 2);

    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result.reverse().join('');
};