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
var mergeTwoLists = function (l1, l2) {
  let dummyHead = new ListNode();
  let currentPointer = dummyHead;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      currentPointer.next = l1;
      l1 = l1.next;
    } else {
      currentPointer.next = l2;
      l2 = l2.next;
    }
    currentPointer = currentPointer.next;
  }

  while (l1) {
    currentPointer.next = l1;
    l1 = l1.next;
    currentPointer = currentPointer.next;
  }

  while (l2) {
    currentPointer.next = l2;
    l2 = l2.next;
    currentPointer = currentPointer.next;
  }
  return dummyHead.next;
};
