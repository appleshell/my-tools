import isArray from "./isArray";

test("test isArray", () => {
  const arr = [1, 2, 3];
  expect(isArray(arr)).toBeTruthy();
});

test("test no array", () => {
  const obj = { foo: "foo" };
  expect(isArray(obj)).toBeFalsy();
});
