import debounce from "./debounce";

jest.useFakeTimers()

test('test debounce', () => {
  const test = jest.fn()
  const debounced = debounce(test, 1000)

  debounced()
  debounced()
  debounced()

  jest.runAllTimers()

  expect(test).toHaveBeenCalledTimes(1)
})