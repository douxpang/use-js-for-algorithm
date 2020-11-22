// 给定一棵二叉搜索树，请找出其中的第k小的结点。 例如， （5，3，7，2，4，6，8） 中，按结点数值大小顺序第三小结点的值为4。

function findKNode(pRoot,k) {
    const arr = [];
    loopThrough(pRoot, arr);   //直接引用一个中序遍历就可以了
    if (k > 0 && k <= arr.length) {
      return arr[k - 1];
    }
    return null;
}

function loopThrough(node, arr) {
    if (node) {
      loopThrough(node.left, arr);
      arr.push(node);
      loopThrough(node.right, arr);
    }
  }