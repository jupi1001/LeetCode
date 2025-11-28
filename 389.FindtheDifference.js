/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const S = s.split("").sort();
  const T = t.split("").sort();

  for (let i = 0; i < S.length; i++) {
    if (S[i] != T[i]) {
      return T[i];
    }
  }

  return T[T.length - 1];
};
