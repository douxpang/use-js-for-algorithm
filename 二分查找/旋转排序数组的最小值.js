// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] 。

// 请找出其中最小的元素。

 

// 示例 1：

// 输入：nums = [3,4,5,1,2]
// 输出：1

// 示例 2：

// 输入：nums = [4,5,6,7,0,1,2]
// 输出：0



// 想到 用二分查找的想法去做，但第一时间要想到你的target，并以此缩小边界

var findMin = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
};