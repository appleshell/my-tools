import myInstanceof from './myInstanceof'

test('test my instanceof', () => {
  class Parent {}

  class Son extends Parent {}

  const o = new Son()

  expect(myInstanceof(o, Parent)).toBe(true)
})