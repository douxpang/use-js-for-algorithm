// 用 proxy 实现 一个方法，接受一个对象 例如 { 'a.b.c': function(){} } 返回观察对象，完成以下例子
// testCase 
// it('test1', () => {
//   const func1 = () => 1;
//   const func2 = () => 2;
//   const func3 = () => 3;

//   const res = registerProxyApi({
//    'a.b.c.d': func1,
//     'd.e.f': func2,
//     'o': func3
//   });
//   res.o() = 3;
//   res.a.b.c.d() = 1;
//   res.d.b.b.b() = undefined;
// })

// 答题区
function registerProxyApi(config) {
    let lastPath = ''
    let newObj = new Proxy('config', {
        
        get: function (target, property) {
           
            if (target[lastPath]) return target[lastPath];    //如果有这个属性的话返回
            return registerProxyApi()       //想递归 但没想明白 调用关系
        }
    })
    return newObj
}