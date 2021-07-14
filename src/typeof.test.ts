import getType from "./typeof";

describe('test typeof', () => {
  test('is Number', () => {
    const value = 1
    expect(getType(value)).toBe('Number')
  })

  test('is String', () => {
    const value = 'foo'
    expect(getType(value)).toBe('String')
  })

  test('is Null', () => {
    const value = null
    expect(getType(value)).toBe('Null')
  })

  test('is undefined', () => {
    const value = undefined
    expect(getType(value)).toBe('Undefined')
  })

  test('is Object', () => {
    const value = {foo: 'foo'}
    expect(getType(value)).toBe('Object')
  })

  test('is Array', () => {
    const value = [1,2]
    expect(getType(value)).toBe('Array')
  })

  test('is Function', () => {
    const value = function(){}
    expect(getType(value)).toBe('Function')
  })

  test('is Symbol', () => {
    const value = Symbol()
    expect(getType(value)).toBe('Symbol')
  })
})