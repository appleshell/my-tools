import { flatten, flattenWithLoop } from "./arrayFlat";

test('flatten a array with recursion', () => {
  const arr = [1, [2, [3, [4, 5]]]]

  expect(flatten(arr)).toEqual([1, 2, 3, 4, 5])
})

test('flatten a array with while loop', () => {
  const arr = [1, [2, [3, [4, 5]]]]

  expect(flattenWithLoop(arr)).toEqual([1, 2, 3, 4, 5])
})