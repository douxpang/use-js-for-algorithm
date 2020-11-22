function maxDeep(root) {
    return !root ? 0 : Math.max(maxDeep(root.left),maxDeep(root.right)) + 1
}