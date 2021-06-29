//判断一个链表是否为回文链表

//1.  使用函数调用栈作为遍历栈

// 这个思想应该大家都觉得不难  就是走到末尾 和连标头部的一一比对 只要全部true 那就是回文的

// 所以 用&& 去接管逻辑 
function isPalindrome(head) {
    let left = head; // 保存一下链表

    function traverse(right) {
        if(right == null) return true;  //一直到到链表尾部
        let res = traverse(right.next);

        res = res && (left.val === right.val); // 从链表首部和尾部开始比对 一直往中间
        left = left.next;
        return res;
    }

    return traverse(head)
}


//2  

// 这个的思路 需要写一个 找到链表center之后的部分 然后reverse 所以写一下这两个函数 之后的逻辑就简单了 就是比对
function isPalindrome(head) {
    let right = reverse(findCenter(head));
    let left = head;

    while(right != null) {
        if(left.val !== right.val) {
            return false
        }
        left = left.next;
        right = right.next;
    }
    return true
}
// 用快慢指针 去整一下  这个也是要会的基础操作
function findCenter(head) {
    let slower = head,faster = head;
    while(faster && faster.next !== null) {
        slower = slower.next;
        faster = faster.next.next
    }
    // 这种时候分两种情况 如果faster刚好是最后一个 那说明还没出去 是个奇数 反之偶数
    if(faster != null) {
        slower = slower.next
    }
    return slower
}
// 要会的基础操作
function reverse(head) {
    let prev = null,cur = head,next = head;
    while(head != null) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next

    }
    return prev
}







// 3.

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
// 对区域列表进行反转
let reverse = function(pre,cur) {
    if(!cur) return pre
    let next = cur.next
    cur.next = pre
    return reverse(cur,next)
}



