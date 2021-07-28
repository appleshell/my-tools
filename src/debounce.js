// 防抖：最后一次出触发完事件time秒后，才开始执行事件
function debounce(fn, time) {
  let timeID
  return function() { // 原来是fn函数作为事件监听器，其中的this，event都能正确指向；现在返回的这个function是事件监听器，因此要把this和参数传递给fn
    const context = this
    const args = arguments
    clearTimeout(timeID)
    timeID = setTimeout(() => {
      fn.apply(context, args)
    }, time)
  }
}

// 立即执行的debounce
export function ImmeDebounce(fn, wait, immediate) {
  let timeID, isImmeCalled

  return function() {
    const context = this
    const args = arguments

    clearTimeout(timeID)

    if(immediate && !isImmeCalled) {
      isImmeCalled = true
      fn.apply(context, args)
    } else {
      timeID = setTimeout(() => {
        fn.apply(context, args)
      }, wait)
    }
  }
}

export default debounce