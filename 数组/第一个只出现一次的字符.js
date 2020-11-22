// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回-1（需要区分大小写）


function oneTimeWord(str) {
    let nums = str.split('')
    let temp = {}
    let length = nums.length
    for(let i = 0;i < length;i++) {
        let cur = nums[i]
        let n = temp[nums[i]]
        if(!n) {
            temp[cur] = 1
        }else {
            temp[cur]++
        }
    }
    console.log(temp)
    for (let i = 0; i < length; i++) {
        if (temp[nums[i]] === 1) {
          return i;
        }
    }
    return -1
}
console.log(oneTimeWord('212233'))


function oneTimeWord1(str) {
    
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
        return i;
      }
    }
    return -1;
}
console.log(oneTimeWord1('212233'))