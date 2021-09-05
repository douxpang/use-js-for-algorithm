// js里没有私有  去模拟一下  https://www.cnblogs.com/ihardcoder/p/4914938.html


// 直接用闭包

function Person(name) {
    let _name = name;
    this.getName = function() {
        return _name;
    }
}

let person = Person('joe')



//  基于weakMap

var Person = (function() {

    var privateData = new WeakMap();

    function Person(name) {
        privateData.set(this, { name: name });
    }

    Person.prototype.getName = function() {
        return privateData.get(this).name;
    };

    return Person;
}());