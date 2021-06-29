/**
 * @param {ListNode} head
 * @return {boolean}
 */

//  第一种方法 快慢指针 都设在头指针 然后如果快的能追上慢的 就有还
var hasCycle = function (head) {
  let dummyHead = new ListNode();
  dummyHead.next = head;
  let fast = (slow = dummyHead);
  // 零个结点或者一个结点，肯定无环
  if (fast.next == null || fast.next.next == null) return false;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    // 两者相遇了
    if (fast == slow) {
      return true;
    }
  }
  return false;
};

// 哈希法 用个Map帮助检测 如果碰到 遇过的了 就有环
var hasCycle = (head) => {
  let map = new Map();
  while (head) {
    if (map.has(head)) return true;
    map.set(head, true); // 存的是节点的地址引用，而不是节点值
    head = head.next;
  }
  return false;
};

// 很简单 上边变种
var hasCycle = (head) => {
  while (head) {
    if (head.flag == true) return true;
    head.flag = true;
    head = head.next;
  }
  return false;
};
