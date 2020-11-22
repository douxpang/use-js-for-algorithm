// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
// 给定 1->2->3->4, 你应该返回 2->1->4->3.

//循环模式
function swapPairs(head) {
    if(!head || !head.next) return head
    let dummy = new ListNode(0)
    dummy.next = head
    let p = dummy
    let node1,node2;
    while((node1 = p.next) && (node2 = p.next.next)) {
        node1.next = node2.next
        node2.next = node1
        p.next = node2
        p = node1
    } 
    return dummy.next
}

//递归模式

function swapPairs(head) {
    if(!head || !head.next) return head
    let node1 = head,node2 = head.next
    node1.next = swapPairs(node2.next)
    node2.next = node1
    return node2
}