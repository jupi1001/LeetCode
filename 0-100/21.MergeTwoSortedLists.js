/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  //Create a result array
  let result = new ListNode();
  //Keep a var pointing to the start of the list since result will get moved down as items are added
  let head = result;
  // Select the smallest value from either linked list,
  // then increment that list forward.
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      result.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      result.next = new ListNode(list2.val);
      list2 = list2.next;
    }

    result = result.next;
  }

  // It's possible that one linked list is shorter than the other so we just
  // add on the remainder of the last linked list. It's already sorted :)
  if (list1 !== null) result.next = list1;
  if (list2 !== null) result.next = list2;

  // return .next because this first element in the linkedlist is empty
  return head.next;
};
