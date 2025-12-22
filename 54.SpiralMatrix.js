/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix || matrix.length === 0) return [];

  const result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse right along top row
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++; // Move top boundary down

    // Traverse down along right column
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--; // Move right boundary left

    // Traverse left along bottom row
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--; // Move bottom boundary up
    }

    // Traverse up along left column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++; // Move left boundary right
    }
  }

  return result;
};