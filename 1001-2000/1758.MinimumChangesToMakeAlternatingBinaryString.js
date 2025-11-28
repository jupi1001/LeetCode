function minOperations(s) {
  let count1 = 0,
    count2 = 0;
  for (let i = 0; i < s.length; i++) {
    if ((s[i] === "0") === (i % 2 === 0)) {
      count1++;
    } else {
      count2++;
    }
  }
  return Math.min(count1, count2);
}
