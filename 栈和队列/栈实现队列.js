// 用两个栈实现队列

var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};
// 将 stack1 的元素转移到 stack2
MyQueue.prototype.transform = function() {
  while(this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
}

MyQueue.prototype.pop = function() {
  if(!this.stack2.length) this.transform();
  return this.stack2.pop();
};

MyQueue.prototype.peek = function() {
    if(!this.stack2.length) this.transform();
    return this.stack2[this.stack2.length - 1];
};

MyQueue.prototype.empty = function() {
    return !this.stack1.length && !this.stack2.length;
};
