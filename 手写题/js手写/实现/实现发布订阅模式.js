class EventEmitter {
    constructor() {
        this.handle = {};
    }
    // 安装 事件监听器 
    on(eventName,cb) {
        if(!this.handle.eventName) {
            this.handle.eventName = [];
        }

        this.handle[eventName].push(cb)
    }
    //  触发  可以接受参数
    emit(eventName,...args) {
        if(this.handle[eventName]) {
            this.handle[eventName].forEach(item => {
                item(...args)
            })
        }
    }

    off(eventName,cb) {
        //  每个eventname 对应的是一个队列
        const callbacks = this.handle[eventName];

        if(callbacks.indexOf(cb) !== -1) {
            callbacks.splice(index,1);
        }
    }
    // 一个单次的监听器
    once(eventName,cb) {
        const wrap = (...args) => {
            cb(...args);
            this.off(eventName,wrap)
        }
        this.on(eventName,wrap)
    }


}

// 其实 就可以写这个实现 eventbus  来使用一下


// 使用如下
const event = new EventEmitter();

const handle = (...rest) => {
  console.log(rest);
};

event.on("click", handle);

event.emit("click", 1, 2, 3, 4);

event.off("click", handle);

event.emit("click", 1, 2);

event.once("dbClick", () => {
  console.log(123456);
});
event.emit("dbClick");
event.emit("dbClick");