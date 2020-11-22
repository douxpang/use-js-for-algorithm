function sumK(root,k) {
    let result = []
    if(root) {
        findPath(root,k,[],0,result)
    }
    return result   
}

function findPath(node,k,stack,sum,result) {
    stack.push(node.val)
    sum += node.val
    if(!node.left && !node.right && sum === k) {
        result.push(stack.slice(0))
    }
    if(node.left) {
        findPath(node.left,k,stack,sum,result)
    }
    if (node.right) {
        findPath(node.right, k, stack, sum, result);
    }
    stack.pop()
}