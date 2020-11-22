//有一个数组 里面的项都是对象 下面给出一个规则 使其按规则排列
// 比如原数组为[{a:'ww'},{a:'ff'},{a:'pe'}]，
// 顺序是[{ww:1},{pe:3},{hf:2},{oo:4},{ff:5}]
// 那么输出是 [{a:'ww'},{a:'pe'},{a:'ff'}]

var objArr=[{a:'ww'},{a:'ff'},{a:'pe'}];
var ruleArr=[{ww:1},{pe:3},{hf:2},{oo:4},{ff:5}];
function sortByRule(obj,rule) {
    let ret = []
    rule.forEach(item=>{
        //获取当前的value和规则的位次
        let value=Object.getOwnPropertyNames(item)[0];
        console.log(value)
        let order=item[value];
        //找到对应的obj放入对应位次的位置
        ret[order]=obj.find(item=>item['a']===value);
        //find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
    });
    //去掉那些为空的
    return ret.filter(item => item)
}
console.log(sortByRule(objArr,ruleArr))


