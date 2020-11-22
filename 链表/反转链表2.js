//反转从m到n的链表
var reverseBetween = function(head, m, n) {
    let dummy = new ListNode(0)  //创建一个虚拟链表
    dummy.next = head   
    let tempHead = dummy    //来一个临时链表
    for(let i = 0;i < m - 1;i++) {
        tempHead = tempHead.next     //临时链表放到需要开始转换位置的前面开始
    }
    let cur = tempHead.next
    let pre = null
    for(let i =0;i <= n - m;i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    tempHead.next.next = cur      //cur即使反转部分的链表
    tempHead.next = pre
    return dummy.next
};