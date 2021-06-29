// 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

// 示例:

// 输入: 3
// 输出:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

var generateMatrix = function (n) {
    var res = new Array();
    for (var i = 0; i < n; i++) res[i] = new Array();
    let top = 0,
        left = 0,
        bottom = n - 1,
        right = n - 1;
    let count = 1;
    let len = Math.pow(n,2);

    for(let j = 0,k = 0,turn = 'right';count <= len;count++){
        res[j][k] = count;
        if(turn === 'right') {
            k++;
            if(k === right) {
                top++
                turn = 'down'
            }
        } else if(turn === 'down') {
            j++;
            if(j === bottom) {
                right--
                turn = 'left'
            }
        } else if(turn === 'left') {
            k--;
            if(k === left) {
                bottom--
                turn = 'up'
            }
        } else if(turn === 'up') {
            j--;
            if(j === top) {
                left++
                turn = 'right'
            }
        }
    }

    return res;
};

console.log(generateMatrix(3));
