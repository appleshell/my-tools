import curry from "./curry";

function add(a, b, c) {
  return a + b + c;
}

test("curry function", () => {
  const result = add(1, 2, 3);
  const curryAdd = curry(add);
  
  expect(curryAdd(1, 2, 3)).toEqual(result);
  expect(curryAdd(1)(2)(3)).toEqual(result);
  expect(curryAdd(1, 2)(3)).toEqual(result);
  expect(curryAdd(1)(2, 3)).toEqual(result);
});
