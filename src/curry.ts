// 函数柯里化
// 通过闭包缓存每次传入的参数，直到缓存的参数与原函数的参数个数相同，就将缓存的参数传给原函数调用，返回调用后的值
function add(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function generate(...args) {
    if(args.length === fn.length) return fn(...args)
    return function(...arg) {
      // 如果缓存的参数小于原函数的参数个数，就将之前缓存的参数和新传入的参数，再次传入生成函数中，继续判断
      return generate(...args, ...arg)
    }
  }
}

// const curryAdd = curry(add);

// const res = curryAdd(1, 2)(3) === add(1, 2, 3);

// console.log(res)


export default curry;
