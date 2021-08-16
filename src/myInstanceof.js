
// instanceof的原理是右边对象的原型是否出现在左边对象的原型链上。
// 实现的核心是一定要理解什么是原型链，__proto__是原型链的关键
function myInstanceof(left, right) {
  let proto = left.__proto__

  while (true) {
    if(proto === null) return false
    if(proto === right.prototype) return true

    proto = proto.__proto__
  }
}

export default myInstanceof
