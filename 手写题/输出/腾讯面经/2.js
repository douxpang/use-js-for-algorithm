
setTimeout(() => console.log(1));
var req = new Promise(resolve => {  console.log(2);  resolve();  console.log(3);
})
req.then(() => console.log(4));
req.then(() => console.log(5));   // 在微队列里再加入微队列 还是在当前的宏队列里



// 2   3   4   5  1  
