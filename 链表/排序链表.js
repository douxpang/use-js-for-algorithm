// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

// 进阶：

//     你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

//  nlogn时间复杂度可以满足  常数空间复杂度没满足

/**
 * @param {ListNode} head
 * @return {ListNode}
 */



var sortList = function(head) {
    return toSortList(head, null);
};

// 写一个查找中点的函数 用递归的方式 把每一个分开的链表归并
const toSortList = (head, tail) => {
    if (head === null) {
        return head;
    }
    if (head.next === tail) {
        head.next = null;
        return head;
    }
    let slow = head, fast = head;
    while (fast !== tail) {
        slow = slow.next;
        fast = fast.next;
        if (fast !== tail) {
            fast = fast.next;
        }
    }
    const mid = slow;
    return merge(toSortList(head, mid), toSortList(mid, tail));
}
// 再写一个用来归并的函数 就用之前 的链表排序的方法
function merge(list1,list2) {

    let dummyHead = new ListNode(0) 
    let temp = dummyHead,temp1 = list1,temp2 = list2;
    // 不能用 ！temp1 判断 会有问题 没太懂
    while(temp1!==null && temp2 !== null) {
        if (temp1.val <= temp2.val) {
            temp.next = temp1;
            temp1 = temp1.next;
        } else {
            temp.next = temp2;
            temp2 = temp2.next;
        }
        temp = temp.next;
    }
     if (temp1 !== null) {
        temp.next = temp1;
    } else if (temp2 !== null) {
        temp.next = temp2;
    }
    return dummyHead.next;
}
