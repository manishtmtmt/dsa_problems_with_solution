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
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to serve as the head of the merged list
    const dummy = new ListNode(0);
    let current = dummy;
    
    // Traverse both lists and add the smaller value to the merged list
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // Add the remaining nodes from the non-empty list to the merged list
    if (list1) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    
    // Return the merged list (excluding the dummy node)
    return dummy.next;
};