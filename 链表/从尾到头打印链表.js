// 输入 [1,2,3]
// 输出 [3,2,1]


function print(head) {
    let ret = []
    while(head) {
        ret.unshift(head.val)
        head = head.next
    }
    return ret
}