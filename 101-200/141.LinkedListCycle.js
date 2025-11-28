/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  //Copy the head incase we might want to use the original one later
  let current = head;
  //Array that saves the already visited nodes
  let visitedArray = [];

  //Run as  long as a next exist
  while (current && current.next) {
    //If Array has the node already it is a "cylce" and true
    if (visitedArray.includes(current)) {
      return true;
    }
    //Otherwise add node to array and save it for comparison
    visitedArray.push(current);
    //Set new current
    current = current.next;
  }
  return false;
};
