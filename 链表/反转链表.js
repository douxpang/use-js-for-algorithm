//给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。 


// 递归写法
var reverseList = function(head) {
    if (head == null || head.next == null) return head;
    let last = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return last;
};


// 基础要会的链表算法 
function reverseNodeList(head) {
    let currentNode = null
    let headNode = head
    while(head && head.next) {
        currentNode = head.next    //把current先设置为第二个
        head.next = currentNode.next
        currentNode.next = headNode
        headNode = currentNode
    }
    return headNode
}

// 我更喜欢这种写法
var reverseList = function(head) {
    let prev = null,cur = head,next = head;
    while(cur !== null) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev
};