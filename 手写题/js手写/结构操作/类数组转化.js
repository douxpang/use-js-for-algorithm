// 由上总结，把类数组转化成数组最靠谱的方式是以下三个

// Array.from(arrayLike)
// Array.apply(null, arrayLike)
// Array.prototype.concat.apply([], arrayLike)

[].prototype.slice.call(arrayLike)
// 以下几种方式需要考虑稀疏数组的转化


let args = Array.prototype.slice.call(arrayLike)

// [...arrayLike]