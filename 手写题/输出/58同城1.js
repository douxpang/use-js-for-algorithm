for(var i = 0; i < 5; i++) {
    var a = 1;
    let b = 2;
}
console.log(a)
console.log(b)

function fn() {
    var a = 1;
    let b = 2;
}
fn()
console.log(a)
console.log(b)
 

var a = 1;
var obj = {
  a : 2,
  b : this.a,
  c : function(){
    return this.a
  },
  d : () => this.a
}
console.log(obj.b)
console.log(obj.c())
console.log(obj.d())


function fn(target) {
	if(typeof target !== 'object') {
      return typeof target
    }else {
      let temp = target.toString();
      temp = temp.split(',').slice(-1);
      
      return temp
    }
}


function f1() { 
    var n = 999; 
    nAdd = function(){n+=1} 
    function f2(){alert(n)}; 
    return f2; 
} 
var result = f1(); 
result();  // 999
nAdd(); 
result(); //999




// react 的setstate 在componentdidmount 触发几次