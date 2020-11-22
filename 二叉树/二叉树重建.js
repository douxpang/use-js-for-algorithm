// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

function rebuildTree(pre,mid) {
    if(pre.length === 0) {
        return null
    }
    if(pre.length === 1) {
        return new TreeNode(pre[0])
    }
    let value = pre[0]
    let index = mid.indexOf(value)
    let midLeft = mid.slice(0,index)
    let midRight = mid.slice(index + 1)
    let preLeft = pre.slice(0,index + 1)
    let preRight = pre.slice(slice + 1)    
    const node = new TreeNode(value)
    node.left = rebuildTree(preLeft, midLeft);
    node.right = rebuildTree(preRight, midRight);
    return node;
}