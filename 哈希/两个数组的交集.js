// 给定两个数组，编写一个函数来计算它们的交集。

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]


var intersection = function(nums1, nums2) {
    return nums1.filter((v, i) => nums2.includes(v) && nums1.lastIndexOf(v) === i)
};

const intersection = (nums1, nums2) => {
    const map = {};
    const res = [];
  
    for (const num1 of nums1) {
      map[num1] = true; // 记录nums1出现过的数字
    }
    for (const num2 of nums2) {
      if (map[num2]) {  // 如果nums2的这个数字在nums1出现过
        map[num2] = false; // 置为false，避免重复推入res
        res.push(num2);  // 交集数字推入res
      }
    }
    return res;
  };



var intersection = function(nums1, nums2, p1 = 0, p2 = 0, r = []) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    while (p1 < nums1.length && p2 < nums2.length)
        if (nums1[p1] === nums2[p2]) r[r.length - 1] !== nums1[p1] && r.push(nums1[p1]), p1++, p2++
        else if (nums1[p1] < nums2[p2]) p1++
        else p2++
    return r
};

