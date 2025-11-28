/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let answer = [];

  for (let index = 1; index <= n; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
      answer.push("FizzBuzz");
    } else if (index % 3 == 0) {
      answer.push("Fizz");
    } else if (index % 5 == 0) {
      answer.push("Buzz");
    } else {
      answer.push(index.toString());
    }
  }
  return answer;
};
