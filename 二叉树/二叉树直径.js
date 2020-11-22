// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。

function diameterOfBinaryTree(root) {
    if(!root) return 0
    let max = 0
    
    let maxDeep = (node) => {
        if(!node) return 0
        let left = node.left ? maxDeep(node.left) + 1 : 0
        let right = node.right ? maxDeep(node.right) + 1 : 0
        let cur = left + right
        if(cur > max) max = cur; 
           //返回的就是当前下面最长的 不用重复算了
    }
    maxDeep(root)
    return max
}