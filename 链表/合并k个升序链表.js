//给你一个链表数组，每个链表都已经按升序排列。

//请你将所有链表合并到一个升序链表中，返回合并后的链表。
// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */



// 这道题 我们之前做过一个类似的 或者说 一个简单的前置  ：合并两个排序链表

//  第一种 可能是我们觉得很简单的一种 把他们打平放到一个数组里进行排序 然后再转换成链表




//  一个大佬的代码 很简洁了
var mergeKLists = function(lists) {
    return lists.reduce((p, n) => {
        // 这里真的很简洁厉害
        while (n) {
            p.push(n), n = n.next
        }
        return p
    },[]).sort((a, b) => a.val - b.val).reduceRight((p, n) => (n.next = p, p = n, p), null)
};

// 为了 第一次看 思路方便 把它分步了
var mergeKLists = function(lists) {
    let ans = lists.reduce((pre,cur) => {
        while(cur) {
            //  这里是很多同学刚开始想不清的 不要push cur.val  二是push节点！
            pre.push(cur);
            cur = cur.next
        }
        return pre
    },[])
    ans.sort((a,b) => a.val - b.val);
    //reduceRight其实和reduce一个道理 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight
    return ans.reduceRight((pre,cur) => {
        cur.next = pre
        pre = cur
        return pre
    },null)
};



// 第二种 借鉴合并两个的思路 

var mergeKLists = function(lists) {
    // 最初写的时候 这里疏忽了 给ans赋值了个[] 那样会报错 因为mergeKTwo用的是链表
    let ans = null;
    for(let i = 0;i < lists.length;i++) {
        ans = mergeKTwo(ans,lists[i])
    }
    return ans
    
};
// 这里要递归一下啊 找到每个的位置
function mergeKTwo(list1,list2) {
    //结束条件
    if(!list1) {
        return list2
    }
    if(!list2) {
        return list1
    }
    let head;
    if(list1.val < list2.val) {
        list1.next = mergeKTwo(list1.next,list2);
        head = list1
    }else {
        list2.next = mergeKTwo(list1,list2.next);
        head = list2
    }
    return head
}



// 还有别的方法 比如优先队列 让我们之后解决