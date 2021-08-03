// 偏函数，接受一个函数和该函数的部分参数，返回一个新函数，接受剩余参数

function add(a, b, c) {
  return a + b + c
}

function partial(fn, ...args) {
  return function(...arg) {
    // 最后把两次传入的参数一起传给原函数进行调用
    return fn(...args, ...arg)
  }
}

export default partial
