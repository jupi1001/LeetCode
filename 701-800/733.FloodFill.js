/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  //Getting the current color
  const currColor = image[sr][sc];
  //If the color is already the same. We are done
  if (currColor === newColor) return image;

  function dfs(row, col) {
    //Firstly we check to see whether the current position (the row & col values)
    //is within the bounds of the grid.
    //If either value is less than 0 or greater than the array length we return from the function.
    //We also return if the color value is not the value that we are changing.
    if (row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] !== currColor) {
      return;
    }

    image[row][col] = newColor;

    dfs(row - 1, col); // top
    dfs(row + 1, col); // bottom
    dfs(row, col - 1); // left
    dfs(row, col + 1); // right

    return image;
  }

  return dfs(sr, sc);
};
