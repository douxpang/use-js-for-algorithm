var a=1;
var obj = {  a:2,  print:function(){  console.log(this.a)  }
}
var print = obj.print;
obj.print();  //2
print();   // 1


//  这道没什么问题   第一个 this指向 obj 第二个指向window


