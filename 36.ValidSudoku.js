/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //Check rows
  for (let i = 0; i < 9; i++) {
    const set = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        // If the number already exists in the set, it's a duplicate
        if (set.has(board[i][j])) {
          return false;
        }
        set.add(board[i][j]);
      } else {
        set.add(j + 10); // Unique value for each "." position
      }
    }
    if (set.size !== 9) {
      return false;
    }
  }
  //Check columns
  for (let j = 0; j < 9; j++) {
    const set = new Set();
    for (let i = 0; i < 9; i++) {
      if (board[i][j] !== ".") {
        if (set.has(board[i][j])) {
          return false;
        }
        set.add(board[i][j]);
      } else {
        set.add(i + 10); // Unique value for each "." position
      }
    }
    if (set.size !== 9) {
      return false;
    }
  }
  //Check 3x3 sub-boxes
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const set = new Set();
      for (let i = boxRow * 3; i < boxRow * 3 + 3; i++) {
        for (let j = boxCol * 3; j < boxCol * 3 + 3; j++) {
          if (board[i][j] !== ".") {
            if (set.has(board[i][j])) {
              return false;
            }
            set.add(board[i][j]);
          } else {
            set.add((i % 3) * 3 + (j % 3) + 10); // Unique value for each "." position
          }
        }
      }
      if (set.size !== 9) {
        return false;
      }
    }
  }

  return true;
};