// koa 的 only方法

let o = {a:'a',b:'b',c:'c'}

// only(o,['a','b'])    // {a:'a',b:'b'}

let only = function(obj,keys) {
    obj = obj || {};

    return keys.reduce((pre,cur) => {
        //console.log(cur)
        if(!obj[cur]) {
            //console.log(obj)
            return pre
        } 
        
        pre[cur] = obj[cur]
        return pre
    },{})
}

console.log(only(o,['a','b']))