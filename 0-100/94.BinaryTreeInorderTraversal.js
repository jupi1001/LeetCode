/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let result = [];

  //Function inside main funtion
  function inOrder(node) {
    //If no more node. Return
    if (!node) {
      return;
    }
    //Call left first and then add to array. Order from leetcode. Right is added after left
    //Call again for left side
    inOrder(node.left);
    //Add value
    result.push(node.val);
    //Call again for Right side
    inOrder(node.right);
  }

  //Function call after defining it
  inOrder(root);

  return result;
};
