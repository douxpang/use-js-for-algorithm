console.log(Math.random()*new Date())


// 测试单例模式
class SingleDog {
    show() {
        console.log('我是一个单例对象')
    }
    static getInstance() {
        // 判断是否已经new过1个实例
        if (!SingleDog.instance) {
            // 若这个唯一的实例不存在，那么先创建它
            SingleDog.instance = new SingleDog()
        }
        // 如果这个唯一的实例已经存在，则直接返回
        return SingleDog.instance
    }
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

// true
console.log(s1 === s2);



// 单例模式
// single.getInstance = (function() {
//     let instance = null;
//     return function() {
//         if(!instance) {
//             instance = new single();
//         }
//         return single
//     }
// }())


// let instance1 = single.getInstance();
// let instance2 = single.getInstance();
// console.log(instance1 === instance2)

// 策略模式尝试

// const priceProcessor = {
//     pre(originPrice) {
//       if (originPrice >= 100) {
//         return originPrice - 20;
//       }
//       return originPrice * 0.9;
//     },
//     onSale(originPrice) {
//       if (originPrice >= 100) {
//         return originPrice - 30;
//       }
//       return originPrice * 0.8;
//     },
//     back(originPrice) {
//       if (originPrice >= 200) {
//         return originPrice - 50;
//       }
//       return originPrice;
//     },
//     fresh(originPrice) {
//       return originPrice * 0.5;
//     },
//   };
//   console.log(priceProcessor['pre'](100))


