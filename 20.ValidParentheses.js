/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  const legend = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let index = 0; index < s.length; index++) {
    if (s[index] == "(" || s[index] == "{" || s[index] == "[") {
      stack.push(s[index]);
    } else if (legend[stack.pop()] !== s[index]) {
      return false;
    }
  }
  return !stack.length;
};
