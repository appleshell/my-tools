/**
 *
 * 寄生式组合继承，主要用来解决父类构造函数调用两次的问题
 *
 * 1. 解决的办法就是创建一个继承父类的中间对象，作为子类的原型对象
 *
 */
function Animal(name?: string) {
  this.name = name;
  this.colors = ["black", "white"];
}

Animal.prototype.getName = function () {
  return this.name;
};

function Dog(name?: string, age?: number) {
  Animal.call(this, name);
  this.age = age;
}

// Dog.prototype = Animal.prototype; // 这种方法的缺点是 会导致子类和父类的构造函数都指向父类构造函数。此外，如果在此基础上修改constructor，会改变父类的constructor指向

Dog.prototype = Object.create(Animal.prototype); // 创建一个中间对象，继承父类的原型对象
Dog.prototype.constructor = Dog; // 再把原型对象的构造函数执行本身

export default Dog;

// const o = new Dog("www", 2);

// console.log(o.__proto__ === Dog.prototype)
// console.log(o.__proto__ === Animal.prototype)

// console.log(Animal.prototype.constructor)

// console.log(o instanceof Dog);
// console.log(o instanceof Animal);
