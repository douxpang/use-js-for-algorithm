// function sumBigNumber1(a, b) {
//     let ret = '',temp = 0;
//     a = a.split('');
//     b = b.split('');
//     while(a.length || b.length || temp) {
//         temp += +(a.pop()) + +(b.pop());    // temp为true时候 转化为1
//         ret = (temp % 10) + ret;
//         temp = temp > 9;
//         // console.log(temp)
//     }
//     return ret;
// }     // 这个有问题 啊 只能让 str1 str2等长
// console.log(sumBigNumber1('111111111111111156', '111'))

// function bigInt(str1,str2) {
//     let s1 = str1.split('');
//     let s2 = str2.split('');
//     let temp = 0,res = '',t;
//     while(s1.length || s2.length || temp) {
//         temp += ~~(s1.pop()) + ~~(s2.pop());
//         res = t % 10 + res
//         temp = temp > 9;
//     }
//     let r = s1.length ? s1 : s2;
//     res = r + res;
//     return res;
// }

// console.log(bigInt('111111111111111156', '11111111111111117'))

function sumBigNumber(a, b) {
    var res = '',
      temp = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || temp) {
      temp += ~~a.pop() + ~~b.pop();
      res = (temp % 10) + res;
      temp = temp > 9;
    }                                        //  不用多做 假设一方有剩余的处理 因为 上边是或运算
    return res.replace(/^0+/, '');
  }
console.log(sumBigNumber('111111111111111156', '111111111117'))




console.log(~~(undefined))    // 主要问题就是 这里 用 ~~ 处理 undefined 是 0 ！！！！所以可以用

console.log(~~(null))   // 0



