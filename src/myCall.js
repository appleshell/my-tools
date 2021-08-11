// Object.prototype.toString.call(null, o)
// 参考文章：https://github.com/mqyqingfeng/Blog/issues/11

/**
 * 实现思路：
 * 1. call方法传入的第一个参数是所调用函数中this的指向，因此要使用这个参数来调用函数
 * 2. 被调用的函数就是call函数中的this
 * 3. 截取函数调用的参数，并传入
*/
Function.prototype.myCall = function(o) {
  const fn = this
  let context = o || window

  const args = [...arguments].slice(1)

  context.fn = fn
  const res = context.fn(...args)

  delete context.fn

  return res
}

export default Function
