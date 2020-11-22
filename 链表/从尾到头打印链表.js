function print(head) {
    let ret = []
    while(head) {
        ret.unshift(head.val)
        head = head.next
    }
    return ret
}