import Dog from "./inherit_Function";

test('借助构造函数继承', () => {
  const dog1 = new Dog('大黑')
  const dog2 = new Dog('大黄')

  dog1.name = '小黑'

  expect(dog1.name).not.toEqual(dog2.name)
})