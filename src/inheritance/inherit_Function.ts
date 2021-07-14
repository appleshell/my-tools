/**
 * 借助构造函数实现继承
 *
 * 1. 通过在子类的中调用父类的构造函数，使用call调用，将this指向子类实例，解决子类共享父类属性的问题
 * 2. 调用父类构造函数可以传入参数
 * 
 * 借助构造函数，即实现了对父类的继承，又避免了多个子类共享父类属性
 * 
 * 缺点：
 * 
 * 1. 只能继承父类实例上的属性和方法， 不能继承父类原型上的属性和方法
 * 2. 每次创建子类，都要执行一遍父类构造函数
 */
function Animal(name?: string) {
  this.name = name
  this.getName = function() {
    return this.name
  }
}

Animal.prototype.getNameLength = function() {
  return this.name.length
}

function Dog(name?: string) {
  Animal.call(this, name)
}

export default Dog