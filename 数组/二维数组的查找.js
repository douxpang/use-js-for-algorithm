//在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数

//暴力查找一下
function Find(target,arr) {
    let result = false
    let len = arr.length
    for(let i = 0;i < len;i++) {
        for(let j = 0;j < arr[i].length;j++) {
            if(arr[i][j] === target) {
                result = true
            }
        }

    }
    return result
}
console.log(Find(6,[[1,2,3],[2,3,4],[3,4,5]]))

//利用他这个向左 向下 都是依次增大的特点 取右上
function Find(target,arr) {
    let row = 0,col = arr[0].length -1
    while(row < arr.length && col > 0) {
        if(target === arr[row[col]]) {
            return true
        }
        if(target < arr[row][col]) {
            col--
        }else {
            row++
        }
    }
    return false
}