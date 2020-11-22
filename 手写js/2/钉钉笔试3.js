/*
现在有一个基于 http 的前端日志采集系统，为了优化性能，我们需要把较密集的单次上报日志的行为，
改成合并掉 100ms 时间窗口内的单次上报为批量上报。
假设现有的单次上报的函数如下，请改写此函数的实现，不能使用任何库：

假设现有的单次上报的函数如下，请改写此函数的实现，不能使用任何库：
const uploadLog = (logStr) => {
  fetch('https://log.xxx.com', {
    method: 'POST',
    body: JSON.stringify([logStr])
  });
}
注意：
1.没有日志上报调用时，不发生 http 请求。
2.无论日志上报调用有多频繁，http 请求间隔"不小于" 100ms

*/
const uploadLog = (logStr) => {
  fetch('https://log.xxx.com', {
    method: 'POST',
    body: JSON.stringify([logStr])
  });
}

function control(logStr) {
    let last,res
    let temp = uploadLog(logStr)
    return function fn() {
        let now = new Date()
        if (now - last >= 100) {
            last = now
            return res
        } else { 
            res.push(temp)
        }
    }
}