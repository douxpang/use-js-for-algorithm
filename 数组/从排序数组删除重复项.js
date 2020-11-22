// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

// 给定 nums = [0,0,1,1,1,2,2,3,3,4],

// 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

// 你不需要考虑数组中超出新长度后面的元素。


function keepSingle(nums) {
    //这道题的重点在于  原地
    // 所以很多增加空间的方法就不可以  我首先想到了双指针
    let slow = 0
    let length = nums.length
    for(let fast = 1;fast < length;fast++) {
        if(nums[slow] !== nums[fast]) {
            slow++
            nums[slow] = nums[fast]
        }
    }
    return slow + 1
}


//还写了一个splice的方法
var removeDuplicates = function(nums) {
    let temp = []
    for(let i = 0;i < nums.length;i++) {
        if(!temp.includes(nums[i])) {
            temp.push(nums[i])
        }else {
            nums.splice(i,1)
        }
    }
    return nums.length
};