import { arrayUnique, arrayUniqueEs6, myUnique } from "./arrayUnique"

describe('unique a array with arrayUnique', () => {
  test('unique', () => {
    const value = [1, 2, 3, 3, 2]
    expect(arrayUnique(value)).toEqual([1, 2, 3])
  })

  test('not array', () => {
    expect(arrayUnique(3 as any)).toBeUndefined()
  })
})

describe('unique a array with arrayUniqueEs6', () => {
  test('unique', () => {
    const value = [1, 2, 3, 3, 2, 's', 'f', 's']
    expect(arrayUniqueEs6(value)).toEqual([1, 2, 3, 's', 'f'])
  })

  test('not array', () => {
    expect(arrayUniqueEs6(3 as any)).toBeUndefined()
  })
})

describe('unique a array with myUnique', () => {
  test('unique', () => {
    const value = [1, 2, 3, 3, 2, 's', 'f', 's']
    expect(myUnique(value)).toEqual([1, 2, 3, 's', 'f'])
  })

  test('not array', () => {
    expect(myUnique(3 as any)).toBeUndefined()
  })
})