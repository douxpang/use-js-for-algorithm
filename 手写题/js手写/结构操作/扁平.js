function flat(nums) {
    return nums.reduce((pre,cur) => {
        pre.concat(Array.isArray(cur) ? flat(cur) : cur); 
    },[])
}



function flat1(nums) {
    while(nums.some(Array.isArray)) {
        nums = [].concat(...nums)
    }
    return nums;
}
let ary = [1, 2, [3, 4], [5, [6, 7]]];
console.log(flat1(ary));


function flat2(nums) {
    let res = [];
    for(let i = 0;i < nums.length;i++) {
        if(Array.isArray(nums[i])) {
            res = res.concat(flat2(nums[i]))
        } else {
            res.push(nums[i])
        }
    }
}


function flat(str) {
    return str.replace(/(\[|\])/g,'').split(',')
}
console.log('正则',flat('[1, 2, [3, 4], [5, [6, 7]]]'));




