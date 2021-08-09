// Object.prototype.toString.call(null, o)
// 参考文章：https://github.com/mqyqingfeng/Blog/issues/11

Function.prototype.myCall = function(o) {
  const fn = this
  let context = o || window

  const args = [...arguments].slice(1)

  context.fn = fn
  const res = context.fn(...args)

  return res
}

const obj = {
  value: 23
}

function ff(v) {
  return this.value + v
}

console.log(ff.myCall(obj, 1))