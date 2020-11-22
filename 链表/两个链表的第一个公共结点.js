//输入两个链表，找出它们的第一个公共结点
function findCommon(pNode1,pNode2) {
    if(!pNode1 || !pNode2) return null
    let length1 = getLength(pNode1)
    let length2 = getLength(pNode2)
    let n,lang,short
    if(length1 - length2) {
        lang = pNode1
        short = pNode2
        n = length1 - length2
    }else {
        lang = pNode2
        short = pNode1
        n = length2 - length1
    }
    while(n) {
        lang = lang.next
        n--
    }
    while(lang) {
        if(lang == short) {
            return lang
        }
        lang = lang.next
        short = short.next
    }
    return null
} 


function getLength(head) {
    let cur = head
    let count = 0
    while(cur) {
        n++
        cur = cur.length
    }
    return count
}