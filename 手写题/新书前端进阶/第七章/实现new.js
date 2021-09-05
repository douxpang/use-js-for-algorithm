function newFunc(...args) {
    let constructor = args.shift();

    let obj = Object.create(constructor.prototype); // 等同于 创建一个空对象obj 然后把obj._proto_ === constructor.prototype

    let result = constructor.apply(obj,args);

    return (typeof(result) === 'object' && result !== null) ? result : obj;
}


function Person(name) {
    this.name = name;
}

const person = new newFunc(Person,'phr');  // 这里加不加new都可以  我理解是不加

console.log(person)