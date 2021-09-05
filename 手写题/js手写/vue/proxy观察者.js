//初始化观察者队列
const arr = new Set();

//将监听函数加入队列
const obe = fun => {
  arr.add(fun);
}

//初始化Proxy对象，设置拦截操作
const observable =  obj => new Proxy(obj, {set});

function set(target, key, value, receiver){
     //内部调用对应的 Reflect 方法
     const result = Reflect.set(target, key, value, receiver);
     console.log(11,result)
     //额外执行观察者队列
     arr.forEach( item => item() );
     return Reflect.set(target, key, value, receiver);
}

const target = {
   name:"小明",
   age:15
}


const per = observable(target);

function print(){
   console.log( per.name);
}


obe(print);

per.name = "小11红"
 //结果   小红,15