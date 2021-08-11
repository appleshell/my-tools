/**
 * new 关键字做了一下几件事
 * 
 * 1. 创建一个新的对象
 * 2. 将对象的__proto__属性指向构造函数的原型对象
 * 3. 将构造函数的this指向这个新对象，并调用
 * 4. 返回这个新对象
 * 
 * 注意：构造函数如果显式的返回一个对象，那么new 关键字最终返回的就是这个对象，除此之外都会返回新对象
 */ 

function objectFactory() {
  let obj = Object.create(null)

  const constructor = [...arguments].shift()

  obj.__proto__ = constructor.prototype

  const res = constructor.apply(obj, [...arguments].slice(1))

  return typeof res === 'object' ? res || obj : obj
}
