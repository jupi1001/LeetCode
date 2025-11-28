/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const List = new ListNode();

  let carry = 0;

  let head = List;

  while (l1 !== null || l2 !== null) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;

    head.next = new ListNode(sum % 10);
    head = head.next;

    carry = (sum - (sum % 10)) / 10;

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  if (carry > 0) {
    head.next = new ListNode(carry);
  }

  return List.next;
};
