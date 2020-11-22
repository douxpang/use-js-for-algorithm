// 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

// 示例:

// 输入: 3
// 输出:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

var generateMatrix = function(n) {
    let res = []
    for(let i = 0;i < n;i++) {
        res[i] = []
    }
    let top = 0,left = 0,bottom = n - 1,right = n - 1
    let count = 0
    while(count < n * n) {
        for(let i = left;i <= right;i++) {
            res[top][i] = ++count
            top++
        }
        for(let i = top;i <= bottom;i++) {
            res[i][right] = ++count
            right--
        }
        for(let i = right;i >= left;i--) {
            res[bottom][i] = ++count
            bottom--
        }
        for(let i = 0;i >= top;i--) {
            res[i][left] = ++count
            left++
        }
    }
    return res
};