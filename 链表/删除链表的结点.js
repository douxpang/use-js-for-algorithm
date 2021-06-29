// 输入: head = [4,5,1,9], val = 5
// 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.


var deleteNode = function(head, val) {

    if (head.val === val) return head.next

    let prev = head, node = prev.next

    while (node) {
        if (node.val === val) {
            prev.next = node.next
        }
        prev = node
        node = node.next
    }

    return head
};