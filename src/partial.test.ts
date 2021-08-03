import partial from "./partial";

function add(a, b, c, d) {
  return a + b + c + d;
}

test("partial function", () => {
  const res = add(1, 2, 3, 4);
  const partialAdd = partial(add, 1, 2);

  expect(partialAdd(3, 4)).toEqual(res);
});
