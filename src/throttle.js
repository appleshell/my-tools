// 节流，无论触发多少次，事件函数按固定间隔执行

/**
 * 使用setTimeout实现，特点是函数的执行时机在每个时间段的末尾
*/
export function throttle_timeout(fn, time) {
  let timeID
  return function() {
    if(timeID) return

    timeID = setTimeout(() => {
      fn.apply(this, arguments)
      timeID = null
    }, time)
  }
}
/**
 * 使用时间戳实现，当前事件与上次触发时间的间隔大于设定的时间，就触发一次。特点是函数的执行时机是每个时间段的开始
*/
export function throttle_timestamp(fn, time) {
  let prevTime = 0
  return function () {
    const current = +new Date()
    if(current - prevTime > time) {
      fn.apply(this, arguments)
      prevTime = current
    }
  }
}
