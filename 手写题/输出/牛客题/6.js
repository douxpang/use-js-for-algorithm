function fun () {
    return () => {
        return () => {
            return () => {
            console.log(this.name)
                    }
                }
        }
}
var f = fun.call({name: 'foo'})
var t1 = f.call({name: 'bar'})()()
var t2 = f().call({name: 'baz'})()
var t3 = f()().call({name: 'qux'})