new Promise(resolve => {

    console.log(1);
 
    setTimeout(() => {
 
      console.log(5);
 
    }, 0)
 
    resolve(3);
 
    Promise.resolve().then(()=> console.log(4))
 
 }).then(num => {
 
    console.log(num)
 
 });
 
 console.log(2)


 //  输出的 是  1 2 4 3 5

 //  上午错答  1 2 3 4 5    resolve的作用就是改变状态 但下边的还会进行完毕