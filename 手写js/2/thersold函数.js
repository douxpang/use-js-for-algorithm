// 需要通过threshold参数控制调用函数频率
// const yourFunction = function(func, threshold) {
//  // 请实现
// }
// const triggerSearch = yourFunction((val) => {
//   const {
//     onSearch
//   } = this.props
//   onSearch(val)
// }, 300)
// triggerSearch(searchText)


// 第二题
const yourFunction = function(func, threshold) {
    let timeOut;
    return function() {
      if (!timeOut) {
        timeOut = setTimeout(() => {
          timeOut = null;
          func.apply(this, arguments)
        }, threshold)
      }
    }
  }
  
  const triggerSearch = yourFunction((val) => {
    const {
      onSearch
    } = this.props
    onSearch(val)
  }, 300)
  triggerSearch(searchText)
