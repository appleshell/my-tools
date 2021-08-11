import Function from "./myApply";

test('test my apply', () => {
  const obj = {
    value: 2,
  };
  
  function fn(a, b) {
    return this.value + a + b;
  }

  expect(fn.apply(obj, [2,3])).toBe(7)
})