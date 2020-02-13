//因为差不多 这里都采用前序遍历
//1 递归
function DLR(root) {
    let result = []
    function deepPush(node) {
        if(!node) {
            return
        }
        result.push(node.value)
        deepPush(node.left)
        deepPush(node.right)
    }
    deepPush(root)
    return result
}

//非递归   采用栈 存一下结点
function DLR1(root) {
    if(!root) {
        return []
    }
    let result = []
    let stack = []

    while(root || stack.length > 0) {
        while(root) {
            result.push(root.value)
            stack.push(root)
            root = root.left
        }
        if(stack.length > 0) {
            root = stack.pop()
            root = root.right
        }
    }
    return result

}



function putNode(root) {
    let ret = []
    let stack = []
    function fn(node) {
        if(node.value) {
            stack.push(node)
            ret.push(node)
        }
        if(node.left) {
            
        }
    }
} 