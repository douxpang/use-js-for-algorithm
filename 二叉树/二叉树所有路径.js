// 输入:

//    1
//  /   \
// 2     3
//  \
//   5

// 输出: ["1->2->5", "1->3"]


//递归
function binaryTreePaths(root) {
    let res = []
    let path = []
    let dfs = (node) => {
        if(!node) return
        path.push(node)
        dfs(node.left)
        dfs(node.right)
        if(!node.left && !node.right) {
            res.push(path.map(item =>item.val).join('->'))
        }
        path.pop()
    }
    dfs(root)
    return res
}


//非递归

var binaryTreePaths = function(root) {
    if(root == null) return [];
    let stack = [];
    let p = root;
    let set = new Set();
    res = [];
    while(stack.length || p) {
        while(p) {
            stack.push(p);
            p = p.left;
        }
        let node = stack[stack.length - 1];
        // 叶子节点
        if(!node.right && !node.left) {
            res.push(stack.map(item => item.val).join('->'));
        }
        // 右孩子存在，且右孩子未被访问
        if(node.right && !set.has(node.right)) {
            p = node.right;
            set.add(node.right);
        } else {
            stack.pop();
        }
    }
    return res;
};
