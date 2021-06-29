//编写一个程序，找到两个单链表相交的起始节点。
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

 // 暴力法   如果要我们要返回我们两个链表相交的节点 那一定也就是两个上边有相同的那个节点
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;
    let pA = headA;
    // 列举找到相同 时间复杂度较高
    while (pA) {
        let pB = headB;
        while (pB) {
            if (pA === pB) return pA;
            pB = pB.next;
        }
        pA = pA.next;
    }
};



// 哈希表 用空间换时间  先while一遍 把节点存储在Map里 同时Map操作肯定要会
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    const hashmap = new Map();

    let pA = headA;
    while (pA) {
        hashmap.set(pA, 1);
        pA = pA.next;
    }
    let pB = headB;
    while (pB) {
        if (hashmap.has(pB)) return pB;
        pB = pB.next;
    }
};



// 双指针 O(m+n) o1

// 这个其实并不难 就是让两个链表上都有指针走 如果有交点 一定会遇到

// 性能是最好的

var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    let pA = headA,
        pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA; // 返回具体的节点
};

