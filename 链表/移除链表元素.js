// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。 



// 输入：head = [1,2,6,3,4,5,6], val = 6
// 输出：[1,2,3,4,5]


// 创建一个虚拟结点

var removeElements = function(head, val) {
    let newHead = new ListNode( null ),
        prev = newHead,
        curr = head;
    prev.next = curr;
    
    while (curr) {
      if (curr.val === val) {
        prev.next = curr.next;
        curr = prev.next;
      }
      else {
        prev = curr;
        curr = curr.next;
      }
    }
    
    return newHead.next;
  };