/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  //Count elements in LinkedList
  let headCopy = head;
  let count = 1;
  while (headCopy.next) {
    headCopy = headCopy.next;
    count++;
  }
  //Get Middle number
  count = parseInt(count / 2);

  //Count until middle position and set the head each time.
  for (let index = 0; index < count; index++) {
    head = head.next;
  }
  //Return the rest of the LinkedList => Head with the next Heads
  return head;
};
