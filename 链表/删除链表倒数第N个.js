//第一种方法   两次遍历  第一次获取链表长度 第二次获得倒数第N结点
function deleteN(head,n) {
    let h = head
    let length = 0
    while(h.next) {
        h = h.next
        length++
    }
    n = length - n
    h = head
//判断下 如果给的n太大的话 直接返回  否则取到length-n这个值 
    if(n <= 0) {
        return head.next
    }else {
        while(n > 0) {
            h = h.next
            n--
        }
        h.next = h.next.next
    } 
    return head
}    

//用双指针 
function deleteN2(head,n) {
    let first = head,second = head
    while(n > 0) {
        first = first.next
        n--
    }
    if(!first) return head.next
    while(first.next) {
        first = first.next
        second = second.next
    }
    second.next = second.next.next
    return head
}