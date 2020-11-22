// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan("Hank")输出:
// Hi! This is Hank!
//  
// LazyMan("Hank").sleep(10).eat("dinner")输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
//  
// LazyMan("Hank").eat("dinner").eat("supper")输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
//  
// LazyMan("Hank").sleepFirst(5).eat("supper")输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
//  
// 以此类推。

function _LazyMan(name){
    this.nama = name;
    this.queue = [];
    this.queue.push(() => {
        console.log("Hi! This is " + name + "!");
        this.next();
    })
    setTimeout(()=>{
        this.next()
    },0)
  }
  
  _LazyMan.prototype.eat = function(name){
    this.queue.push(() =>{
        console.log("Eat " + name + "~");
        this.next()
    })
    return this;
  }

  _LazyMan.prototype.next = function(){
    var fn = this.queue.shift();
    fn && fn();
  }

  _LazyMan.prototype.sleep = function(time){
    this.queue.push(() =>{
        setTimeout(() => {
            console.log("Wake up after " + time + "s!");
            this.next()
        },time * 1000)
    })
    return this;
  }

  _LazyMan.prototype.sleepFirst = function(time){
    this.queue.unshift(() =>{
        setTimeout(() => {
            console.log("Wake up after " + time + "s!");
            this.next()
        },time * 1000)
    })
    return this;
  }

  function LazyMan(name){
    return new _LazyMan(name)
  }