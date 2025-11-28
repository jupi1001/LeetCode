/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  function dfs(t1, t2) {
    if (t1 == null && t2 == null) {
      return true;
    }
    if (t1 == null || t2 == null || t1.val !== t2.val) {
      return false;
    }

    return dfs(t1.left, t2.left) && dfs(t1.right, t2.right);
  }

  return dfs(p, q);
};
