import { arrayUnique, arrayUniqueEs6 } from "./arrayUnique"

describe('unique a array', () => {
  test('unique', () => {
    const value = [1, 2, 3, 3, 2]
    expect(arrayUniqueEs6(value)).toEqual([1, 2, 3])
  })

  test('not array', () => {
    expect(arrayUniqueEs6(3 as any)).toBeUndefined()
  })
})