// 下列哪些表达式 结果为true


console.log(undefined == null)   // true


console.log(+'11')   // 11
console.log(+'1yy1')   //NAN
console.log(Number('1yy1'))  // NAN
console.log(parseInt('1yy1'))   // 1
console.log(+'yy' == +'yy')   //false


console.log(+('2' + 021) === 2021)   //false


console.log('2' + 021)     // 217  ?????????



