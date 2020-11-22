// 实现一个随机符串生成函数 randomStr()，要求如下：
// 1. 生成的随机的字符串应该以字母开头，并包含 [a-z][0-9] 这些字符。
// 2. 生成的字符串长度为 8。
// 3. 生成的字符串不能够在程序运行的生命周期中存在重复的情形。


function randomStr() {
  let cache = []    //想放置一下缓存
  let str = ''
  let store = ['abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz0123456789']
  let random1 = store[0].chatAt(Math.random() * 26)
  let random2 = store[1].chatAt(Math.random() * 36)
  str += random1
  let n = 0
  while (n < 7) {
    str += random2
    n++
  }
  if (!cache.includes(str)) {
    cache.push(str)
    return str
  } else {
    randomStr()
  }
}