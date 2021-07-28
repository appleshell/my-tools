import render from "./renderTemplate";

test('render template', () => {
  const data = {say: 'hi', name: 'jack'}
  const template = '<div>{{say}}</div><span>{{name}}</span>'
  expect(render(template, data)).toBe('<div>hi</div><span>jack</span>')
})