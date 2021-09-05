//  eventbus 可以再看看


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