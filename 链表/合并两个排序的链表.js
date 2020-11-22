//输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则

function mergeLists(pHead1,pHead2) {
    if(!pHead1) {
        return pHead2
    }
    if(!pHead2) {
        return pHead2
    }
    let head;
    if(pHead1.val < pHead2.val) {
        head = pHead1
        pHead1.next = mergeLists(pHead1.next,pHead2)
    }else {
        head = pHead2
        pHead2.next = mergeLists(pHead1,pHead2.next)
    }
    return head
}
