//尝试用递归和非递归两种不同的方法解决

function prePrint(root,arr = []) {
    if(root) {
        arr.push(root.val)
        prePrint(root.left,arr)
        prePrint(root.right,arr)
    }
    return arr
}

//再试一下非递归

function prePrint(root) {
    let stack = []
    let result = []
    let current = root
    while(current || stack.length > 0) {
        while(current){
        result.push(current.val)
        stack.push(current)
        current = current.left
        }
        stack.pop()
        current = current.right
    }
    return result
}