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
var addTwoNumbers = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    let value = new ListNode(0);
    let values = value;
    let additions = 0;
    while (l1 || l2) {
        let total = 0;
        if (l1) {
            total += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            total += l2.val;
            l2 = l2.next;
        }

        total += additions;
        if (total > 9) {
            additions = 1;
            total -= 10;
        } else {
            additions = 0;
        }
        values.next = new ListNode(total);
        values = values.next;


    }
    if (additions) {
        values.next = new ListNode(additions);
    }
    return value.next;
};