import parseUrl from "./parseUrl";

test('parse url', () => {
  const url = 'http://www.baidu.com?name=jack&age=1&search=hello'
  expect(parseUrl(url)).toEqual({ name: 'jack', age: 1, search: 'hello' })
})

test('parse url', () => {
  const url = 'http://www.baidu.com?name=jack&age=1&search=hello&add=hi%2F12'
  expect(parseUrl(url)).toEqual({ name: 'jack', age: 1, search: 'hello', add: 'hi/12' })
})