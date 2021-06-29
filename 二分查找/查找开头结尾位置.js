// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 进阶：

//     你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

 

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]


var searchRange = function(nums, target) {
    // 就是要找到左边界和右边界，暴力的思路很简单，但我们试一下可不可以用二分去进行优化呢

    let res = [-1,-1];
    // 用二分法去进行查找index
    let leftIndex = findIndex(nums,target,true);
    let rightIndex = findIndex(nums,target,false) - 1;

    if(leftIndex <= rightIndex && nums[leftIndex] == target && nums[rightIndex] == target) {
        res = [leftIndex,rightIndex]
    }
    return res;
};

function findIndex(nums,target,isLow) {
    // 这个ans的初始值真是被教育了
    let left = 0,right = nums.length - 1,ans = nums.length;
    while(left <= right) {
        let mid = (left + right) >>> 1;
        // 这里其实也是需要注意的 如果刚开始就判断mid是否大于target。left右移的话 你会发现难以为继，因为想找左边界是要像左推进的
        if(nums[mid] > target || (isLow && nums[mid] >= target)) {
            right = mid - 1;
            ans = mid
        } else {
            left = mid + 1;
        }
    }
    return ans
}