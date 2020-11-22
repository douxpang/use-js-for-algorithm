// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。

// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
// 给定这个链表：1->2->3->4->5
// 当 k = 2 时，应当返回: 2->1->4->3->5
// 当 k = 3 时，应当返回: 3->2->1->4->5

var reverseKGroup = function(head, k) {
    let pre = null, cur = head;
    let p = head;
    // 下面的循环用来检查后面的元素是否能组成一组
    for(let i = 0; i < k; i++) {
        if(p == null) return head;
        p = p.next;
    }
    for(let i = 0; i < k; i++){
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    // pre为本组最后一个节点，cur为下一组的起点
    head.next = reverseKGroup(cur, k);
    return pre;
};