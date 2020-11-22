//判断一个链表是否为回文链表

function isPalindrome(head) {
    let dummy = new ListNode(0)
    dummy.next = head
    let slow = dummy,fast = dummy
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    let next = slow.next
    slow.next = null
    let newStart = reverse(null,next)
    for(let p = head,newP = newStart;newP != null;p = p.next,newP = newP.next) {
        if(p.val != newP.val) return false;
    }
}
let reverse = function(pre,cur) {
    if(!cur) return pre
    let next = cur.next
    cur.next = pre
    return reverse(cur,next)
}

