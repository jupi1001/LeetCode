/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  if (grid == null || grid.length == 0 || grid[0].length == 0) return 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      //If cell is 1 it is land and gets calculated
      if (grid[i][j] == 1) return dfs(i, j, grid);
    }
  }

  return 0;
};

/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
let dfs = function (row, col, grid) {
  //If water or outside? Not sure
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
    return 1;
  }
  //If water
  if (grid[row][col] == 0) return 1;
  //If already visited no increase;
  if (grid[row][col] == -1) return 0;

  let count = 0;
  //Set it to -1. To mark visited
  grid[row][col] = -1;

  count += dfs(row - 1, col, grid); // top
  count += dfs(row + 1, col, grid); // bottom
  count += dfs(row, col - 1, grid); // left
  count += dfs(row, col + 1, grid); // right
  return count;
};
