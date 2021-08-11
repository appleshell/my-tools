
/** 
 * bind方法三个特点：
 * 
 * 1. 第一个参数是返回函数的this指向
 * 2. 可以像柯里化一样将函数的参数分开传递，即偏函数
 * 3. 作为构造函数时，this的指向失效
 * 
 * 前两点的实现思路，由于bind方法返回的是函数，就利用闭包，将参数缓存起来，这样返回的函数就可以使用传入的this，并且可以把新传入的参数与之前的闭包保存的函数合并，实现偏函数的效果
 * */  
Function.prototype.myBind = function(o) {
  const fn = this
  const context = o || window

  const args = [...arguments].slice(1)

  return function() {
    const inArgs = [...arguments]
    return fn.apply(context, [...args, ...inArgs])
  }
}

var obj = {
  value: 'ttr',
  getVal(a, b) {
    console.log(this.value)
    return this.value + a + b
  }
}

const ff = obj.getVal

console.log(ff())

const ffb = ff.myBind(obj, 'ss')

console.log(ffb('dd'))

const ffbi = ff.bind(obj, 'ss')
