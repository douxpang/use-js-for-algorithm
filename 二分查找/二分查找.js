// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


// 示例 1:

// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4


// 做法一 非递归
var search = function(nums, target) {

    let len = nums.length;
    let left = 0,right = len - 1;
    let mid;
    while(left <= right) {
        //let mid = Math.floor(left + (right - left) / 2);
        //mid = Math.floor((left + right) / 2);  在left 和 right 很大的时候有可能溢出

        // 这种写法是js里一个求半方法 >>> 1 是无符号右移 就 除以2里
        mid = (left + right) >>> 1
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] < target) {
            left = mid + 1
        } else if(nums[mid] > target) {
            right = mid - 1
        }
    }
    return -1
};

// 方法二 递归
var search = function(nums,target,left = 0,right = nums.length - 1) {
    // 为了保证递归结束 我往往都会在前边做一些判断
    if(left > right) {
        return -1
    }
    let mid = (left+right) >>> 1;
    if(nums[mid] == target) {

        return mid
    }else if(nums[mid] < target) {
        return search(nums,target,mid + 1,right)
    }else { 
        return search(nums,target,left,mid - 1)
    }
}
console.log(search([1,2,3,4,5],4))