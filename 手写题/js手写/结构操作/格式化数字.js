    // 方法一    直接多声明一个数组 
function toThousands(num) {
    var result = [ ], counter = 0;
    num = (num || 0).toString().split('');
    for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result.unshift(num[i]);
        if (!(counter % 3) && i != 0) { result.unshift(','); }
    }
return result.join('');
}


console.log(toThousands(16435121121))


//  方法二  自己写
//  算是完成了 用splice  但是感觉 for循环配splice还是不对劲  

function fn(num) {
    num = (num || 0).toString().split('');
    let count = 1;
    let len = num.length - 1;
    for(let i = len;i >= 0;i--) {
        if(count === 3) {
            num.splice(i,0,',');
            count = 1;
            //i--
        } else {
            //i--;
            count++;
        }
        
    }
    return num.join('')
}
console.log(fn(16435121121))



    // 方法 三  方法一的改进版 用字符串代替数组
function toThousands2(num) {
    var result = '', counter = 0;
    num = (num || 0).toString();
    for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result = num.charAt(i) + result;
        if (!(counter % 3) && i != 0) { result = ',' + result; }
    }
    return result;
}
console.log(toThousands2(16435121121))


// 方法四 来一个 最好的方法


function toThousands3(s) {
    s = s.toString();
    let res = '';
    while(s.length > 3) {
        res = ',' + s.slice(-3) + res;
        s = s.slice(0,-3)
    }
    if(s.length) res = s + res;
    return res
}

console.log(toThousands3(16435121121))