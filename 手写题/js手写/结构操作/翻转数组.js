// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数

// 输入: [-1, -100, 3, 99] 和 k = 2
// 输出: [3, 99, -1, -100]
// 解释: 
// 向右旋转 1 步: [99, -1, -100, 3]
// 向右旋转 2 步: [3, 99, -1, -100]



const func = function(nums,k) {
    for(let i = 0;i < k;i++) {
        nums.unshift(nums.pop())
    }
    return nums
}
const moveArr = (arr,k)=>arr.splice(-k).concat(arr)

console.log([1,2,3,4,5].splice(-2))

console.log(moveArr([1,2,3,4,5],2))