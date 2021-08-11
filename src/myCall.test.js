import Function from './myCall'

test('test my call', () => {
  const obj = {
    value: 123
  }

  function fn(a) {
    return this.value + a
  }

  expect(fn.myCall(obj, 2)).toBe(125)
})