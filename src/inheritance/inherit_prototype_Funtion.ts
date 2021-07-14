/**
 * 组合式继承：组合原型链和构造函数实现继承
 * 
 * 1. 通过原型链实现子类对父类原型对象上的属性和方法的继承
 * 2. 通过构造函数，继承父类实例属性和方法的继承，同时规避了子类实例对父类实例属性和方法的共享
 * 
 * 缺点
 * 
 * 1. 调用了两次父类构造函数
 *
 */
function Animal(name?: string) {
  this.name = name
  this.colors = ['black', 'white']
}

Animal.prototype.getName = function() {
  return this.name
}

function Dog(name?:string, age?: number) {
  Animal.call(this, name)
  this.age = age
}

Dog.prototype = new Animal()

Dog.prototype.constructor = Dog

export default Dog