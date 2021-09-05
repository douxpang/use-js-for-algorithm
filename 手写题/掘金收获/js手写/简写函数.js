//1 获取一个随机布尔值

const randomBoolean = () => Math.random() >= 0.5;
console.log(randomBoolean());

// 2 检查一个日期是不是工作日

const isWeekend = (date) => date.getDay() % 6 !== 0 ;   // 周日是0 周六是6 这两个%6是0 其他除外

console.log(isWeekend(new Date(2021,1,13)))

console.log(new Date(2021,1,15))

// 3 反转字符串 最简单的方法

const reverse = (str) => str.split('').reverse().join('');
console.log(reverse('hello world'))


// 平均数

const average = (...args) => {
    return args.reduce((a,b) => a + b) / args.length
}
console.log(average(1,2,3,4))  // 这里不能传[1,2,3,4] !!