var a = 1
function fn1() {
    console.log(this.a)
}
const fn2 = ()=> {
    console.log(this.a)
}

const obj = {
    a: 10,
    fn1: fn1,
    fn2: fn2
}

fn1()   // 1
fn2()    // 1
obj.fn1()  // 10
obj.fn2()   // 1            没啥问题