// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。

// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 进阶：

//     你可以设计一个只使用常数额外空间的算法来解决此问题吗？
//     你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */


// 大概想到了两种方式去写 其实都是要用基础的反转  
// 第一个想到的是 反复分成k等分份去调反转函数

var reverseKGroup = function(head, k) {
    let a = head, b = head;
    for (let i = 0; i < k; i++) {
        if (b == null) return head;
        b = b.next;
    }
    const newHead = reverse(a, b);
    console.log('a',a)    // a[1] a[3]
    console.log('b',b)    //b [3,4,5]  b [5]
    a.next = reverseKGroup(b, k);
    return newHead;
};
// 对之前的做一些改造 其实也是一个道理 把界限变成b
function reverse(a, b) {
    let prev = null, cur = a, nxt = a;
    while (cur != b) {
        nxt = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nxt;
    }
    return prev;
}







//  觉得 这是更聪明的做法  在本链表上就可以了
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