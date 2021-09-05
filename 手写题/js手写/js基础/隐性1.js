// let a = [1,2,3];
// a.toString = a.shift;
// if( a == 1 && a == 2 && a == 3 ) {
//   console.log(1);
// }



// let b = [2,3]
// console.log(b.shift())


// 或者   // 就是通过改写valueof  去使下面的等式成立
var a = {num:0};
a.valueOf = function(){
  return ++a.num
}
if(a == 1 && a == 2 && a == 3){  
	console.log(1);
}