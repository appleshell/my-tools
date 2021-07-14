import Dog from './inherit_prototype'

test('原型链继承', () => {
  const dog1 = new Dog()
  const dog2 = new Dog()
  dog1.colors.push('red')

  expect(dog2.colors).toEqual(dog1.colors)
})