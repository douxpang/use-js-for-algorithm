

function findMid(head) {
    let slow = head,fast = head;
    while(fast && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast != null) {
        slow = slow.next
    }
    return slow
}