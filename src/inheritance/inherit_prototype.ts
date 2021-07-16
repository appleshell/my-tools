/**
 * 
 * 
 * 所谓继承，就是访问子类对象的属性和方法时，如果子类对象没有这些属性和方法，就去子类的父类对象上找。js中，就是通过原型链进行查找的。
 * 
 * js中继承的本质，就是构建原型链，能够让子类的实例能够通过原型链找到父类上的属性和方法
 * 
 * 原型链继承
 * 
 * 1. 子类的构造函数的原型对象指向父类的实例
 * 2. 子类的实例同时继承父类的属性和方法
 * 
 * 缺点：
 * 
 * 1. 所有的子类实例共享父类中的引用类型的属性
 * 2. 子类在实例化时不能给父类构造函数传参
 * 
 * 原型链查找：
 * 
 * dog是子类实例，animal是父类实例
 * 
 * dog.__proto__  --> Dog.prototype --> animal --> animal.__proto__ --> Animal.prototype
 */
function Animal() {
  this.colors = ['black', 'white']
}

Animal.prototype.getColors = function() {
  return this.colors
}

function Dog() {}

Dog.prototype = new Animal()

export default Dog
