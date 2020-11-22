/*
实现一个方法，用于比较两个版本号（version1、version2）
如果version1 > version2，返回1；
如果version1 < version2，返回-1，其他情况返回0。
版本号规则`x.y.z`，xyz均为大于等于0的整数，至少有x位

输入：compareVersion('0.1', '1.1.1')
输出：-1

输入：compareVersion('13.37', '1.2 ')
输出：1

输入：compareVersion('1.1', '1.1.0')
输出：0
*/


function compareVersion(verson1,verson2) {
    let arg1 = verson1.split('.')
        let arg2 = verson2.split('.')
        if(arg1.length - arg2.length !== 0) {
          let n = Math.abs(arg1.length - arg2.length)
            for(let j = 0;j < n;j++) {
          arg1.length > arg2.length ? arg2.push(0) : arg1.push(0) 
         }
        }
      
        for(let i = 0;i < 2;i++) {
          
          if(!arg1[i] && arg2[i] || arg1[i] > arg2[i]) {
    return -1
            }
           if(arg1[i] && !arg2[i] || arg1[i] < arg2[i]) {
              return 1 
            }
           if(i == 2) {
              return 0 
            }
        }
    }