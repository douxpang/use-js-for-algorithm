var a = 1;
var obj = {
  a : 2,
  b : this.a,
  c : function(){
    return this.a
  },
  d : () => this.a
}
console.log(obj.b)   // 1

console.log(obj.c()) // 2
console.log(obj.d()) //1