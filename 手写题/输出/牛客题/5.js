const a = {
    valueOf() {
    return 'valueOf'
    },
    toString() {
    return 'toString'
    },
    get() {
    return 'get'
    }
}
alert(a)


// 二者并存的情况下，在数值运算中，优先调用了valueOf，字符串运算中，优先调用了toString。而’ '+bbb是字符串操作，为啥也是调用valueOf，那是因为，存在操作符，valueOf的优先级高于toString。

// 回到本题: alert(obj)不存在数值运算，和其他操作符，所以默认调用toString方法。