// LazyMan('Tony');
// // Hi I am Tony

// LazyMan('Tony').sleep(10).eat('lunch');
// // Hi I am Tony
// // 等待了10秒...
// // I am eating lunch

// LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// // Hi I am Tony
// // I am eating lunch
// // 等待了10秒...
// // I am eating diner

// LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// // Hi I am Tony
// // 等待了5秒...
// // I am eating lunch
// // I am eating dinner
// // 等待了10秒...
// // I am eating junk food


class LazyManclass {
    constructor(name) {
        this.name = name;
        console.log(`my name is ${name}`)
        this.queue = [];
        setTimeout(() => {
            this.next();
        },0)
    }

    sleep(time) {
        const fn = () => {
            setTimeout(() => {
                console.log(`睡了{time}分钟`)
                this.next();
            },time)
        }
        this.queue.push(fn);
        return this;
    }

    eat(food) {
        const fn = () => {
            setTimeout(() => {
                console.log(`吃了${food}`);
                this.next;
            })
        }
        this.queue.push(fn);
        return this;
    }

    next() {
        const fn = this.queue.shift();
        fn;
    }

}

function LazyMan(name) {
    return new LazyManclass(name);
}

LazyMan('phr')