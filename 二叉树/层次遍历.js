//给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7



var levelOrder = function(root) {
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
        deep++
    }
    return res
};




function order(root) {
    if(!root) {
        return []
    }
    let res = [],deep = 0;

    let queue = [root];

    while(queue.length) {
        let cur = queue.shift();
        res[deep].push(cur.val);
        if(cur.left) queue.push(cur.left);
        if(cur.right) queue.push(cur.right);
        deep++
    }

}