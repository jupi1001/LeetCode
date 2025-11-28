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
 * @return {number}
 */
var maxDepth = function (root) {
  let result = countTree(root);
  return result;
};

function countTree(treeNode) {
  if (treeNode == null) {
    return 0;
  }
  let countRight = countTree(treeNode.right) + 1;
  let countLeft = countTree(treeNode.left) + 1;

  return Math.max(countLeft, countRight);
}
