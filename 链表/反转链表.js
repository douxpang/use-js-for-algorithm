//先用递归的方法试一下  
function reverseNodeList(head) {
    let currentNode = null
    let headNode = head
    while(head && head.next) {
        currentNode = head.next    //把current先设置为第二个
        head.next = currentNode.next
        currentNode.next = headNode
        headNode = currentNode
    }
    return headNode
}