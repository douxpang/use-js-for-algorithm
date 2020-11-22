// 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

var zigzagLevelOrder = function(root) {
    if(!root) return []
    let deep = 0,res = []
    const queue = [root]
    while(queue.length) {
        res[deep] = []
        let nums = queue.length
        while(nums--) {
            const front = queue.shift()
            res[deep].push(front.val)
            if(front.left) queue.push(front.left)
            if(front.right) queue.push(front.right)
        }
        if(deep % 2) res[deep].reverse()     //和层次遍历主要差别
        deep++
    }
    return res
};