// 浅拷贝 可以拷到一个新的地址 但是对有嵌套的就不行



// 手动

// slice

//let newOBj = obj.slice()


// concat 
let obj = [1,2];
let newObj = obj.concat();
console.log(obj == newObj)

// object.assign


//let obj = {name: 's'};

let newO = Object.assign({},obj,{name:'a'})


